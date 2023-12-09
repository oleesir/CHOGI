import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

export const MobileMenu = () => {
  return (
    <div className='shadow h-[80px] z-50 top-0 bg-[#121A21] fixed w-full p-5 flex justify-between  items-center'>
      <div>
        <Link href='/public' className='font-bold text-3xl text-[#FFF] cursor-pointer '>
          RHOMI
        </Link>
      </div>
      <div>
        <Sheet>
          <SheetTrigger className=' w-full flex  md:hidden  hover:opacity-75 transition justify-between items-center'>
            <Menu size={30} color='#FFF' />
          </SheetTrigger>

          <SheetContent side='left' className='pt-5 px-0 bg-white'>
            <div>
              <div className='w-full flex flex-col '>
                <div className='w-full grid justify-items-start '>
                  <Accordion type='single' collapsible className='pl-5 pr-4 w-full py-2 '>
                    <AccordionItem value='item-1' className='border-b-0'>
                      <AccordionTrigger className='hover:no-underline py-0'>
                        <p className='text-[#151875] text-[18px] max-w-prose'>Categories</p>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className=' w-full'></div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='pl-5 pr-4 w-full py-2 '>
                    <AccordionItem value='item-2' className='border-b-0'>
                      <AccordionTrigger className='hover:no-underline py-0'>
                        <p className='text-[#151875] text-[18px] max-w-prose'>Brands</p>
                      </AccordionTrigger>
                      <AccordionContent></AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
