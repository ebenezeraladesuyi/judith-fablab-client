import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
// import HomeComp from "../pages/home/HomeComp";
import { lazy } from "react";
import SignUpLayout from "../layout/AuthLayout/SignUpLayout";
import SigninLayout from "../layout/AuthLayout/SigninLayout";
// import Signin from "../pages/AuthPages/Signin";
import ForgotPasswordLayout from "../layout/AuthLayout/ForgotPasswordLayout";
import PasswordResetLayout from "../layout/AuthLayout/PasswordResetLayout";


const HomeComp = lazy (() => import("../pages/home/HomeComp"))
const SignUp = lazy (() => import("../pages/AuthPages/SignUp"))
const Signin = lazy (() => import("../pages/AuthPages/Signin"))
const ForgotPassword = lazy (() => import("../pages/AuthPages/ForgotPassword"))
const SignupVerify = lazy (() => import("../pages/AuthPages/SignupVerify"))
const VerifyCodePasswordReset = lazy (() => import("../pages/AuthPages/VerifyCodePasswordReset"))
const Verify = lazy (() => import("../pages/AuthPages/Verify"))



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
            },
            {
                path: "verifysignup",
                element: <SignupVerify />
            },
            {
                path: "verified/:uidb64/:token",
                element: <Verify />
            },
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
    {
        path: "/passwordreset",
        element: <PasswordResetLayout />,
        children : [
            {
                index: true,
                element: <VerifyCodePasswordReset />
            }
        ]
    },
])
