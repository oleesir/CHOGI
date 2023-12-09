import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <div className='w-full mt-auto bg-[#121A21] flex justify-center pt-40'>
      <div className='  mx-auto'>
        <div className='flex flex-col'>
          <div className='w-full flex justify-center mb-3'>
            <p className='font-semibold text-[#FFF] text-2xl'>Follow Us</p>
          </div>
          <div className='flex justify-between mb-10'>
            <Facebook color='#FFF' className='cursor-pointer' />
            <Youtube color='#FFF' className='cursor-pointer' />
            <Instagram color='#FFF' className='cursor-pointer' />
            <Twitter color='#FFF' className='cursor-pointer' />
          </div>
          <p className='font-medium text-xs text-[#FFF] mt-auto'>
            &copy; 2023 RHOMI, All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
