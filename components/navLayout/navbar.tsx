'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className='shadow h-[80px] z-50 top-0 bg-[#121A21] fixed w-full p-5 flex justify-center'>
      <div className='w-full max-w-7xl flex justify-between items-center'>
        <Link href='/' className='font-bold text-3xl text-[#FFF] cursor-pointer '>
          RHOMI
        </Link>
        <div className='flex'>
          <Link
            href='/about_us'
            className={
              pathname === '/about_us'
                ? ' text-[#0958CB]  transition-all  duration-500  cursor-pointer font-semibold mr-8 text-[14px]'
                : 'text-[#FFF] transition-all  duration-500 cursor-pointer font-semibold mr-8 text-[14px]'
            }
          >
            ABOUT US
          </Link>
        </div>
      </div>
    </div>
  );
};
