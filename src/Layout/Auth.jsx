import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const Auth = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='w-11/12 mx-auto p-3'>
                <Navbar />
            </header>
            <main className='w-11/12 mx-auto'>
            <Outlet />
            </main>
        </div>
    );
};

export default Auth;