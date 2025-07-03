import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex justify-center items-center flex-col pt-4 inter gap-3'>
            <img className='w-[400px]' src={logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
   
            <p className='font-semibold text-primary'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;