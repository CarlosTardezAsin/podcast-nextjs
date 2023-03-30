import { NavMenu } from '@/components/nav-menu';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

  <html>
      <body>
        <NavMenu />
        <main style={{ marginTop: 10 }}>
          {children}
        </main>
      </body>
  </html>     
  )
}
