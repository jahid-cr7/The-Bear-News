import React from 'react';
import { NavLink } from 'react-router';
import user from "../assets/user.png"
const Navbar = () => {
    return (
        <div className='flex inter justify-between mt-6 items-center'>
           <div></div>
           <div className=''>
            <ol className='flex gap-8 text-base text-[#706F6F]  font-normal inter font-'>
                <NavLink to={'/'}><li>Home</li></NavLink>
                <NavLink to={'/'}><li>About</li></NavLink>
                <NavLink to={'/'}><li>Career</li></NavLink>
            </ol>
           </div>
           <div className='login_button flex items-center gap-5'>
            <img className='w-[30px]' src={user} alt="" />
            <button className='bg-gray-500 text-white px-4 inter font-bold py-1 rounded-xl'>Login</button>
           </div>

        </div>
    );
};

export default Navbar;