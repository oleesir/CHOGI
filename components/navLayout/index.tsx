import { Navbar } from '@/components/navLayout/navbar';
import { MobileMenu } from '@/components/navLayout/mobileMenu';
import React from 'react';

const NavLayout = () => {
  return (
    <>
      <div className='hidden md:flex'>
        <Navbar />
      </div>
      <div className='flex md:hidden'>
        <MobileMenu />
      </div>
    </>
  );
};

export default NavLayout;
