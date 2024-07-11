import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import HomeComp from "../pages/home/HomeComp";



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
    }
])
