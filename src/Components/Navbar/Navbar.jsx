import { useState } from 'react';
import logo from '../../assets/images/freshcart-logo.svg'
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    function handleToggle () {
        setOpen(!open);
    }
  return (
    <>
    <nav className="bg-primary border-gray-200 dark:bg-gray-900">
    <div className="max-w-screen-xl flex flex-wrap items-center md:space-x-6 justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="freshcart Logo" />
        </Link>
        <button data-collapse-toggle="navbar-default" onClick={handleToggle} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
        </svg>
        </button>
        <div className={`${open ? 'flex' : 'hidden'} w-full flex-col md:flex-row  flex-grow md:flex md:justify-between md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 items-start  border-gray-100 md:bg-transparent rounded-t-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                <NavLink to="/" className="block py-2 px-3 text-gray-900 rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-green-500" aria-current="page">Home</NavLink>
                </li>
                <li>
                <NavLink to="products" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Products</NavLink>
                </li>
                <li>
                <NavLink to="categories" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Categories</NavLink>
                </li>
                <li>
                <NavLink to="brands" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Brands</NavLink>
                </li>
            </ul>
            <ul className="font-medium flex flex-wrap  p-4 md:p-0 items-center  border-gray-100 md:bg-transparent rounded-b-lg bg-gray-50 md:flex-row md:space-x-3 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                <Link to="#" className="block py-2 px-3 text-neutral-800 rounded bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-black" aria-current="page"><i className="fa-brands fa-facebook"></i></Link>
                </li>
                <li>
                <Link to="#" className="block py-2 px-3 text-neutral-800 rounded bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-black" aria-current="page"><i className="fa-brands fa-twitter"></i></Link>
                </li>
                <li>
                <Link to="#" className="block py-2 px-3 text-neutral-800 rounded bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-black" aria-current="page"><i className="fa-brands fa-instagram"></i></Link>
                </li>
                <li>
                <Link to="#" className="block py-2 px-3 text-neutral-800 rounded bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-black" aria-current="page"><i className="fa-brands fa-tiktok"></i></Link>
                </li>
                <li>
                <Link to="#" className="block py-2 px-3 text-neutral-800 rounded bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-black" aria-current="page"><i className="fa-brands fa-youtube"></i></Link>
                </li>
                <li>
                <Link to="#" className="block py-2 px-3 text-neutral-800 rounded bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-black relative" aria-current="page">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <div className='absolute bg-green-500 w-[18px] h-[18px] rounded-full center-content top-0 end-0 md:-top-3 md:-end-2 text-white text-sm'>8</div>    
                </Link>
                </li>
                <ul className='flex md:space-x-4'>
                    <li>
                    <NavLink to="register" className="block py-2 px-3 text-gray-900  rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-green-500" aria-current="page">Register</NavLink>
                    </li>
                    <li>
                    <NavLink to="login" className="block py-2 px-3 text-gray-900  rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-green-500" aria-current="page">Login</NavLink>
                    </li>
                    <li>
                    <span className="block py-2 px-3 text-gray-900  rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-green-500" aria-current="page">Logout</span>
                    </li>
                </ul>
            </ul>
        </div>
    </div>
    </nav>
    </>
  )
}
