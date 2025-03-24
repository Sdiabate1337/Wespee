import './globals.css'

export const metadata = {
  title: 'Sécurisez vos transactions Mobile Money | Protection contre les fraudes',
  description: 'Nouvelle solution innovante pour protéger vos transactions Mobile Money contre les fraudes. Lancée pour répondre aux défis croissants de sécurité dans les paiements mobiles en Afrique.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}