import React from "react";

import { RiMenu4Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import fab from "../../assets/images/alu (2).jpg";
import alu from "../../assets/images/fab.jpg";

const Header2 = () => {
  const [show, setShow] = React.useState(false);

  const dropDown = () => {
    setShow(!show);
  };

  return (
    <div className='w-full h-[70px] shadow-md flex justify-center items-center fixed z-30 bg-white font-pop'>
      <div className='w-[90%] h-full  flex justify-between items-center relative '>
        <div className='flex gap-10  items-center'>
          <img src={fab} className='w-[50px]' alt='' />

          <div className='lg:flex gap-5 hidden'>
            <ol className='cursor-pointer hover:text-gray-700 font-bold'>
              Home
            </ol>
            <ol className='cursor-pointer hover:text-gray-700 font-bold'>
              Inventory
            </ol>
            <ol className='cursor-pointer hover:text-gray-700 font-bold'>
              Projects
            </ol>
            <ol className='cursor-pointer hover:text-gray-700 font-bold'>
              Resources
            </ol>
            <span>|</span>
            <ol className='cursor-pointer hover:text-gray-700 font-bold'>
              Book A Mentor
            </ol>
          </div>
        </div>

        <div className='hidden lg:flex gap-4 '>
          <button className='rounded-[10px] border-[1px] border-[#ebf1ff] text-[#002e6c] bg-[#f5f8ff] hover:bg-[#002e6c] hover:text-white hover:border-none font-bold m-2'>
            Log in
          </button>
          <button className='rounded-[10px] m-2 bg-[#002e6c] text-white font-bold hover:border-[#002e6c] hover:border-[1px] border-none hover:bg-[#f5f8ff] hover:text-[#002e6c]'>
            Sign up
          </button>

          <img src={alu} className='w-[80px]' alt='' />
        </div>

        {show ? null : (
          <div
            className='lg:hidden text-[24px] text-[#002e6c]'
            onClick={dropDown}
          >
            <RiMenu4Fill />
          </div>
        )}
      </div>
      {/* mobile */}
      <div
        className={` ${
          show ? "transform translate-y-0" : "transform -translate-x-full"
        } lg:hidden w-[80%] h-[100vh] absolute bg-whit backdrop-blur-m bg-white shadow-md bg-opacity-6 top-0  left-0 transition-all ease-in-out z-30 duration-300 relativ p-`}
        onClick={dropDown}
      >
        <div
          className='lg:hidden text-[22px] cursor-pointer  ml-[6px] shadow-md text-[#002e6c]  z-50 p-1 rounded-md bg-white absolute right-[15px] top-[25px]'
          onClick={dropDown}
        >
          <MdOutlineClose />
        </div>

        <div className='w-full h-[320px]  flex flex-col p-[25px] sm:pl-[35px] pt-[25px] text-[13px] gap-4 text-[#1f2035] top-[70px] absolute '>
          {/* <li className="lg:flex items-center gap-5 text-[16px]"> */}
          <ol className='cursor-pointer hover:text-gray-700 font-bold'>Home</ol>
          <ol className='cursor-pointer hover:text-gray-700 font-bold'>
            Inventory
          </ol>
          <ol className='cursor-pointer hover:text-gray-700 font-bold'>
            Projects
          </ol>
          <ol className='cursor-pointer hover:text-gray-700 font-bold'>
            Resources
          </ol>

          <hr className='w-full border-[1px] border-gray-300' />

          <ol className='cursor-pointer hover:text-gray-700 font-bold'>
            Book A Mentor
          </ol>

          <button className='rounded-[30px] border-[1px] border-[#ebf1ff] text-[#002e6c] bg-[#f5f8ff] hover:bg-[#002e6c] hover:text-white hover:border-none font-bold'>
            Log in
          </button>
          <button className='rounded-[30px] bg-[#002e6c] text-white font-bold hover:border-[#002e6c] hover:border-[1px] border-none hover:bg-[#f5f8ff] hover:text-[#002e6c]'>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header2;
