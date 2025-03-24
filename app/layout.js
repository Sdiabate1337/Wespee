import './globals.css'

export const metadata = {
  title: 'Wespee - Protection Mobile Money',
  description: 'Sécurisez vos transactions Mobile Money',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link 
          rel="stylesheet" 
          href="https://db.onlinewebfonts.com/c/860c3ec7bbc5da3e97233ccecafe512e?family=Circular+Std+Book" 
        />
      </head>
      <body>
        {children}
      </body>
   </html>
  );
}
  
