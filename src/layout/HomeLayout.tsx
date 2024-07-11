// import React from 'react'

import { Outlet } from "react-router-dom"
import { Footer, Header2 } from "../components"

const HomeLayout = () => {
  return (
    <div className="font-mono">
        <Header2 />

        <Outlet />

        <Footer />
    </div>
  )
}

export default HomeLayout