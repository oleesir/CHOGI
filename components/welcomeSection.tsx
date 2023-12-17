import Image from 'next/image';
const WelcomeSection = () => {
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
          <div className=' pr-4'>
            <p className='text-[18px] text-[#FFF] font-light leading-8 mb-8'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
              quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
              harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel
              sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum
            </p>
            <p className='text-3xl text-[#FFF] font-semibold'>JOIN US THIS SUNDAY</p>
          </div>

          <div className='hidden md:flex'>
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

export default WelcomeSection;
