import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '85 Christmas Street, Northcote VIC 3070 | Property',
  description: '4 bedroom, 3 bathroom house in Northcote. Sold for $2,920,000 in October 2025.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

