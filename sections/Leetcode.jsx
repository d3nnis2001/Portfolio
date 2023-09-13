'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import {staggerContainer, textVariant } from '../utils/motion';

const Leetcode = () => (
  <section>
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex flex-col`}>
    <motion.div variants={textVariant(0.3)} className="">
    <div className='flex flex-col pt-[110px]'>
      <div className='flex flex-col items-center'>
        <a className='text-white font-mainFont text-[50px]'> Leetcode</a>
        <a className='text-white/[.6] font-mainFont text-[25px] mb-14'>Problem Solving</a>
      </div>
    </div>
    </motion.div>
    </motion.div>
  </section>
);

export default Leetcode;
