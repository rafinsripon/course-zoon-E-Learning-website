import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/image/login2.png';
import { FaGithubSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    //private route location setup
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    //Handle logIn submit 
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        //sign in
        signIn(email, password)
        .then((result) => {
            const user = result.user;
            navigate(from, {replace: true});
            setError('');
            console.log(user);
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
            console.log('Sign In error: ', errorMessage);
        })
    }
   

    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 px-4 pt-8 pb-8 lg:px-16 md:px-12 bg-gray-100'>
            <div className="w-full max-w-md p-6 space-y-3 rounded-xl dark:bg-gray-100 dark:text-gray-100 mx-auto shadow-xl">
                <h1 className="text-3xl font-bold text-center text-slate-400">Login Now</h1>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-gray-500 text-lg font-semibold">Email*</label>
                        <input type="email" name="email" id="email" placeholder="You Email" className="w-full px-4 py-3 rounded-md border-2 border-gray-400 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400" required/>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-500 text-lg font-semibold">Password*</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-2 border-gray-400 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400" required/>
                        <p className="text-rose-600 font-semibold">
                            {error}
                        </p>
                        <div className="flex justify-end text-xs dark:text-gray-400">
                            <Link className='underline text-[16px] font-semibold mt-2' rel="noopener noreferrer" to="#">Forgot Password?</Link>
                        </div>
                    </div>
                    <button type='submit' className="block w-full p-3 text-center rounded-sm dark:text-gray-900 font-bold dark:bg-violet-400 mt-4">Log In</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-500 font-bold">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button  aria-label="Log in with Google" className="p-3 rounded-sm text-3xl">
                        <FcGoogle />
                    </button>
                    <button aria-label="Log in with GitHub" className="p-3 rounded-sm text-slate-900 text-3xl">
                        <FaGithubSquare />
                    </button>
                </div>
                <p className="text-center sm:px-6 dark:text-gray-400 text-bold">Don't have an account?
                    <Link rel="noopener noreferrer" to="/register" className="underline dark:text-blue-800 text-bold">Sign Up</Link>
                </p>
            </div>
            <div className="shadow-lg rounded-lg">
                <img className='lg:w-[80%] mx-auto' src={loginImg} alt="" />
            </div>
        </div>
    );
};

export default Login;