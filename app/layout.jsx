import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import LayoutUtilComponent from './layoutUtilComponent'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutUtilComponent children={children}>
          <Navbar />
          {children}
        </LayoutUtilComponent>
      </body>
    </html>
  )
}