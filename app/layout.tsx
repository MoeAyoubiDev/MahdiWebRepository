import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dr. Mahdi Kheir Din - Physiotherapist & Rehabilitation Specialist',
  description: 'Professional physiotherapy services in Beirut, Lebanon. Helping you move better, recover faster, and live pain-free.',
  keywords: 'physiotherapy, rehabilitation, Beirut, Lebanon, sports injury, back pain, neck pain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

