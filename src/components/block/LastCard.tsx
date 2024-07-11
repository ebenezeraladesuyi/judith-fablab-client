import React from "react";

interface iproject {
  cardText?: string;
  userImg?: string;
  userId?: string;
  usernames?: string;
}
const LastCard: React.FC<iproject> = ({
  cardText,
  usernames,
  userId,
  userImg,
}) => {
  return (
    <div className='w-[full] p-[10px] shadow-md border border-gray-100'>
      <div className='w-full max-h-fit flex justify-center mb-10 text-[#a8a8a8]'>
        {cardText}
      </div>

      <div className='flex items-center gap-3 '>
        <img
          className='w-[40px] h-[40px] rounded-full border-[1px] border-gray-400'
          src={userImg}
          alt=''
        />

        <h4 className='text-[15px] font-bold'>
          {usernames}
          <span className='font-light'>{userId}</span>
        </h4>
      </div>
    </div>
  );
};

export default LastCard;
