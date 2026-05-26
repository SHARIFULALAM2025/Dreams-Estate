import React from 'react'
import { Outlet } from 'react-router'

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <div className="h-9 w-full bg-green-500 flex items-center px-5">
        Top Navbar
      </div>


      <div className="flex flex-1">

        <div className="w-36 bg-red-500">Left Sidebar</div>

        <div className="flex-1 p-5 ">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
