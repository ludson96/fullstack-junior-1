import type { Metadata } from 'next';
import './globals.css';
import Head from '../components/Head';
import { poppins } from '../utils/fonts';

export const metadata: Metadata = {
  title: 'GathSession - Build Your Best Community',
  description: 'Meet and communicate with the best people to run projects, events or other activities in a more effective and fun way.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Head />
        {children}
      </body>
    </html>
  );
}
