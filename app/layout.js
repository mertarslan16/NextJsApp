import { Inter } from 'next/font/google'
import './ui/globals.css'
import NavbarHome from './components/Navbar/page'
import FooterHome from './components/Footer/page'
import styles from "./global.module.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js Admin Dashboard',
  description: 'Next.js Tutorial',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.container}>
          <div><NavbarHome /></div>
          <div>{children}</div>
          <div><FooterHome /></div>
        </div>
      </body>
    </html>
  )
}
