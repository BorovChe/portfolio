import { Raleway } from 'next/font/google';

import Header from '@/components/main-layout/header';
import Footer from '@/components/main-layout/footer';

import './globals.css';

const raleway = Raleway({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
