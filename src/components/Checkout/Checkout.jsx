import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { ImStarFull, ImStarHalf, ImBookmarks } from "react-icons/im";
import { toast } from 'react-toastify';

const Checkout = () => {
    const checkoutData = useLoaderData();
    const navigate = useNavigate()
    const {author, img_url, title, otherInfo} = checkoutData;

    //handle purches
    const handlePurches = () => {
        toast('🦄WOW, Purchese Success Full', {autoClose: 500})
        navigate('/')
    }
    return (
        <div className='px-4 py-5 md:px-14 lg:px-16 '>
           <div className="">
                <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                    <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                    <Link to="/" className="mb-6 sm:mx-auto">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                        <svg
                            className="w-10 h-10 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                        </div>
                    </Link>
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                            <defs>
                                <pattern
                                id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                                x="0"
                                y="0"
                                width=".135"
                                height=".30"
                                >
                                <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                                width="52"
                                height="24"
                            />
                            </svg>
                            <span className="z_indexCheckOut relative text-rose-600">WelCome</span>
                        </span>{' '}
                        to Our Checkout Page
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                        A Beautifull Places, Free online courses from the world’s leading experts.Join 17 million learners today.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            <div className="p-6 dark:text-gray-900">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center">
                    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Purchase Now</h1>
                        <p className="text-sm dark:text-gray-400">Purchase in to access your account</p>
                    </div>
                    <form noValidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                                <input type="email" name="email" id="email" placeholder="exmple@gmail.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" required/>
                            </div>
                            <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" required/>
                            </div>
                            <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="textarea" className="text-sm">Enter Message</label>
                            </div>
                            <textarea className='text-gray-100 w-full bg-gray-900 border-2 border-gray-500' rows="4" cols="50" name="comment" form="usrform" placeholder='Enter text here...'></textarea>
                            </div>
                        </div>
                        <div className="space-y-2">
                        <button onClick={handlePurches} type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Get Purchase</button>
                    </div>
                    </form>
                   </div>
                    <div className=''>
                    <h2 className='text-3xl font-bold text-slate-900 mb-6 mt-6'>{title}</h2>
                        <div className="border-2 border-gray-200 shadow-sm p-4 rounded-lg">
                        <div className='flex items-center gap-2'>
                            <img className='w-12 h-12 rounded-full' src={author.img} alt="" />
                            <p className='text-xl font-bold'>{author.name}</p>
                        </div>
                        <div className='mt-4'>
                            <img className='w-full h-[300px] rounded-lg' src={img_url} alt="" />
                        </div>
                        <div className='flex justify-between items-center mt-4'>
                            <p className='text-xl font-bold text-slate-800'>Course duration: {otherInfo.age}</p>
                            <p className='text-xl font-bold text-slate-800'>Course Time: {otherInfo.time}</p>
                        </div>
                        <div className='flex items-center justify-between mt-4'>
                            <div className='flex items-center gap-4'>
                            <span className='text-orange-500 text-2xl'><ImStarFull /></span>
                            <span className='text-orange-500 text-2xl'><ImStarFull /></span>
                            <span className='text-orange-500 text-2xl'><ImStarFull /></span>
                            <span className='text-orange-500 text-2xl'><ImStarFull /></span>
                            <span className='text-orange-500 text-2xl'><ImStarFull /></span>
                            <span className='text-orange-500 text-2xl'><ImStarHalf /></span>
                            </div>
                            <div>
                                <span className='text-xl'><ImBookmarks /></span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
            // <div>
            //     <h2>WelCome </h2>
            // </div>
            // <h2 className='text-5xl font-bold text-slate-900 mb-6 mt-6'>{title}</h2>
            // <div className='border-8 border-gray-300 mt-16'>
            //     <div className='flex items-center gap-2'>
            //         <img className='w-16 h-16 rounded-full' src={author.img} alt="" />
            //         <p className='text-xl font-bold'>{author.name}</p>
            //     </div>
            //     <div className='mt-4'>
            //         <img className='w-full h-[600px]' src={img_url} alt="" />
            //     </div>
            // </div>