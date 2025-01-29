// app/focus-areas.tsx

import React from 'react';
import FocusAreas from '../Components/Focus_Areas';
import Navbar from '../Components/navBar';
import Footer from '../Components/Footer';


const FocusAreasPage: React.FC = () => {
  return (
    <main>
      <Navbar/>
      <FocusAreas />
      <Footer/>
    </main>
  );
};

export default FocusAreasPage;
