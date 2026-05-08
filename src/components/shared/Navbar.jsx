import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow px-5 flex justify-between">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/all-books"}>All Books</Link></li>
                        <li><Link href={"/profile"}>My Profile</Link></li>

                    </ul>
                </div>
                <h3 className="font-bold text-4xl"><span className='text-orange-600'>Omni</span>Books</h3>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/all-books"}>All Books</Link></li>
                    <li><Link href={"/profile"}>My Profile</Link></li>
                </ul>
            </div>
            <div className="flex gap-2 text-sm justify-end">
                <button className='bg-blue-500 hover:bg-blue-600 text-[#000000] p-2 rounded font-semibold'>
                    <Link href={"/signin"}>Sign in</Link>
                </button>
                <button className='bg-[#f59e0b] text-black p-2 rounded'>
                    <Link href={"/signup"}>Sign up</Link>
                </button>
                {/* <ul className="flex items-center text-sm gap-5">
                    <li>
                        <Link href={"/signup"}>Sign up</Link>
                    </li>
                    <li>
                        <Link href={"/signin"}>Sign in</Link>
                    </li>
                </ul> */}
            </div>
        </div>
    );
};

export default Navbar;