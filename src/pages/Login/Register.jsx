import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/image/signup1.png';
import { FaGithubSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser, updateUseProfile, signWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()

    //Handle register submit
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        //Register Form Firebase
        createUser(email, password)
        .then((result) => {
            const user = result.user;
            form.reset();
            setError('');
            handleUpdateUserProfile(name, photoURL)
            toast.success('🦄WOW, Register Successfully Done', {autoClose: 500})
            console.log(user);
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
            console.log('SignUp Error: ', error);
        })
    }

    //update user profile form Firebase
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUseProfile(profile)
        .then(() => {})
        .catch(error => {
            console.log("upaded profile Error", error)
        })
    }

    //Hanlde google sign In
    const handleGoogleSignUp = () => {
        signWithGoogle()
        .then(result => {
            const user = result.user;
            navigate('/login');
            console.log(user);
        })
        .catch(error => {
            const errorMessage = error.message;
            setError(errorMessage);
            console.log('Google Sign in: ', errorMessage);
        })
    }
    

    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 px-4 pt-8 pb-8 lg:px-16 md:px-12 bg-gray-100'>
            <div className="w-full max-w-md p-6 space-y-3 rounded-xl dark:bg-gray-100 dark:text-gray-100 mx-auto shadow-xl">
                <h1 className="text-3xl font-bold text-center text-slate-400">Register Now</h1>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block dark:text-gray-500 text-lg font-semibold">Full name</label>
                        <input type="text" name="name" id="name" placeholder="Full Name" className="w-full px-4 py-3 rounded-md border-2 border-gray-400 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400" required/>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="photoURL" className="block dark:text-gray-500 text-lg font-semibold">Photo URL</label>
                        <input type="text" name="photoURL" id="photoURL" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border-2 border-gray-400 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-gray-500 text-lg font-semibold">Email</label>
                        <input type="email" name="email" id="email" placeholder="You Email" className="w-full px-4 py-3 rounded-md border-2 border-gray-400 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400" required/>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-500 text-lg font-semibold">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-2 border-gray-400 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400" required/>
                        <p className="text-rose-600 font-semibold">
                            {error}
                        </p>
                        <div className="flex justify-end text-xs dark:text-gray-400">
                            <Link className='underline text-[16px] font-semibold mt-2' rel="noopener noreferrer" to="#"></Link>
                        </div>
                    </div>
                    <button type='submit' className="block w-full p-3 text-center rounded-sm dark:text-gray-900 font-bold dark:bg-violet-400">Register</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-500 font-bold">Register with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={handleGoogleSignUp} aria-label="Log in with Google" className="p-3 rounded-sm text-3xl">
                        <FcGoogle />
                    </button>
                    <button aria-label="Log in with GitHub" className="p-3 rounded-sm text-slate-900 text-3xl">
                        <FaGithubSquare />
                    </button>
                </div>
                <p className="text-center sm:px-6 dark:text-gray-400 text-bold">Have an account?
                    <Link rel="noopener noreferrer" to="/login" className="underline dark:text-blue-800 text-bold">Log In</Link>
                </p>
            </div>
            <div className="shadow-lg rounded-lg">
                <img className='lg:w-[80%] mx-auto' src={loginImg} alt="" />
            </div>
        </div>
    );
};

export default Register;