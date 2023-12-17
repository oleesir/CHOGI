import Image from 'next/image';
import { Button } from '@/components/ui/button';
const WatchOnlineSection = () => {
  return (
    <div className='w-full  py-20 bg-[#121A21] px-4'>
      <div className='max-w-6xl m-auto'>
        <div className='grid  md:grid-cols-2'>
          <div className=' px-4 md:hidden  mb-10'>
            <Image
              src='/flip_bible.avif'
              alt='Picture of the pastor'
              width={0}
              height={0}
              sizes='100vh'
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className='pr-4'>
            <p className='text-3xl text-[#FFF] font-semibold mb-8'>JOIN US ONLINE</p>
            <p className='text-[18px] text-[#FFF] font-light leading-8 mb-8'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
              quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
              harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
            </p>

            <Button className='hover:bg-transparent hover:border-2 hover:border-white text-sm py-6 px-12 cursor-pointer z-10 mt-5 bg-white hover:text-[#FFF] border-2 text-[#000] rounded-none '>
              WATCH
            </Button>
          </div>

          <div className='hidden md:flex '>
            <Image
              src='/flip_bible.avif'
              alt='Picture of the pastor'
              width={0}
              height={0}
              sizes='100vh'
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchOnlineSection;
