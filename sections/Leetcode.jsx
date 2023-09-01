'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import {staggerContainer, textVariant } from '../utils/motion';

const Leetcode = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <div className='flex flex-col pt-[110px]'>
      <div className='flex flex-col items-center'>
        <a className='text-white font-mainFont text-[50px]'> Leetcode</a>
        <a className='text-white/[.6] font-mainFont text-[25px] mb-14'>Problem Solving</a>
      </div>
    </div>
  </section>
);

export default Leetcode;
