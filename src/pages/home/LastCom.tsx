// import React from 'react'
import last from "../../assets/images/lastcom.jpg";
import lady from "../../assets/images/hero-img3.jpg";
import LastCard from "../../components/block/LastCard";
const LastCom = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center pb-[30px]  '>
      <div className='w-[90%] flex  flex-col md:flex-row gap-4 items-center md:justify-between rounded-[10px] p-4'>
        <div className='w-full md:w-[48%] shadow-md relative bg-white rounded-[20px]'>
          <img className='w-full' src={last} />
        </div>

        <div className='w-full md:w-[48%] flex flex-col gap-5 items-center'>
          <h1 className='text-[24px] font-bold text-center md:text-left mb-[1px] md:text-[27px] lg:text-[41px]'>
            Our members are our strength.
            <br />
            See what they say about us
          </h1>
          <div className='w-full flex items-center'>
            <LastCard
              cardText='Joining FabLab has been a game-changer for me. The access to advanced equipment and the support from mentors have significantly accelerated my learning and project development. The collaborative environment and comprehensive resources make it an ideal place for innovation and growth.
'
              userImg={lady}
              usernames='Jason Stathum,'
              userId=' Python Dev.'
            />
          </div>

          {/* <button className='flex bg-[#046f9d] text-white w-[180px] h-[40px] font-bold justify-center items-center'>
            Register here
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default LastCom;
