import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import detailsImg from '../../assets/image/detail.jpg';
import { FcAlarmClock, FcManager, FcNext } from "react-icons/fc";
import '../../assets/styles/Main.css'
import Pdf from "react-to-pdf";
const ref = React.createRef();

const CategoryDetails = () => {
    const category = useLoaderData();
    const {otherInfo, title, author, img_url, details, requirements, id} = category;

    // console.log(category)
    return (
        <div className='mb-20' ref={ref}>
            <div className='relative z_indexImg'>
                <img className='w-full' src={detailsImg} alt="Img Not Found!" />
                <div className='absolute lg:bottom-20 md:bottom-4 bottom-0 lg:left-32 md:left-4 left-4'>
                <h2 className='lg:text-6xl md:text-xl text-base font-bold text-gray-300 mb-4'>{category.name}</h2>
                <div className="flex items-center lg:mt-16 md:mt-8 mt-0">
                    <span className='lg:text-4xl md:text-xl text-base font-bold text-slate-100 flex'><FcManager /> {otherInfo.age}</span>
                    <span className='flex lg:text-4xl md:text-xl text-base font-bold text-gray-100 lg:ml-20 md:ml-0 md-0'><FcAlarmClock /> {otherInfo.time}</span>
                </div>
                </div>
            </div>
            {/* ======header */}
            <div className="cateContainer mt-2 border-b-slate-200 border-2 p-2 flex items-center px-4 py-5 md:px-14 lg:px-16 lg:w-[80%] w-full mx-auto justify-between">
               <div className='cateHeader flex items-center'>
               <Link className='text-2xl font-semibold text-slate-700 px-8 underline' to='/'>Home</Link>
                <span className='text-2xl'><FcNext /></span>
                <Link className='text-2xl font-semibold text-slate-700 px-8 underline' to='/courses'>Courses</Link>
               </div>
               <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button className='text-white bg-rose-600 py-1 px-10 rounded-3xl' onClick={toPdf}>Download PDF</button>}</Pdf>
            </div>
            <div className="px-4 py-5 md:px-14 lg:px-16 w-[80%] mx-auto">
                <h2 className='lg:text-5xl md:text-3xl text-xl font-bold text-slate-900 mb-6'>{title}</h2>
                <div className=''>
                    <div className='flex items-center gap-2'>
                        <img className='w-16 h-16 rounded-full' src={author?.img} alt="Img Not Found!" />
                        <p className='text-xl font-bold'>{author.name}</p>
                    </div>
                    <div className='mt-4'>
                        <img className='w-full h-[600px]' src={img_url} alt="Img Not Found!" />
                        <h2 className="mt-4 font-bold text-4xl text-slate-800">
                            About Course Description.
                        </h2>
                        <p className='mt-2 font-semibold text-gray-600'>{details}</p>
                        <h2 className="mt-4 font-bold text-4xl text-slate-800">
                        What you willl learn.
                        </h2>
                        <ul className='mt-6'>
                           <li className='list-disc text-2xl font-bold text-gray-600 mt-4'>{requirements.requ1}</li>
                           <li className='list-disc text-2xl font-bold text-gray-600 mt-4'>{requirements.requ2}</li>
                           <li className='list-disc text-2xl font-bold text-gray-600 mt-4'>{requirements.requ2}</li>
                           <li className='list-disc text-2xl font-bold text-gray-600 mt-4'>{requirements.requ3}</li>
                           <li className='list-disc text-2xl font-bold text-gray-600 mt-4'>{requirements.requ4}</li>
                        </ul>
                        <Link to={`/checkout/${id}`}>
                            <button className='bg-rose-700 py-2 px-14 rounded-sm text-semibold text-gray-200 mt-6 border-b-2 border-slate-900'>Get Premium Access</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;