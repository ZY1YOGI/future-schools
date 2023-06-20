import "./auth.css"


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light" data-theme="light">

      <body className="antialiased bg-body-light dark:bg-body-dark">
        {children}
      </body>
    </html>
  )
}
