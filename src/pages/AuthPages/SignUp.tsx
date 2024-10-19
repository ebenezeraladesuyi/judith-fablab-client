import React, {useState} from 'react'

import { NavLink, useNavigate } from "react-router-dom"
import alu from "../../assets/images/authImages/alu-white.png"
import fab from "../../assets/images/authImages/fab-white.png"
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { iUser } from '../../types/Interface';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../global/redux/Store';
import { useSelector } from 'react-redux';
import { signupUserr } from '../../global/redux/UserSlice';
import { DatasIsaLoading } from '../isLoading/DataIsLoading';

const SignUp = () => {

  const [passwordShow, setPasswordShow] = React.useState(false);

  const showPassword = () => {
    setPasswordShow(!passwordShow)
  }

  const [formData, setFormData] = useState<iUser>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()

  const { loading, error } = useSelector((state: RootState) => state.user);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(),
    dispatch(signupUserr({userData: formData, navigate}))
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

          <h1 className="text-[17px] md:text-[22px] z-20 font-bold text-[#fff] md:text-[#00285e]">
            Create your Account
          </h1>

          <form onSubmit={handleSubmit} className="w-[85%] md:w-[80%] lg:w-[60%] bg-[#ffffff54] md:bg-[#fff] p-5 md:p-7 rounded-[10px] z-20 shadow-md flex flex-col gap-3">
            <div className="w-full flex flex-col gap-2">
              <h2 className="font-bold text-[13px] md:text-[16px] text-[#00285e]">First Name</h2>

              <input className="border-[1px] border-gray-300 rounded-[6px] px-2 h-[40px] text-[13px] md:text-[16px] md:h-[50px] w-full" 
              type="text" 
              placeholder="Enter Your First Name" 
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <h2 className="font-bold text-[13px] md:text-[16px] text-[#00285e]">Last Name</h2>

              <input className="border-[1px] border-gray-300 rounded-[6px] px-2 h-[40px] text-[13px] md:text-[16px] md:h-[50px] w-full" 
              type="text" 
              placeholder="Enter Your Last Name"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
               />
            </div>

            <div className="w-full flex flex-col gap-2">
              <h2 className="font-bold text-[13px] md:text-[16px] text-[#00285e]">Email</h2>

              <input className="border-[1px] border-gray-300 rounded-[6px] px-2  h-[40px] text-[13px] md:text-[16px] md:h-[50px] w-full" 
              type="email" 
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
               />
            </div>

            <div className="w-full flex flex-col gap-2">
              <h2 className="font-bold text-[13px] md:text-[16px] text-[#00285e]">Password</h2>

              <div className="w-full border-[1px] border-gray-300 rounded-[6px] px-2 h-[40px] md:h-[50px] flex justify-betweeen items-center bg-white">
                <input className="border-none text-[13px] md:text-[16px] w-[95%] outline-none" 
                type={ passwordShow ? "text" : "password"} 
                placeholder="Enter Your Password" 
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                />

                <div onClick={showPassword}>
                  { passwordShow ? 
                    <div className='cursor-pointer text-[#00285e]'> <FaRegEye /> </div>
                  :
                    <div className='cursor-pointer text-[#00285e]'> <FaRegEyeSlash /> </div>
                  }
                </div>
              </div>
            </div>

            {/* <NavLink to="/signup/verifysignup" className=""> */}
              <button className="border-none  h-[38px] text-[14px] md:h-[47px] bg-gradient-to-r from-[rgb(75,95,128)] from-30% via-[#4b5f80] via-20% to-[#00285e] to-70% text-white font-bold w-full flex justify-center items-center"
              type='submit'
              disabled={loading}
              >
                { loading ? (<DatasIsaLoading />) : "Sign up" }
              </button>
            {/* </NavLink> */}

            {error && <p className='text-[9px]'>{error}</p>}

            <div className="flex justify-between">
              <div></div>

              <h2 className="text-[12px] md:text-[14px] lg:text-[16px] text-white md:text-[#000]">Already have an Account? <NavLink to="/signin"><span className="text-[#00285e] font-bold cursor-pointer">Signin</span></NavLink></h2>
            </div>
          </form>
        </div>
    </div>
  )
}

export default SignUp