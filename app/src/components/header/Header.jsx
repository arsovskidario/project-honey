import { Link } from "react-router-dom";
import { useState, useContext } from "react";

import './Header.css';

import PageNavigation from "./page-navigation/PageNavigation";
import ShoppingCartContext from "../../contexts/ShoppingCartContext";

export default function Header() {
    const [isDropDownToggled, setIsDropDownToggled] = useState('hidden');

    const { cartSize } = useContext(ShoppingCartContext)

    function dropDownHandler() {
        if (isDropDownToggled === 'hidden') {
            setIsDropDownToggled('flex');
        } else {
            setIsDropDownToggled('hidden');
        }
    }

    return (

        <nav className="bg-white border-b border-cfb491">
            <div className="max-w-full flex flex-wrap items-center justify-between mx-auto sticky top-0">
                <div className="m-4 flex">
                    <Link to="/">
                        <img src="/src/assets/logo.png" className="h-20" alt="balkan-nectar-logo" />
                    </Link>
                </div>

                <div className="items-center hidden md:order-3 md:block mr-1">

                    <Link to="/login">
                        <button className="p-4 text-gray-800 hover:text-cfb491 focus:outline-none focus:text-cfb491">
                            <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                            </svg>
                        </button>
                    </Link>

                    <Link to="/checkout">
                        <button className="p-4  relative border-2 border-transparent text-gray-800 rounded-full hover:text-cfb491 focus:outline-none focus:text-cfb491 transition duration-150 ease-in-out" aria-label="Cart">
                            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                            <span className="cart-counter-span">
                                <div className="cart-counter">
                                    {cartSize}
                                </div>
                            </span>
                        </button>
                    </Link>
                </div>


                <div className="flex justify-center md:order-2">
                    <Link to="/checkout">
                        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden relative p-4 text-cfb491 hover:bg-gray-100 focus:outline-none focus:ring-gray-200">
                            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                            <span className="absolute inset-0 object-right-top -mr-6">
                                <div className="cart-counter">
                                    {cartSize}
                                </div>
                            </span>
                        </button>
                    </Link>
                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-cfb491" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-5 hover:border-cfb491 focus:border-cfb491 focus:outline-none" placeholder="Search..." />
                    </div>
                    <button data-collapse-toggle="navbar-search"
                        type="button"
                        className="object-center ml-6 p-4 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-search"
                        aria-expanded="false"
                        onClick={dropDownHandler}>
                        <svg className="w-5 h-5 text-cfb491" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 17">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={`md:hidden absolute top-[50%] xs:top-[85%] overflow-visible ${isDropDownToggled}`}>
                        <PageNavigation direction='flex-col' isDropDownToggled={isDropDownToggled} />
                    </div>
                </div>



                <div className="ml-0 items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    <div className="relative mt-3 md:hidden">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>

                    </div>
                    <PageNavigation direction='flex-row' />
                </div>


            </div>
        </nav>
    );
}