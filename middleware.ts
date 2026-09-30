import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const redirects: Record<string, string> = {
    '/index.php': '/',
    '/about.php': '/about',
    '/services.php': '/services',
    '/contact.php': '/contact',
    '/blog.html': '/blog',
    '/blog-sing.html': '/blog',
    '/blog-single.html': '/blog-single',
    '/request-a-quote.html': '/request-a-quote',
    '/workprocess.html': '/workprocess',
    '/our-team.html': '/our-team',
    '/faqs.html': '/faqs',
    '/trackyourparcel.html': '/trackyourparcel',
    '/career.html': '/career',
    '/comingsoon.html': '/comingsoon',
    '/login.html': '/login',
    '/register.html': '/register',
    '/term-conditions.html': '/term-conditions',
    '/service-detail.html': '/service-detail',
    '/newsletter.html': '/newsletter',
    '/404.html': '/not-found',
  }

  const destination = redirects[pathname]
  if (destination) {
    return NextResponse.redirect(new URL(destination, request.url), 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|robots.txt|sitemap.xml).*)'],
}
