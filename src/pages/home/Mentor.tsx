// import React from 'react'
import lady from "../../assets/images/ladies.jpg";
import img from "../../assets/images/image 1.jpg";
import img2 from "../../assets/images/image2.jpg";
import img3 from "../../assets/images/image3.jpg";
import img4 from "../../assets/images/imgae4.jpg";
const Mentor = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center py-[100px]'>
      <div className='w-[90%] flex flex-col md:flex-row gap-4 items-center md:justify-between'>
        <div className='w-full md:w-[47%] flex flex-col gap-5 md:gap-10'>
          <h1 className='text-[18px] font-bold text-center md:text-left mb-[1px] md:text-[22px] lg:text-[32px]'>
            Book a Mentor Today to receive personalized guidance
          </h1>
          <h2 className='text-[#929292] text-[12px] lg:text-[17px] text-center md:text-left'>
            Level up your projects! Chat with experienced Fab Lab Mentors, who
            offer industry insights and personalized quidance.Take your ideas
            from concept to creation.
          </h2>

          <div className='flex flex-col gap-4 lg:gap-9'>
            <div className='flex items-start md:items-start  flex-col justify-between md:flex-row gap-4  w-[100%]'>
              <div className='flex items-center gap-2'>
                <img
                  className='w-[30px] h-[30px] border-[1px] rounded-full border-gray-400'
                  src={img}
                  alt=''
                />
                <h3 className='font-bold text-[14px] lg:text-[16px]'>
                  Personalized Guidance
                </h3>
              </div>
              <div className='flex items-center gap-2'>
                <img
                  className='w-[30px] h-[30px] border-[1px] border-gray-400 rounded-full'
                  src={img2}
                  alt=''
                />
                <h3 className='font-bold text-[14px] lg:text-[16px] pr-0 lg:pr-4'>
                  Expand Professional Network
                </h3>
              </div>
            </div>

            <div className='flex items-start md:items-start flex-col justify-between md:flex-row gap-4 w-[100%] '>
              <div className='flex items-center gap-2'>
                <img
                  className='w-[30px] h-[30px] border-[1px] border-gray-400 rounded-full'
                  src={img3}
                  alt=''
                />
                <h3 className='font-bold text-[14px] lg:text-[16px]'>
                  Industry Insights
                </h3>
              </div>
              <div className='flex items-center gap-2'>
                <img
                  className='w-[30px] h-[30px] border-[1px] border-gray-400 rounded-full'
                  src={img4}
                  alt=''
                />
                <h3 className='font-bold text-[14px] lg:text-[16px]'>
                  Help you Overcome Challenges
                </h3>
              </div>
            </div>
          </div>

          <button className='hidden md:flex  bg-gradient-to-r from-blue-600 from-10% via-sky-500 via-30% to-blue-900 to-90% text-white w-[170px] h-[60px] font-bold justify-center items-center'>
            Book a Mentor
          </button>
        </div>

        <div className='w-full md:w-[45%]  rounded-[10px]'>
          <img className='w-full' src={lady} />
        </div>
      </div>

      <button className='bg-gradient-to-r from-blue-600 from-10% via-sky-500 via-30% to-blue-900 to-90% w-[170px] text-white font-bold h-[60px] md:hidden mt-[25px]'>
        Book a Mentor
      </button>
    </div>
  );
};

export default Mentor;
