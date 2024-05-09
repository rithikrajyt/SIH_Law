import React from 'react';
import Navbar from '../components/Navbar';
import { Simpli } from '../components/Simpli';
import Upload from '../components/Upload';

const Dashboard = () => {
    return (
        <div className='bg-gray-50'>
            <Navbar />
            <Simpli/>
            <Upload/>
        </div>
    );
};

export default Dashboard;