// import React from 'react'
import fab from "../../assets/images/alu (2).jpg";

const Footer = () => {
  return (
    <div className='w-full pt-[30px] bg-[#f6fafb] flex flex-col justify-center items-center font-pop'>
      <div className='w-[90%] flex flex-col md:flex-row md:justify-between justify-center gap-4 py-[40px]'>
        <div className='w-full md:w-[23.5%]'>
          <img src={fab} className='font-bold text-[35px] ' />

          <h2 className='text-[#848586] text-[12px] md:text-[16px] text-justify'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            enim voluptate laudantium assumenda amet suscipit labore? Eius?
          </h2>
        </div>

        <div className='w-full md:w-[19%]'>
          <h3 className='font-bold text-[16px] md:text-[18px] mb-[10px]'>
            Quick Link
          </h3>

          <h4 className='text-[#848586] text-[12px] md:text-[15px] mb-[5px] cursor-pointer'>
            Inventory
          </h4>
          <h4 className='text-[#848586] text-[12px] md:text-[15px] mb-[5px] cursor-pointer'>
            Projects
          </h4>
          <h4 className='text-[#848586] text-[12px] md:text-[15px] mb-[5px] cursor-pointer'>
            Resources
          </h4>
        </div>

        <div className='w-full md:w-[19%]'>
          <h3 className='font-bold text-[16px] md:text-[18px] mb-[10px]'>
            Help Center
          </h3>

          <h4 className='text-[#848586] text-[12px] md:text-[15px] mb-[5px] cursor-pointer'>
            Support
          </h4>
          <h4 className='text-[#848586] text-[12px] md:text-[15px] mb-[5px] cursor-pointer'>
            Get Help
          </h4>
          <h4 className='text-[#848586] text-[12px] md:text-[15px] mb-[5px] cursor-pointer'>
            Privacy Policy
          </h4>
        </div>

        <div className='w-full md:w-[19%]'>
          <h3 className='font-bold text-[16px] md:text-[18px] mb-[10px]'>
            Contact Info
          </h3>

          <h4 className='text-[#848586] text-[12px] md:text-[15px] mb-[5px]'>
            <span className='text-[#5877a1] font-bold'>Call Us:</span>{" "}
            250-791-234-567
          </h4>
          <h4 className='text-[#848586] text-[12px] md:text-[15px] mb-[5px]'>
            <span className='text-[#5877a1] font-bold'>Address:</span> +7011,
            Robero Ave, Kigali, CA 90044.
          </h4>
          <h4 className='text-[#848586] text-[12px] md:text-[15px] mb-[5px]'>
            <span className='text-[#5877a1] font-bold'>Mail Us:</span>{" "}
            hello@fablab.com
          </h4>
        </div>
      </div>

      <hr className='w-full border-[1px] border-gray-300 my-[20px]' />

      <div className='py-[20px]'>
        <h5 className='text-center text-[#848586] text-[15px] md:text-[19px] font-bold'>
          &#169; Fab Lab 2024
        </h5>
      </div>
    </div>
  );
};

export default Footer;
