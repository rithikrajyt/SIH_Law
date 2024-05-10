import React from "react";
import { NavLink } from "react-router-dom";
import { RiFileList2Line } from "react-icons/ri";
import { RiPrinterLine } from "react-icons/ri";
import { RiCalendarLine } from "react-icons/ri";
function Sidebar() {
  return (
    <>
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
          <NavLink to="/dashboard/">
            <div
              role="button"
              tabindex="0"
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <div className="grid place-items-center mr-4">
            
                <RiPrinterLine size={30}/>
              </div>
              Drafting
            </div>
            .{" "}
          </NavLink>
          <NavLink to="/dashboard/simplify">
            <div
              role="button"
              tabindex="0"
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <div className="grid place-items-center mr-4">    <RiFileList2Line size={30} /></div>Simplification
            </div>
          </NavLink>
          <NavLink to='/dashboard/booking'>
    <div role="button" tabindex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className="grid place-items-center mr-4">
       <RiCalendarLine size={30} />
      </div>Book a Lawyer 
    </div>
    </NavLink>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
