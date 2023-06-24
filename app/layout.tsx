import type { Metadata } from "next"
import '@/app/globals.css'
import Script from 'next/script';

// import 'aos/dist/aos.css';



export const metadata: Metadata = {
  applicationName: 'Future Schools',
  authors: [{ name: 'Youssef Amjad', url: '' }],
  creator: 'Youssef Amjad',
  verification: { google: 'wZO1kaaUlZm8cLkM3C_dSzZu_XEW4XNbS7D_Xmjwpw4' },
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0E1422" },
    { media: "(prefers-color-scheme: light)", color: "#E4E9F7" }
  ],
  manifest: "/manifest.json",
  robots: "index, follow",
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" className="light" data-theme="light">

      <body className="antialiased bg-body-light dark:bg-body-dark">
        {children}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-YLGP0D7K5M"></script> */}
        {/* <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YLGP0D7K5M');
          `}
        </Script> */}

      </body>
    </html>
  )
}
