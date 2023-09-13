'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import {staggerContainer, textVariant } from '../utils/motion';

const Contact= () => (
  <section>
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex flex-col`}>
    <motion.div variants={textVariant(0.3)} className="">
    <div className='flex flex-col mt-[110px] items-center' id="Contact Me">
      <div className='flex flex-col items-center mb-20'>
        <a className='text-white font-mainFont text-[50px]'> Contact Me </a>
        <a className='text-white/[.6] font-mainFont text-[25px] mb-14'>Let's get in Touch</a>
      </div>
      <div className='flex flex-row items-center space-x-24'>
        <div className='flex flex-col items-center space-y-24'>
          <div className='flex flex-col items-center space-y-4'>
            <svg width="396" height="116" viewBox="0 0 396 116" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="392" height="112" rx="48" stroke="white" stroke-width="4"/>
                <svg x="50" y="32" width="70" height="50" viewBox="0 0 57 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0V40.6896H56.7769V0H0ZM48.3077 4.52106L28.3885 21.8141L8.46923 4.52106H48.3077ZM4.73141 7.36933L14.0286 15.4394L4.73141 30.2685V7.36933ZM6.55301 36.1685L17.6009 18.559L28.3885 27.9176L39.1761 18.559L50.2239 36.1685H6.55301ZM52.0455 30.2685L42.7483 15.4394L52.0455 7.36933V30.2685Z" fill="white"/>
                </svg>
                <text x="145" y="65" fill="white" fontSize={25} fontFamily='mainFont' fontWeight={400}>d3nnis.s@web.de</text>
            </svg>
            <a className='text-white/[.6] font-mainFont text-[25px]'>Send me an Email</a>
          </div>
          <div className='flex flex-col items-center space-y-4'>
            <svg width="310" height="116" viewBox="0 0 310 116" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="306" height="112" rx="48" stroke="white" stroke-width="4"/>
            </svg>
            <a className='text-white/[.6] font-mainFont text-[25px]'>Wanna Collaborate?</a>
          </div>
        </div>
        <div className='flex flex-col items-center space-y-24'>
          <div className='flex flex-col items-center space-y-4'>
            <svg width="396" height="116" viewBox="0 0 396 116" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="392" height="112" rx="48" stroke="white" stroke-width="4"/>
              <image href="/linkedin.png" height={69} width={69} x="45" y="23"></image>
              <text x="145" y="65" fill="white" fontSize={25} fontFamily='mainFont' fontWeight={400}>Dennis Schielke</text>
            </svg>
            <a className='text-white/[.6] font-mainFont text-[25px]'>Work with me!</a>
          </div>
          <div className='flex flex-col items-center space-y-4'>
            <svg width="310" height="116" viewBox="0 0 310 116" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="306" height="112" rx="48" stroke="white" stroke-width="4"/>
            </svg>
            <a className='text-white/[.6] font-mainFont text-[25px]'>Prefer Xing? No Problem!</a>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
    </motion.div>
  </section>
);

export default Contact;
