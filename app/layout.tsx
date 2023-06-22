import type { Metadata } from "next"
import '@/app/globals.css'
import Script from 'next/script';

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


        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YLGP0D7K5M"></script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YLGP0D7K5M');
          `}
        </Script>

      </body>
    </html>
  )
}
