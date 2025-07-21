import { Raleway } from 'next/font/google';

import Header from '@/components/main-layout/header/header';
import Footer from '@/components/main-layout/footer';

import './globals.css';
import MinimizedHeader from '@/components/main-layout/header/minimized-header';

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
        <MinimizedHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
