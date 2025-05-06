import './global.css';
import { ReactNode } from 'react';
import { Michroma } from 'next/font/google';

// Define the Michroma font
const michroma = Michroma({
  weight: '400', // Michroma only has regular weight
  subsets: ['latin'],
  variable: '--font-michroma',
  display: 'swap',
});

export const metadata = {
  title: 'iCogLabs',
  description: 'AGI Building company',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`bg-black text-white m-0 p-0 ${michroma.variable}`}>
      <body className="m-0 p-0 box-border overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}