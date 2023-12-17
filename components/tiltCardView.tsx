import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

const TiltCardView = () => {
  return (
    <div className='w-full  bg-gradient-to-br from-slate-100 to-slate-50 py-20 md:py-40 px-4'>
      <div className='max-w-7xl md:mx-auto flex flex-col items-center justify-center'>
        <div className='flex justify-center w-full mb-10'>
          <p className='font-extrabold text-4xl text-black'>GET CONNECTED</p>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-3 md:gap-4'>
          <TiltCard title='KIDS' />
          <TiltCard title='YOUTH' />
          <TiltCard title='REALATIONSHIP NETWORK' />
        </div>
      </div>
    </div>
  );
};

const TiltCard = ({ title }: { title: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg']);

  const handleMouseMove = (e: any) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: 'preserve-3d',
      }}
      className='relative h-80 md:h-80 md:w-full rounded-none bg-gradient-to-br from-slate-300 to-slate-200 cursor-pointer mb-10 '
    >
      <div
        style={{
          transform: 'translateZ(75px)',
          transformStyle: 'preserve-3d',
        }}
        className='absolute inset-4  rounded-none bg-white shadow-lg'
      >
        <Image
          src='/flip_bible.avif'
          alt='Picture of the pastor'
          width={0}
          height={0}
          sizes='100vh'
          style={{ width: '100%', height: '100%' }}
        />
        <div className='w-full absolute  bottom-0  left-0 h-full'>
          <div className='w-full flex justify-center items-center h-full '>
            <p className='text-white text-xl font-semibold'>{title}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TiltCardView;
