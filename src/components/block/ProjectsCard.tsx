import React from "react";

interface iProject {
  projectImg?: string;
  title?: string;
  iot?: string;
  user?: string;
  userName?: string;
}

const ProjectsCard: React.FC<iProject> = ({
  projectImg,
  title,
  iot,
  user,
  userName,
}) => {
  return (
    <div className='w-full md:w-[45%] lg:w-[23.5%] py-[10px]'>
      <img
        className='w-full h-[300px] shadow-md mb-[10px] rounded-[10px]'
        src={projectImg}
        alt=''
      />

      <div className='flex justify-between items-center mb-[5px]'>
        <h3 className='text-[15px] font-bold'>
          {/* Smart Plant Monitor */}
          {title}
        </h3>

        <div className='text-[#747b8b] bg-[#e0e0e0] flex items-center gap-2 w-[80px] rounded-[25px] h-[23px] justify-center text-[14px]'>
          {/* IOT */}
          {iot}
        </div>
      </div>

      <div className='flex items-center gap-3'>
        <img
          className='w-[30px] h-[30px] rounded-full border-[1px] border-gray-400'
          src={user}
          alt=''
        />

        <h4 className='text-[15px]'>
          By
          <span className='font-bold'> {userName}</span>
        </h4>
      </div>
    </div>
  );
};

export default ProjectsCard;
