import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Category from '../../components/Category/Category';

const Courses = () => {
    const categories = useLoaderData();
    // console.log(categories)
    return (
        <div className='px-4 py-5 md:px-14 lg:px-14'>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
            <div className="lg:col-span-1 col-span-0 p-6 shadow-xl w-full">
                {
                        categories.map((cate, index) => <p key={index} className='mb-6'>
                        <Link to={`/category/${cate.id}`} className='text-xl font-bold text-slate-700 underline'>
                        {cate.name}
                        </Link>
                    </p>)
                    }
                </div>
                <div className="lg:col-span-3 md:col-span-2 col-span-1">
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
                    {
                        categories.map((category) => <Category 
                            key={category.id}
                            category={category}
                         />)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;

