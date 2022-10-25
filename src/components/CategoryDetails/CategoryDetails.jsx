import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryDetails = () => {
    const categories = useLoaderData();
    console.log()
    return (
        <div className='w-[80%] mx-auto'>
            <h2>hello details</h2>
        </div>
    );
};

export default CategoryDetails;