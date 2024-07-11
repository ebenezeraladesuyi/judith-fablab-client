// import React from 'react'

import { AiFillPlayCircle } from "react-icons/ai";

const Action = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center py-[30px]'>
      <div className='w-[90%] flex flex-col md:flex-row gap-4 items-center md:justify-between'>
        <div className='w-full md:w-[48%] flex flex-col gap-8 '>
          <h1 className='text-[25px] font-bold text-center md:text-left mb-[15px] md:text-[28px] lg:text-[40px]'>
            See FabLab in Action!
          </h1>
          <h2 className='text-[#929292] text-[12px] lg:text-[17px] text-center md:text-left'>
            Dive into the world of Fab Labs, discover the tools, projects and
            creative spirit that makes Fab Labs so inspiring.
          </h2>

          <button className='hidden md:flex bg-gradient-to-r from-blue-600 from-10% via-sky-500 via-30% to-blue-900 to-90% text-white w-[170px] h-[60px] font-bold justify-center items-center'>
            Find Out How
          </button>
        </div>

        <div className='w-full md:w-[48%] shadow-md relative'>
          <img className='w-full' src='/vite.svg' />

          <div className='absolute top-[40%] right-[40%] text-[60px] md:text-[100px] md:top-[37%] md:left-[37%] lg:text-[170px] text-[#002e6c] lg:top-[31%] lg:left-[33%]'>
            <AiFillPlayCircle />
          </div>
        </div>
      </div>

      <button className='bg-[#046f9d] w-[150px] text-white font-bold h-[40px] md:hidden mt-[25px]'>
        Find Out How
      </button>
    </div>
  );
};

export default Action;
