import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CardView = () => {
  return (
    <motion.div
      className='w-full flex justify-center'
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
    >
      <Card className='w-full h-full border-none shadow-none'>
        <CardContent>
          <Image
            src='/pastor.jpg'
            alt='Picture of the pastor'
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: 'auto' }}
          />
        </CardContent>
        <CardFooter>
          <div>
            <p className='font-semibold text-2xl'>Daniel Wright</p>
            <p className=' text-lg'>Senior Pastor</p>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CardView;
