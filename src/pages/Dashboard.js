import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Upload from '../components/Upload';
import { Simpli } from '../components/Simpli';
import './dashboard.css'
import Booking from '../components/Booking';
const Dashboard = () => {
    return (
        <>
        <div className="w-screen contain bg-gray-100 ">
          <div className="topNav w-full">
           <Navbar/>
          </div>
          <div className="outer-container flex">
            <div className="sideNav md:grid md:col-start-1 md:row-start-1 lg:mt-4 z-50">
              <Sidebar />
            </div>
            <div className="inner-container row-start-1 col-start-2 lg:col-span-5 md:col-span-5 mr-10 mx-2 w-full">
              <Routes>
                <Route path='' element={<Simpli/>}/>
              <Route path='simplify' element={<Upload/>}/>
              <Route path='booking' element={<Booking/>}/>
              </Routes>
            </div>
          </div>
        </div>
        
      </>
        
    );
};

export default Dashboard;