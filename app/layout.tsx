cexport const metadata = {
  title: 'Corsini Art Gallery',
  description: 'Fond d’écran + test',
};

import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
