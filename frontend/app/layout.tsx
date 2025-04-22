import './global.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'iCogLabs',
  description: 'AGI Building company',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-black text-white m-0 p-0">
      <body className="m-0 p-0 box-border overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
