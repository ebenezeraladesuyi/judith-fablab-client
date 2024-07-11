// import React from 'react'

import { InventoryCard } from "../../components/block";
import pro1 from "../../assets/images/project 1.jpg";
import pro2 from "../../assets/images/project 2.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const Inventory = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center py-[100px]'>
      <h1 className='text-center text-[16px] md:text-[22px] mt-[20px] text-[#057FAB] '>
        Existing Equipments
      </h1>

      <h2 className='text-center font-bold text-[23px] mt-[15px] md:text-[35px] lg:text-[50px]'>
        Checkout Our Inventory
      </h2>

      <div className='w-[90%] flex flex-col md:flex-row flex-wrap md:justify-between mt-[20px] gap-3'>
        <InventoryCard
          inventImg={pro1}
          title='3D Printer'
          num='25'
          buttonText='Mechanics'
        />

        <InventoryCard
          inventImg={pro2}
          title='3D Printer'
          num='25'
          buttonText='Mechanics'
        />

        <InventoryCard
          inventImg={pro2}
          title='3D Printer'
          num='25'
          buttonText='Mechanics'
        />

        <InventoryCard
          inventImg={pro2}
          title='3D Printer'
          num='25'
          buttonText='Mechanics'
        />
      </div>

      <h4 className='md:text-[20px] flex gap-2 items-center font-bold mt-[20px] animate-bounce text-[#9a9a9a]'>
        Browse All Equipments
        <span>
          <FaArrowRightLong />
        </span>
      </h4>
    </div>
  );
};

export default Inventory;
