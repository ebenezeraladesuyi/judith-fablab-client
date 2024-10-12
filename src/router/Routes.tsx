import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
// import HomeComp from "../pages/home/HomeComp";
import { lazy } from "react";
import SignUpLayout from "../layout/AuthLayout/SignUpLayout";
import SigninLayout from "../layout/AuthLayout/SigninLayout";
// import Signin from "../pages/AuthPages/Signin";
import ForgotPasswordLayout from "../layout/AuthLayout/ForgotPasswordLayout";
// import ForgotPassword from "../pages/AuthPages/ForgotPassword";
// import SignUp from "../pages/AuthPages/SignUp";


const HomeComp = lazy (() => import("../pages/home/HomeComp"))
const SignUp = lazy (() => import("../pages/AuthPages/SignUp"))
const Signin = lazy (() => import("../pages/AuthPages/Signin"))
const ForgotPassword = lazy (() => import("../pages/AuthPages/ForgotPassword"))



export const element = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children : [
            {
                index: true,
                element: <HomeComp />
            }
        ]
    },
    {
        path: "/signup",
        element: <SignUpLayout />,
        children : [
            {
                index: true,
                element: <SignUp />
            }
        ]
    },
    {
        path: "/signin",
        element: <SigninLayout />,
        children : [
            {
                index: true,
                element: <Signin />
            }
        ]
    },
    {
        path: "/forgotpassword",
        element: <ForgotPasswordLayout />,
        children : [
            {
                index: true,
                element: <ForgotPassword />
            }
        ]
    },
])
