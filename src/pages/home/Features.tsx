// import { FaTools } from "react-icons/fa";

import FeaturesCard from "../../components/block/FeaturesCard";
import cards from "../../assets/images/project 1.jpg";
import card2 from "../../assets/images/project 2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Features = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center py-[100px]'>
      <h1 className='text-center text-[16px] md:text-[22px] mt-[20px] text-[#057FAB]'>
        Our Features
      </h1>

      <h2 className='text-center font-bold text-[23px] mt-[15px] md:text-[35px] lg:text-[50px] mb-[20px]'>
        Why You Should Choose FabLab
      </h2>

      {/* Card Holders */}

      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        loop={true}
        modules={[Autoplay]}
        className='w-[95%] overflow-hidden h-max  flex justify-center'
        breakpoints={{
          768: {
            spaceBetween: 30,
            slidesPerView: 2,
          },
          1023: {
            spaceBetween: 30,
            slidesPerView: 3,
          },
          1280: {
            spaceBetween: 30,
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <FeaturesCard
            featureImg={cards}
            title='Access to Cutting-Edge Equipment'
            details='Utilize state-of-the-art tools and technology to bring your innovative ideas to life.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturesCard
            featureImg={card2}
            title='Comprehensive Learning resources'
            details='Benefits from a wide range of tutorials, template, and workshops esigned to enhance your skills.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturesCard
            featureImg={cards}
            title='Collaborative Environment'
            details='Instructors from around the world teach millions of studenst on Edmy through video.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturesCard
            featureImg={card2}
            title='Expert Mentorship'
            details='Gain personalized guidance from experienced mentors to help you achieve your projects gaols and career aspirations.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturesCard
            featureImg={card2}
            title='Expert Mentorship'
            details='Gain personalized guidance from experienced mentors to help you achieve your projects gaols and career aspirations.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturesCard
            featureImg={card2}
            title='Expert Mentorship'
            details='Gain personalized guidance from experienced mentors to help you achieve your projects gaols and career aspirations.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturesCard
            featureImg={card2}
            title='Expert Mentorship'
            details='Gain personalized guidance from experienced mentors to help you achieve your projects gaols and career aspirations.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturesCard
            featureImg={card2}
            title='Expert Mentorship'
            details='Gain personalized guidance from experienced mentors to help you achieve your projects gaols and career aspirations.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturesCard
            featureImg={card2}
            title='Expert Mentorship'
            details='Gain personalized guidance from experienced mentors to help you achieve your projects gaols and career aspirations.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturesCard
            featureImg={card2}
            title='Expert Mentorship'
            details='Gain personalized guidance from experienced mentors to help you achieve your projects gaols and career aspirations.'
          />
        </SwiperSlide>
      </Swiper>

      {/* <div className='w-[90%] flex flex-col md:flex-row flex-wrap md:justify-between mt-[20px] gap-3'>
        <FeaturesCard
          featureImg={cards}
          title='Access to Cutting-Edge Equipment'
          details='Utilize state-of-the-art tools and technology to bring your innovative ideas to life.'
        />
        <FeaturesCard
          featureImg={card2}
          title='Comprehensive Learning resources'
          details='Benefits from a wide range of tutorials, template, and workshops esigned to enhance your skills.'
        />
        <FeaturesCard
          featureImg={cards}
          title='Collaborative Environment'
          details='Instructors from around the world teach millions of studenst on Edmy through video.'
        />
        <FeaturesCard
          featureImg={card2}
          title='Expert Mentorship'
          details='Gain personalized guidance from experienced mentors to help you achieve your projects gaols and career aspirations.'
        />
      </div> */}
    </div>
  );
};

export default Features;

// <FeaturesCard
//   featureImg={cards}
//   title='Access to Cutting-Edge Equipment'
//   details='Utilize state-of-the-art tools and technology to bring your innovative ideas to life.'
// />
// <FeaturesCard
//   featureImg={card2}
//   title='Comprehensive Learning resources'
//   details='Benefits from a wide range of tutorials, template, and workshops esigned to enhance your skills.'
// />
// <FeaturesCard
//   featureImg={cards}
//   title='Collaborative Environment'
//   details='Instructors from around the world teach millions of studenst on Edmy through video.'
// />
// <FeaturesCard
//   featureImg={card2}
//   title='Expert Mentorship'
//   details='Gain personalized guidance from experienced mentors to help you achieve your projects gaols and career aspirations.'
// />
