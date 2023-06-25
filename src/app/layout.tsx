import './globals.css'
import '../../public/assets/fonts/fonts.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: 'Egzon Bajrami',
  description: 'Egzon Bajrami personal website, made in NextJs!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
