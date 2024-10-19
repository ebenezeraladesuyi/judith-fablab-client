import React from 'react'

import { NavLink } from "react-router-dom"
import alu from "../../assets/images/authImages/alu-white.png"
import fab from "../../assets/images/authImages/fab-white.png"
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const Signin = () => {

  const [passwordShow, setPasswordShow] = React.useState(false);

  const showPassword = () => {
    setPasswordShow(!passwordShow)
  }

  return (
    <div className="w-full min-h-[100vh] flex ">
        <div className="hidden md:flex justify-center md:w-[45%] lg:w-[50%] bg-auth-bg bg-cover bg-center relative p-10">
          <div className="absolute bg-[#0000004f] w-full h-full top-0 left-0"></div>

          <img className="w-[200px] h-[40px] z-20" src={alu} alt="" />
          
          <img className="w-[300px] h-[60px z-20 absolute top-[50%] left-[25%]" src={fab} alt="" />
        </div>

        <div className="w-full md:w-[55%] lg:w-[50%] flex flex-col gap-4 bg-auth-bg md:bg-none bg-cover bg-center relative justify-center items-center">
          <img className="w-[100px] md:hidden z-20" src={fab} alt="" />

          <div className="absolute bg-[#0000004f] w-full h-full top-0 left-0 md:hidden"></div>

          <h1 className="text-[17px] md:text-[22px] z-20 font-bold text-white md:text-[#00285e]">
            Log in into your account
          </h1>

          <form className="w-[85%] md:w-[80%] lg:w-[60%] bg-[#ffffff54] md:bg-[#fff] p-5 md:p-7 rounded-[10px] z-20 shadow-md flex flex-col gap-3">

            <input className="border-[1px] rounded-[6px] px-2  h-[40px] text-[13px] md:text-[16px] md:h-[50px] w-full" type="email" placeholder="Email" />

            <div className="w-full border-[1px] border-gray-300 rounded-[6px] px-2 h-[40px] md:h-[50px] flex justify-betweeen items-center bg-white">
                <input className="border-none text-[13px]  md:text-[16px] w-[95%] outline-none" type={ passwordShow ? "text" : "password"} placeholder="Enter Your Password" />

                <div onClick={showPassword}>
                  { passwordShow ? 
                    <div className='cursor-pointer text-[#00285e]'> <FaRegEye /> </div>
                  :
                    <div className='cursor-pointer text-[#00285e]'> <FaRegEyeSlash /> </div>
                  }
                </div>
            </div>

            <div className="mt-[-6px] flex justify-between items-center">
              <div></div>

              <NavLink to="/forgotpassword">
                  <div className="text-[12px] md:text-[14px] lg:text-[16px] text-[#bdbbbb] font-bold cursor-pointer">Forgot Password?</div>
              </NavLink>
            </div>

            <button className="border-none  h-[38px] text-[14px] md:h-[47px]  bg-gradient-to-r from-[rgb(75,95,128)] from-30% via-[#4b5f80] via-20% to-[#00285e] to-70% text-white font-bold">
              Sign in
            </button>

            <div className="flex justify-between">
              <div></div>

              <h2 className="text-[12px] md:text-[14px] lg:text-[16px] text-white md:text-[#000]">Don't have an Account? <NavLink to="/signup"><span className="text-[#bdbbbb] font-bold cursor-pointer">Signup</span></NavLink></h2>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Signin