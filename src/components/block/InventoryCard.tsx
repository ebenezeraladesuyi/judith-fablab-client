import React from "react";

import { BiCart } from "react-icons/bi";

interface iInvent {
  inventImg?: string;
  title?: string;
  num?: string;
  buttonText?: string;
}

const InventoryCard: React.FC<iInvent> = ({
  inventImg,
  title,
  num,
  buttonText,
}) => {
  return (
    <div className='w-full md:w-[45%] lg:w-[23.5%] py-[10px]'>
      <img
        className='w-full h-[300px] shadow-md mb-[10px] rounded-[10px]'
        src={inventImg}
        alt=''
      />

      <div className='flex justify-between items-center mb-[5px]'>
        <h3 className='text-[17px] font-bold'>
          {/* 3D Printer */}
          {title}
        </h3>

        <div className='text-[#747b8b] flex items-center gap-2'>
          <BiCart />

          <span className='text-black font-bold'>
            {/* 25 */}
            {num}
          </span>
        </div>
      </div>

      <button className='bg-[#e0e0e0] text-[#b6b6b6] h-[35px] w-[135px] flex justify-center items-center rounded-[30px]'>
        {/* Mechanics */}
        {buttonText}
      </button>
    </div>
  );
};

export default InventoryCard;
