import '../App.css';
import { Label } from "@/components/ui/label";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import bgimg from '../images/bgimg.jpg';

import React, { useState, useEffect } from 'react';

const LandingPage = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex flex-col w-screen h-screen text-white overflow-y-auto">
            <nav className={`fixed w-full ${isSticky ? 'bg-black' : 'bg-transparent'} z-10 transition-all duration-300 ease-in-out`}>
                <div className="flex items-center justify-between flex-wrap p-6">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <a href="/" className='transition ease-out delay-100  hover:-translate-y-1 hover:scale-125 '>
                            <svg width="50" height="50" viewBox="0 0 274 606" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M46 150C119 150.167 261 182.7 245 311.5C229 440.3 204.667 548 198 602.5" stroke="white" strokeWidth="55"/>
                                <path d="M246 445C166.528 444.849 11.9384 415.328 29.3569 298.454C46.7754 181.58 65.6455 53.4537 72.9032 4" stroke="white" strokeWidth="55"/>
                            </svg>
                        </a>
                    </div>
                    <div className="block lg:hidden">
                        <button className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-black">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className="text-[17px] lg:flex-grow">
                            <a href="/43" className="transition ease-out delay-100 hover:-translate-y-1 hover:scale-110 block mt-4 lg:inline-block lg:mt-0 ml-10">
                                Jobs
                            </a>
                            <a href="/" className="transition ease-out delay-100 hover:-translate-y-1 hover:scale-110 block mt-4 lg:inline-block lg:mt-0 ml-10">
                                Pricing
                            </a>
                            <a href="/" className="transition ease-out delay-100 hover:-translate-y-1 hover:scale-110 block mt-4 lg:inline-block lg:mt-0 ml-10">
                                Discover
                            </a>
                        </div>
                        <div>
                            <a href="/sign-in" className="ml-10 text-[17px] inline-block transition ease-out delay-100 hover:-translate-y-1 hover:scale-110 text-white hover:text-[#FF00A8] hover:text-white duration-300 mt-4 text-[17px] inline-block px-4 py-2 leading-none font-bold border-white px-4 py-2 leading-none text-white mt-4 lg:mt-0">Sign in</a>
                            <a href="/sign-up" className="ml-5 text-[17px] inline-block px-4 bg-white py-2 leading-none font-bold transition ease-out delay-100 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-[#0000FF] hover:text-white duration-300 mt-4 text-[17px] inline-block px-4 bg-white py-2 leading-none font-bold text-black rounded-full border-white mt-4 lg:mt-0">Sign up</a>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="object-cover w-full h-full background-image">
                <div className="flex flex-col items-start h-screen text-white py-56 px-16">
                    <h1 className='whitespace-normal text-6xl mb-4 mt-28'>Bridge to Your Dream Job.</h1>
                    <h1 className='whitespace-normal text-6xl mb-28'>Embark on Your Career Voyage.</h1>
                    <a href="/sign-up" className="transition ease-out delay-100 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-[#0000FF] hover:text-white duration-300 mt-2 text-[17px] inline-block px-5 bg-white py-3 leading-none font-bold text-black rounded-full border-white">Start Today</a>
                </div>
            </div>

            <div className="object-cover w-full h-full bg-[#0000FF]">
                <div className="flex flex-col items-start h-screen text-white py-56 px-16">
                    <h1 className='whitespace-normal text-6xl mb-8'>The job awaits for you</h1>
                     <a href="/sign-up" className="transition ease-out delay-100 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-[#0000FF] hover:text-white duration-300 mt-4 text-[17px] inline-block px-5 bg-white py-3 leading-none font-bold text-black rounded-full border-white">Start Today</a>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
