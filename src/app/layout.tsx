import { Button } from '@/components/ui/button'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI-Sass genrator ',
  description: 'AI for sass',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Button variant='ghost' size='lg' className='text-gray-500'>shadcn</Button>
        {children}
        </body>
    </html>
  )
}
