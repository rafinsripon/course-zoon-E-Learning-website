import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {rating, title, img_url, details, id, author} = category;
    // console.log(category);
    return (
        <div className='border-2 border-rose-600 relative h-[28rem]'>
            <img className='w-full h-[200px]' src={img_url} alt="" />
            <div className="px-3 mt-3">
            <h2 className='font-bold text-xl'>{title}</h2>
            <p className='font-semibold text-gray-700'>{details.slice(0, 80) + '...'}</p>
            <div className='flex justify-between items-center'>
                <span className='text-xl font-semibold mt-3'>Price: ${rating.price}</span>
                <span className='text-xl font-semibold mt-3 text-orange-600'>Ratings: {rating.number}</span>
            </div>
            </div>
            <Link to={`/category/${id}`}>
                <button className='w-full py-2 bg-rose-600 text-gray-100 absolute bottom-0 left-0'>Details</button>
            </Link>
        </div>
    );
};

export default Category;

