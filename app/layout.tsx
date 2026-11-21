import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['600', '700', '800'],
  display: 'swap',
})

const title = 'Muhammad Mujeeb Ur Rahman — AI & Computer Vision Engineer'
const description =
  'AI and computer vision engineer building LLM applications, RAG pipelines, AI agents and machine learning systems.'

export const metadata: Metadata = {
  title,
  description,
  keywords: ['AI Engineer', 'Computer Vision', 'Machine Learning', 'LLM', 'RAG', 'AI Agents', 'Deep Learning', 'Python'],
  authors: [{ name: 'Muhammad Mujeeb Ur Rahman' }],
  creator: 'Muhammad Mujeeb Ur Rahman',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title,
    description,
    siteName: 'Muhammad Mujeeb Ur Rahman',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
