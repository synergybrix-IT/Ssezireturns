import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScriptsLoader from '@/components/ScriptsLoader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'SSezireturns - Logistics & Transportation',
    template: '%s | SSezireturns',
  },
  description: 'SSEZI Returns system is specially crafted to manage end-to-end order returns & distribution with complete efficiency.',
  keywords: ['logistics', 'transportation', 'returns', 'distribution', 'courier', 'shipping'],
  authors: [{ name: 'SSezireturns' }],
  creator: 'SSezireturns',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://ssezireturns.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'SSezireturns',
    title: 'SSezireturns - Logistics & Transportation',
    description: 'SSEZI Returns system is specially crafted to manage end-to-end order returns & distribution with complete efficiency.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SSezireturns - Logistics & Transportation',
    description: 'SSEZI Returns system is specially crafted to manage end-to-end order returns & distribution with complete efficiency.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/vendors/normalize.css" />
        <link rel="stylesheet" href="/assets/css/vendors/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/vendors/uicons-regular-rounded.css" />
        <link rel="stylesheet" href="/assets/css/plugins/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/plugins/perfect-scrollbar.css" />
        <link rel="stylesheet" href="/assets/css/plugins/select2.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/slick.css" />
        <link rel="stylesheet" href="/assets/css/plugins/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/style28b5.css?v=2.0.0" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Header />
        <main className="main">{children}</main>
        <Footer />
        <div className="body-overlay-1" />
        <ScriptsLoader />
        <Script src="/assets/js/vendors/modernizr-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/vendors/jquery-3.6.0.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  )
}
