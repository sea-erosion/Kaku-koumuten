import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '架空工務店 | 地域に根ざした家づくり',
  description: '大分県で30年。新築・リノベーション・修繕工事はお任せください。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
