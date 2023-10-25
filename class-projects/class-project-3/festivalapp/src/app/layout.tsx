import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SARS FESTIVAL',
  description: 'Your favourite festival',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav>
        <ul className='flex justify-center gap-4 text-lg gap-4'>
        <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/aboutus">About Us</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/lineup">Lineup</Link>
          </li>
          <li>
            <Link href="/activities">Activities</Link>
          </li>
          <li>
            <Link href="/camping">Camping</Link>
          </li>
          <li>
            <Link href="/foodnbeer">Food And Beer</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/customersuport">Customer Support</Link>
          </li>
        </ul>
      </nav>
      {children}</body>
    </html>
  )
}
