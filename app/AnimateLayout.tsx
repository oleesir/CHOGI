'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { AnimatePresence } from 'framer-motion';

export default function AnimateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnimatePresence>
        <motion.div
        // variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }}
        // initial='hidden'
        // animate='visible'
        // className='w-full'
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
