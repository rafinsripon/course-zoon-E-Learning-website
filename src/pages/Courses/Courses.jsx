import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Category from '../../components/Category/Category';

const Courses = () => {
    const categories = useLoaderData();
    console.log(categories)
    return (
        <div className='px-4 py-5 md:px-14 lg:px-14'>
            <div className="grid grid-cols-6 gap-3">
            <div className="col-span-2 bg-slate-400 p-4">
                {
                        categories.map(category => {
                            return (
                                <>
                                <p key={category.id} className='mb-4'>
                                    <Link to={`/category/${category.id}`} className='text-xl font-bold text-slate-800 underline'>
                                    {category.name}
                                    </Link>
                                </p>
                                </>
                            )
                        })
                    }
                </div>
                <div className="col-span-4">
                    <div className='grid grid-cols-3 gap-3'>
                    {
                        categories.map(category => <Category 
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

