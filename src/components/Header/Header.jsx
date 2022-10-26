import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { FcBiohazard } from "react-icons/fc";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [toggle, setToggle] = useState(false)
    const {user, logOut} = useContext(AuthContext)
    const navigate = useNavigate()
  
    //Logout from firebase
  const handleSignOut = () => {
      logOut()
      .then(() => {
        navigate('/login');
        console.log('Success log out');
      })
      .catch(error => {
          console.log(error);
      }) 
  }
  

    return (
    <div className="px-4 py-5 md:px-14 lg:px-16 border-b-2 border-b-gray-200">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center">
        
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center mr-8"
          >
            <span className='text-4xl'><FcBiohazard /></span>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-900 uppercase">
            Course - Zone
            </span>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex gap-6 ml-8">
            <li>
              <NavLink
                to="/"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Home
              </NavLink>
            </li>
            <li>
              <Link
                to="/courses"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                aria-label="Product pricing"
                title="Product pricing"
                className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                aria-label="About us"
                title="About us"
                className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
          {/* <button onClick={handleSignOut} className='font-bold text-slate-900'>Log Out</button> */}
          <div className='flex items-center gap-4' >
            {
                user?.uid ? <>
                <span className='fw-bold fs-5 text-secondary'>{user?.displayName}</span>
                <img title={user?.displayName} className='w-8 h-8 rounded-full border-2 border-pink-600 cursor-pointer' src={user?.photoURL} alt="" />
                <button onClick={handleSignOut} className='font-bold text-slate-900'>Log Out</button>
                </>
                :
                <>
                <Link
                  to="/login"
                  aria-label="log in"
                  title="log in"
                  className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                  Log In
              </Link>
                </>
            }
          </div>
          </li>
          <label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-900">
          {/* <span>Light</span> */}
          <span onClick={() => setToggle(!toggle)} className="relative">
            <input id="Toggle1" type="checkbox" className="hidden peer" />
            <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
            <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
          </span>
          {/* <span>Dark</span> */}
        </label>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <svg
                        className="w-8 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        stroke="currentColor"
                        fill="none"
                      >
                        <rect x="3" y="1" width="7" height="12" />
                        <rect x="3" y="17" width="7" height="6" />
                        <rect x="14" y="1" width="7" height="6" />
                        <rect x="14" y="11" width="7" height="12" />
                      </svg>
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                      Course - Zone
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/courses"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faq"
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        aria-label="About us"
                        title="About us"
                        className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/login"
                        aria-label="Sign in"
                        title="Sign in"
                        className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Login
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    );
};

export default Header;