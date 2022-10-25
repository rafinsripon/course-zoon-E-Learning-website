import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assets/image/banner.jpg';
import './Home.css'

const Home = () => {
    return (
        <div className="imge">
            <div className=" ">
                {/* <img className='w-full h-[580px] relative' src={banner} alt="" /> */}
            </div>
            <div className="px-4 py-28 lg:px-16 md:px-12 lg:w-2/4">
            <span className='bg-rose-700 py-1 p-6 rounded-3xl text-gray-200 uppercase font-semibold'>Welcome to Kids School</span>
                <h2 className='text-6xl font-bold mt-6 text-slate-900'>Fun and Learn New Thinks</h2>
                <p className='font-semibold mt-4 text-gray-700'>Our Kindergarten programs are aligned with the curriculum of public school Kindergarten programs</p>
                <Link>
                    <button className='bg-rose-700 py-2 px-14 rounded-sm text-semibold text-gray-200 mt-6 border-b-2 border-slate-900'>Learn More</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;