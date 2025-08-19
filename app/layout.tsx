

import './styles/globals.css'
import Navbar from './components/global/navbar'



export const metadata = {
  title: 'My App',
  description: 'Created with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        

        {children}
      </body>
    </html>
  )
}
