import './global.css';
import { ReactNode } from 'react';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/navBar";


export const metadata = {
  title: 'iCogLabs',
  description: 'AGI Building company',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />{ 
      children}
      <Footer/>
      
        
       </body>
    </html>
  );
}
