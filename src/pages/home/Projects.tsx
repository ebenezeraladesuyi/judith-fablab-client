// import React from 'react'

import pro3 from "../../assets/images/project 3.jpg";
import img1 from "../../assets/images/hero-img3.jpg";

import { ProjectsCard } from "../../components/block";

const Projects = () => {
  return (
    <div className='w-full py-[100px] flex justify-center items-center bg-[#F6FAFB] '>
      <div className='w-[90%] flex flex-col justify-center items-center  p-[15px] rounded-[10px] gap-5'>
        <div className='w-full flex justify-between'>
          <div>
            <h1 className='text-[16px] font-bold text-center md:text-left mb-[10px] lg:mb-[20px] md:text-[21px] lg:text-[25px] text-[#057FAB]'>
              Ongoing Projects
            </h1>
            <h2 className='text-[20px] md:text-[30px] lg:text-[36px] font-bold leading-[25px] text-center md:text-left'>
              See what others are working on
            </h2>
          </div>

          <button className='hidden md:block bg-gradient-to-r from-blue-600 from-10% via-sky-500 via-30% to-blue-900 to-90%  text-white w-[150px] h-[60px] font-bold border-[0px]'>
            View All
          </button>
        </div>

        <div className='w-full flex flex-col md:flex-row flex-wrap md:justify-between mt-[20px] gap-3'>
          <ProjectsCard
            projectImg={pro3}
            title='Smart Plant Monitor'
            iot='IOT'
            user={img1}
            userName='John Doe'
          />
          <ProjectsCard
            projectImg={pro3}
            title='Smart Plant Monitor'
            iot='IOT'
            user={img1}
            userName='John Doe'
          />
          <ProjectsCard
            projectImg={pro3}
            title='Smart Plant Monitor'
            iot='IOT'
            user={img1}
            userName='John Doe'
          />
          <ProjectsCard
            projectImg={pro3}
            title='Smart Plant Monitor'
            iot='IOT'
            user={img1}
            userName='John Doe'
          />
        </div>

        <div className='md:hidden'>
          <button className='bg-[#046f9d] textx-white w-[120px] text-white font-bold h-[40px]'>
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
