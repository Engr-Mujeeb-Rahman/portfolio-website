import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Muhammad Mujeeb Ur Rahman | AI Engineer',
  description: 'AI Engineer specializing in LLM systems, RAG pipelines, AI agents, and machine learning. Building intelligent systems that think, learn, and automate.',
  keywords: ['AI Engineer', 'Machine Learning', 'LLM', 'RAG Systems', 'AI Agents', 'Deep Learning', 'Python', 'LangChain'],
  authors: [{ name: 'Muhammad Mujeeb Ur Rahman' }],
  creator: 'Muhammad Mujeeb Ur Rahman',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Muhammad Mujeeb Ur Rahman | AI Engineer',
    description: 'AI Engineer specializing in LLM systems, RAG pipelines, AI agents, and machine learning.',
    siteName: 'Mujeeb Rahman Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Mujeeb Ur Rahman | AI Engineer',
    description: 'AI Engineer specializing in LLM systems, RAG pipelines, AI agents, and machine learning.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#05070d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
