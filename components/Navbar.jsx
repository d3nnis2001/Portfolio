'use client';

import { motion } from "framer-motion"

import styles from "../styles"
import {textVariantRev, staggerContainer} from "../utils/motion"

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => (
  <motion.nav variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className={`${styles.xPaddings} py-8 relative`}>
      <motion.div variants={textVariantRev(0.9)} className="">
      <div className={`${styles.innerWidth} mx-auto flex justify-start gap-32 ml-16`}>
        <button onClick={() => scrollToSection("About Me")} class="group font-mainFont text-[30px] text-white transition duration-300">
          About Me
          <span class="block max-w-0 group-hover:max-w-[157px] transition-all duration-500 h-0.5 bg-white"></span>
        </button>
        <button onClick={() => scrollToSection("Skills")} class="group font-mainFont text-[30px] text-white transition duration-300">
          Skills
          <span class="block max-w-0 group-hover:max-w-[157px] transition-all duration-500 h-0.5 bg-white"></span>
        </button>
        <button onClick={() => scrollToSection("Projects")} class="group font-mainFont text-[30px] text-white transition duration-300">
          Projects
          <span class="block max-w-0 group-hover:max-w-[157px] transition-all duration-500 h-0.5 bg-white"></span>
        </button>
        <button onClick={() => scrollToSection("Skills")} class="group font-mainFont text-[30px] text-white transition duration-300">
          Contact Me
          <span class="block max-w-0 group-hover:max-w-[190px] transition-all duration-500 h-0.5 bg-white"></span>
        </button>
      </div>
      </motion.div>
  </motion.nav>
);

export default Navbar;
