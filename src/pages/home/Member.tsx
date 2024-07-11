// import React from 'react'
import mem from "../../assets/images/member.jpg";

const Member = () => {
  return (
    <div className='w-full  flex flex-col justify-center items-center py-[100px]  '>
      <div className='w-[90%] flex flex-col md:flex-row gap-4 items-center md:justify-between rounded-[10px] p-4  bg-[#F2F0EF]'>
        <div className='w-full md:w-[48%] shadow-md relative bg-white rounded-[20px]'>
          <img className='w-full' src={mem} />
        </div>

        <div className='w-full md:w-[48%] flex flex-col gap-5 sm:items-start items-center '>
          <h1 className='text-[25px] font-bold text-center md:text-left mb-[1px] md:text-[28px] lg:text-[40px]'>
            Become a Member of Fab Lab & Start Building Projects!
          </h1>
          <h2 className='text-[#929292] text-[12px] lg:text-[17px] text-center md:text-left'>
            Instructors from around the world teach millions of students on Fab
            Lab. We provide the tools and skills to teach what you love, and you
            can also achieve your goals with us.
          </h2>

          <button className='flex bg-gradient-to-r from-blue-600 from-10% via-sky-500 via-30% to-blue-900 to-90% text-white w-[180px] h-[60px] font-bold justify-center items-center'>
            Register here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Member;
