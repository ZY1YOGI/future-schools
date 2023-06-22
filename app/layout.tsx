import type { Metadata } from "next"
import '@/app/globals.css'
import Script from 'next/script';
import Head from 'next/head'
export const metadata: Metadata = {
  applicationName: 'Future Schools',
  authors: [{ name: 'Youssef Amjad', url: '' }],
  creator: 'Youssef Amjad',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light" data-theme="light">
      <Head>
        {/* <!-- Google Tag Manager --> */}
        <Script>{`
          (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})
            (window,document,'script','dataLayer','GTM-NV54S9F');
          `}
        </Script>
        {/* <!-- End Google Tag Manager --> */}
      </Head>
      <body className="antialiased bg-body-light dark:bg-body-dark">
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NV54S9F"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
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
