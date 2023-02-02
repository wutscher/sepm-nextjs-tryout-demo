import Link from "next/link"
import Navigation from "./navigation"
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <base href="/" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1976d2" />

      </head>
      <body>
        <div style={{display: "flex", flexDirection: "column"}}>
          <div>
            {/* <Link href="/notes">Notes REST</Link> */}
            <Navigation></Navigation>
          </div>
          <div className="container mx-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
