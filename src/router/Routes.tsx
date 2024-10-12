import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
// import HomeComp from "../pages/home/HomeComp";
import { lazy } from "react";
import SignUpLayout from "../layout/AuthLayout/SignUpLayout";
// import SignUp from "../pages/AuthPages/SignUp";


const HomeComp = lazy (() => import("../pages/home/HomeComp"))
const SignUp = lazy (() => import("../pages/AuthPages/SignUp"))



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
])
