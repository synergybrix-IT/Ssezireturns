import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const runtime = 'nodejs'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
)

interface ContactPayload {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
}

export async function POST(request: Request) {
  try {
    const payload: ContactPayload = await request.json()

    if (!payload.name || !payload.email || !payload.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { error } = await supabase.from('contacts').insert({
      name: payload.name,
      email: payload.email,
      phone: payload.phone || null,
      status: true,
    })

    if (error) {
      console.error('Supabase insert error', error)
      return NextResponse.json({ error: 'Failed to save contact' }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Contact API error', error)
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
