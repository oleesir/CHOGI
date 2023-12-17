import { motion } from 'framer-motion';

const YearSection = () => {
  return (
    <div className='w-full py-20 md:py-40 bg-[#FFF]'>
      <div className='md:max-w-7xl m-auto  px-5'>
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
          <p className='text-[45px]  md:text-[90px] font-extrabold text-[#000] leading-normal'>
            YEAR OF SURE FOUNDATION AND NEW OPPORTUNITIES
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default YearSection;
