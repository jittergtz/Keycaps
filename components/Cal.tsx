import Link from 'next/link';
import React from 'react';
import { FiGithub } from 'react-icons/fi';

const CalTextEffect: React.FC = () => {
  return (
   <div className='embossed-text text-[52px] md:text-[120px] flex text-transparent bg-clip-text bg-gradient-to-bl from-[#414141] to-neutral-400'>
    FREE and Open Source 
      <Link className='mt-20 md:mt-44' href={"https://github.com/jittergtz/KeyboardAsmr"}>
      <FiGithub  className='text-[100px] md:text-[150px] text-[#dbb49733] embossed-text hover:text-[#ad683677] hover:scale-105' />
    </Link>
   </div>
  );
};

export default CalTextEffect;