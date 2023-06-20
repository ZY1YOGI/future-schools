import type { Metadata } from "next"
import '@/app/globals.css'


export const metadata: Metadata = {
  applicationName: 'Future Schools',
  authors: [{ name: 'Youssef Amjad', url: '' }],
  creator: 'Youssef Amjad',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light" data-theme="light">

      <body className="antialiased bg-body-light dark:bg-body-dark">
        {children}
      </body>
    </html>
  )
}
