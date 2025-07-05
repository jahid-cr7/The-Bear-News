import React from 'react';
import { IoArrowBackCircle } from 'react-icons/io5';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    return (
        <div className='w-11/12 bg-white rounded-2xl shadow-md border border-gray-200 px-6 pb-6 space-y-4'>
            <img className='mx-auto mt-6 rounded-2xl w-full ' src={news.image_url} alt="" />
            <h2 className='text-2xl font-bold text-gray-900 leading-snug'>{news.title}</h2>
            <p>{news.details}</p>
            <Link className='btn bg-[#D72050] text-white' to={`/category/${news.category_id}`}><IoArrowBackCircle size={20}></IoArrowBackCircle>Return Category Section</Link>
        </div>
    );
};

export default NewsDetailsCard;