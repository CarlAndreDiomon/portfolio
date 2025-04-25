// app/layout.js
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Nabvar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Carl | Portfolio',
  description: 'My personal developer portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-1 px-4 sm:px-8 md:px-16 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
