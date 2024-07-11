import React from "react";

interface iFeature {
  featureImg?: string;
  title?: string;
  details?: string;
}

const FeaturesCard: React.FC<iFeature> = ({ featureImg, title, details }) => {
  return (
    <div className='w-full sm:w-[250px] md:w-[350px] lg:w-[300px] h-[400px] p-[35px] py-[20px] bg-[#F6FAFB]  flex flex-col items-center justify-between rounded-[10px] gap-4'>
      <div className='w-full h-[40%]'>
        <img className='w-full h-full' src={featureImg} alt='' />
      </div>

      <h3 className='text-center font-bold text-[22px] leading-[25px]'>
        {/* Access to Cutting-Edge Equipment */}
        {title}
      </h3>

      <h4 className='text-center text-[13px] text-[#a8a8a8]'>
        {/* Utilize state-of-the-art tools and technology to bring your innovative ideas to life. */}
        {details}
      </h4>
    </div>
  );
};

export default FeaturesCard;
