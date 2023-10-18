import './globals.css'
import type { Metadata } from 'next'
import { Ubuntu} from 'next/font/google'
import {ReactQueryProvider} from "@/app/ReactQueryProvider";

const ubuntu = Ubuntu({ subsets: ['latin'],
weight:'400'})

export const metadata: Metadata = {
  title: 'Ultron',
  description: 'Трекер тренировок Ultron',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <ReactQueryProvider>
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
      </ReactQueryProvider>
  )
}
