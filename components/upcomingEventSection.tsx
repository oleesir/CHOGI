import React from 'react';
import Image from 'next/image';
import { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { carouselSettings } from '@/lib/carouselSettings';
import { Button } from '@/components/ui/button';

const UpComingEventSection = () => {
  const customSlider = useRef();

  const images = ['/pastor.jpg', '/kids_church.jpeg'];

  return (
    <div className='w-full  py-20 bg-white px-4'>
      <div className='max-w-7xl m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div>
            <div className='relative w-full px-3 md:px-0 '>
              <div className='w-full md:px-15 '>
                <Slider
                  {...carouselSettings}
                  ref={(slider: any) => (customSlider.current = slider)}
                  className=' md:pl-12  '
                >
                  {images.map((item: any, i: number) => (
                    <Image
                      key={i}
                      src={item}
                      alt='Picture of the pastor'
                      width={0}
                      height={0}
                      sizes='100vh'
                      style={{ width: '100%', height: 'auto' }}
                    />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          <div className='flex flex-col pt-10 md:pt-0'>
            <div className='w-full flex justify-center'>
              <p className='font-extrabold text-4xl text-[#000]  mb-8'>UP COMING EVENTS</p>
            </div>
            <div className='flex flex-col'>
              <p className='text-[18px] text-[#000] font-light leading-8 mb-8 pl-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
                quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
                harum
              </p>
            </div>
            <div className='w-full flex justify-center'>
              <Button className='hover:bg-[#121A21] hover:border-2 hover:border-[#121A21] text-sm py-6 px-12 cursor-pointer z-10 mt-5 bg-white hover:text-[#FFF] border-2 text-[#121A21] rounded-none'>
                MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpComingEventSection;
