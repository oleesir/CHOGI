import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const IntroWords = () => {
  const textTwo = 'ROYAL HOUSE'.split('');
  const textThree = 'OF '.split('');
  const textFour = 'MERCY INTERNATIONAL'.split('');

  return (
    <div className='absolute top-2/3 left-2 md:left-3'>
      <div>
        {textTwo.map((el: any, i: number) => (
          <motion.span
            className='text-3xl text-[#FFF]  md:text-5xl font-bold z-30'
            initial={{ opacity: 0 }}
            animate={{ opacity: 2 }}
            transition={{
              duration: 0.5,
              delay: i / 20,
            }}
            key={i}
          >
            {el}
          </motion.span>
        ))}
      </div>

      <div>
        {textThree.map((el: any, i: number) => (
          <motion.span
            className='text-3xl text-[#FFF] md:text-5xl font-bold z-30'
            initial={{ opacity: 0 }}
            animate={{ opacity: 2 }}
            transition={{
              duration: 0.5,
              delay: i / 20,
            }}
            key={i}
          >
            {el}
          </motion.span>
        ))}
      </div>
      <div>
        {textFour.map((el: any, i: number) => (
          <motion.span
            className='text-3xl text-[#FFF]  md:text-5xl font-bold z-30'
            initial={{ opacity: 0 }}
            animate={{ opacity: 2 }}
            transition={{
              duration: 0.5,
              delay: i / 20,
            }}
            key={i}
          >
            {el}
          </motion.span>
        ))}
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 2,
          },
        }}
        viewport={{ once: true }}
      >
        <Button className='bg-transparent border-2 border-white text-sm py-6 px-8 cursor-pointer z-10 mt-5'>
          NEW HERE ? <ArrowRight size={18} className='ml-2' />
        </Button>
      </motion.div>
    </div>
  );
};

export default IntroWords;
