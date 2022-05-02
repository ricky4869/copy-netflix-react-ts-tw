import React from 'react';

import useScroll from '../../hooks/useScroll';

const Navbar = () => {
  const { y } = useScroll();

  return (
    <nav className='fixed z-50 flex items-center w-full h-10 px-3 bg-gradient-to-b from-black/70 to-black/0 sm:px-6 md:px-8 lg:h-16 lg:px-11'>
      <div className='relative z-10'>
        <a
          href='/'
          className='block w-[59px] h-4 bg-cover bg-center bg-no-repeat lg:w-[111px] lg:h-[30px]'
          style={{ backgroundImage: `url('/images/logo.svg')` }}
        ></a>
      </div>

      <div
        style={{ opacity: y > 0 ? 1 : 0 }}
        className='absolute top-0 left-0 block w-full h-full transition-all duration-500 bg-black nav-dropback'
      ></div>
    </nav>
  );
};

export default Navbar;
