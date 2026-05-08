import { Geologica } from 'next/font/google';
import localFont from 'next/font/local';
import "./globals.css"; // Ensure this is imported!

const geologica = Geologica({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geologica',
});

const mosseta = localFont({
  src: '../../public/fonts/Mosseta-Regular.otf', // Make sure the 'fonts' folder is inside 'src/app'
  display: 'swap',
  variable: '--font-mosseta',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geologica.variable} ${mosseta.variable}`}>
      <body className="font-geologica">
        {children}
      </body>
    </html>
  );
}