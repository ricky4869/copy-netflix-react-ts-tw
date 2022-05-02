import React from 'react';
import Navbar from '../../components/Navbar';

import Home from '../../pages/Home';

const MainLayout = () => {
  return (
    <div className='main-layout'>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
};

export default MainLayout;
