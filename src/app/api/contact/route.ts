import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

interface ContactPayload {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
}

function isContactPayload(value: unknown): value is ContactPayload {
  if (typeof value !== 'object' || value === null) {
    return false
  }

  const payload = value as Record<string, unknown>
  return (
    typeof payload.name === 'string' &&
    typeof payload.email === 'string' &&
    typeof payload.message === 'string' &&
    (payload.phone === undefined || typeof payload.phone === 'string') &&
    (payload.subject === undefined || typeof payload.subject === 'string')
  )
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  if (!isContactPayload(body)) {
    return NextResponse.json({ error: 'Invalid contact details' }, { status: 400 })
  }

  const name = body.name.trim()
  const email = body.email.trim()
  const message = body.message.trim()
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY?.trim()
  const from = process.env.EMAIL_FROM?.trim()
  const to = process.env.EMAIL_TO?.trim()
  if (!apiKey || !from || !to) {
    console.error('Contact email is not configured')
    return NextResponse.json({ error: 'Contact form is not configured' }, { status: 503 })
  }

  const subject = body.subject?.trim() || 'New contact form message'
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${body.phone?.trim() || 'Not provided'}`,
    `Subject: ${subject}`,
    '',
    message,
  ].join('\n')

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        text,
      }),
    })

    if (!response.ok) {
      console.error('Contact email delivery failed', { status: response.status })
      return NextResponse.json({ error: 'Failed to send contact message' }, { status: 502 })
    }
  } catch (error) {
    console.error('Contact email request failed', error)
    return NextResponse.json({ error: 'Failed to send contact message' }, { status: 502 })
  }

  return NextResponse.json({ success: true }, { status: 200 })
}
