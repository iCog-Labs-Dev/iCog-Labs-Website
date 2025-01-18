import './global.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'iCogLabs',
  description: 'AGI Building company',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
