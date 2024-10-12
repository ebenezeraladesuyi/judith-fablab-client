// import React from 'react'

import alu from "../../assets/images/authImages/alu-white.png"
import fab from "../../assets/images/authImages/fab-white.png"

const SignUp = () => {
  return (
    <div className="w-full min-h-[100vh] flex ">
        <div className="hidden md:flex justify-center md:w-[45%] lg:w-[50%] bg-auth-bg bg-cover bg-center relative p-10">
          <div className="absolute bg-[#0000004f] w-full h-full top-0 left-0"></div>
          <img className="w-[200px] h-[40px] z-20" src={alu} alt="" />
        </div>

        <div className="w-full md:w-[55%] lg:w-[50%] flex flex-col gap-4 bg-auth-bg md:bg-none bg-cover bg-center relative justify-center items-center">
          <img className="w-[100px] md:hidden z-20" src={fab} alt="" />

          <div className="absolute bg-[#0000004f] w-full h-full top-0 left-0 md:hidden"></div>

          <h1 className="text-[17px] md:text-[22px] z-20 font-bold text-white md:text-blue-400">
            Create an Account
          </h1>

          <form className="w-[85%] md:w-[80%] lg:w-[60%] bg-[#ffffff54] md:bg-[#fff] p-5 md:p-7 rounded-[10px] z-20 shadow-md flex flex-col gap-3">
            <input className="border-[1px] rounded-[6px] px-2 h-[40px] text-[13px] md:text-[16px] md:h-[50px] w-full" type="text" placeholder="Name" />

            <input className="border-[1px] rounded-[6px] px-2  h-[40px] text-[13px] md:text-[16px] md:h-[50px] w-full" type="email" placeholder="Email" />

            <input className="border-[1px] rounded-[6px] px-2  h-[40px] text-[13px] md:text-[16px] md:h-[50px] w-full" type="password" placeholder="Password" />

            <input className="border-[1px] rounded-[6px] px-2  h-[40px] text-[13px] md:text-[16px] md:h-[50px] w-full" type="password" placeholder="Confirm Password" />

            <button className="border-none  h-[38px] text-[14px] md:h-[47px] bg-blue-400 text-white font-bold">
              Create
            </button>

            <div className="flex justify-between">
              <div></div>

              <h2 className="text-[12px] md:text-[14px] lg:text-[16px] text-white md:text-[#000]">Already have an Account? <span className="text-blue-400 font-bold cursor-pointer">Signin</span></h2>
            </div>
          </form>
        </div>
    </div>
  )
}

export default SignUp