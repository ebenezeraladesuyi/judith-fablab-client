import hero from "../../assets/images/hero1.jpg";
import heroimg from "../../assets/images/hero-img1 (1).jpg";
import heroimg2 from "../../assets/images/hero-img2.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='w-full min-h-[100vh] flex justify-center items-center bg-[#002250] '>
      <div className='w-[90%] flex flex-col md:flex-row md:justify-between items-center gap-4 mt-[50px]'>
        <div className='w-full md:w-[40%] lg:w-[48%] rounded-[15px]  overflow-hidden'>
          <img className='w-full overflow-hidden' src={hero} alt='' />
        </div>

        <div className='w-full md:w-[55%] lg:w-[48%] flex flex-col gap-3 lg:gap-8 text-white items-cente'>
          <h1 className='font-bold text-[50px] text-center lg:text-[90px] lg:text-left '>
            FABLAB Hub
          </h1>

          <h2 className='text-[30px] font-bold leading-[30px]  lg:text-[45px] lg:leading-[40px] text-center lg:text-left'>
            Unlock Creativity, Build Innovations
          </h2>

          <h3 className='text-[14px] text-center lg:text-left lg:text-[18px]'>
            Empowering Minds, Shaping Future: Explore, Create, Collaborate in
            our State-of-the-Art Fabrication Laboratory
          </h3>

          <div className='w-full flex flex-col md:items-start md:flex-row md:justify-between'>
            <div className='flex items-center gap-16 justify-center'>
              <div className='h-[46px] px-[20px] flex relative '>
                <img
                  className='w-[46px] h-[46px] shadow-white border-[#dbd9d9f] border-[1px] md:border-[2px] rounded-full absolute left-0 bottom-[5px] '
                  src={heroimg}
                  alt=''
                />
                <img
                  className='w-[46px] h-[46px] shadow-white border-[#dbd9d9f] border-[1px] md:border-[2px] rounded-full absolute left-[27px] bottom-[5px] bg-white'
                  src={heroimg2}
                  alt=''
                />
                <img
                  className='w-[46px] h-[46px] shadow-white border-[#dbd9d9f] border-[1px] md:border-[2px] rounded-full absolute left-[50px] bottom-[5px] bg-white'
                  src={heroimg2}
                  alt=''
                />
              </div>

              <h4 className='font-bold text-[15px] lg:text-[20px]'>
                100+ People Already Joined
              </h4>
            </div>

            <a
              href=''
              className='flex gap-2 items-center text-[#daf433] cursor-pointer hover:text-[#ffffff] lg:text-[17px] justify-center lg:pt-3 pt-0 '
            >
              View Projects{" "}
              <span>
                <FaArrowRightLong />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
