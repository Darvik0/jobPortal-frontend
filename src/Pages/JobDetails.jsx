import '../App.css';
import { Label } from "@/components/ui/label";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { JobDescription } from './HomePage';
import { PiBriefcaseBold } from "react-icons/pi";
import { ApplyForm } from './HomePage'


  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
  } from "@/components/ui/dialog"

  import { MdLocationOn } from "react-icons/md";
  import { TbCoinRupeeFilled } from "react-icons/tb";
  import { IoTime } from "react-icons/io5";

  import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  
  import { FaCircleCheck } from "react-icons/fa6";

  
import { Badge } from "@/components/ui/badge"

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import bgimg from '../images/bgimg.jpg';
import { Input } from "@/components/ui/input"

import React, { useState, useEffect } from 'react';
import { IoRocketSharp } from "react-icons/io5";
import { RiEmotionHappyFill } from "react-icons/ri";



  

const HomePage = () => {

  const [showList, setShowList] = useState(true);

   

    return (
      
      
        <div className="flex flex-col w-screen h-screen text-black overflow-y-auto">

            {/* Navbar */}
            <nav className="border-b-2 transition-all duration-300 ease-in-out">

           
    <div className="flex items-center justify-between px-2 py-4 mx-auto max-w-screen-lg"> {/* Adjusted padding */}
   
        <div className="flex items-center flex-shrink-0 text-black mr-6">
            <a href="/home" className='transition ease-out delay-100  hover:-translate-y-1 hover:scale-125 '>
                <svg width="50" height="50" viewBox="0 0 274 606" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46 150C119 150.167 261 182.7 245 311.5C229 440.3 204.667 548 198 602.5" stroke="black" strokeWidth="55"/>
                    <path d="M246 445C166.528 444.849 11.9384 415.328 29.3569 298.454C46.7754 181.58 65.6455 53.4537 72.9032 4" stroke="black" strokeWidth="55"/>
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

         
            <div className="text-[17px] lg:flex-grow"></div>
            <div className="relative ml-3">
                <div>
                    <div type="button" className="relative flex rounded-full text-sm" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <span className="-inset-1.5"></span>
                        <span className="sr-only"></span>
                      
                        
                        <DropdownMenu>
                            <DropdownMenuTrigger className='ml-3 mr-10 rounded-full shadow-none'>  
                                <img className="border-0 transition ease-out delay-100 hover:-translate-y-1 hover:scale-110 bg-transparent duration-300 h-8 w-8 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" alt=""/>   
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>My jobs</DropdownMenuItem>
                                <DropdownMenuItem>Applications</DropdownMenuItem>
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</nav>


                {/* Main */}

                <div className="">
                <div class="overflow-y-auto mx-auto">
  <img
  draggable="false"
    src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Hero-Desktop-Global"
    class="w-full h-[480px] object-cover"
    alt=""
  />
</div>

  <main className="flex-1 overflow-y-auto max-w-screen-lg mx-auto">
    <div className="font-bold mb-4 mt-10 flex justify-between">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <Avatar className="hidden h-12 w-12 sm:flex">
            <AvatarImage
              className="rounded-md"
              src="https://www.logodesignlove.com/images/monograms/tesla-symbol.jpg"
              alt="Avatar"
            />
          </Avatar>
          <div className="grid gap-1">
            <Label className="text-4xl">Senior Software Engineer</Label>
            <Label className="text-gray-500 text-xl font-bold">At TESLA</Label>
          </div>
        </div>
      </div>

      <div className="text-gray-400 font-medium      flex flex-row text-right">
        <span className="flex items-center">
          <MdLocationOn className="mr-1" /> California
        </span>
        <span className="ml-4 flex items-center">
          <TbCoinRupeeFilled className="mr-1" />100K-240K
        </span>
        <span className="ml-4 flex items-center">
          <IoTime className="mr-1" />4 Hours ago
        </span>
        <span className="ml-4 flex items-center">
          <PiBriefcaseBold className="mr-1" />Full time
        </span>
      </div>
    </div>
    <div>
    <div className="flex mb-10">
       <ApplyForm /> 
     <a href="/home">  <Button className="hover:underline-0 rounded-full transition ease-out delay-100  hover:-translate-y-1 hover:scale-105 ml-4 px-10 border-solid border-2 border-black hover:bg-white   bg-white text-black"  >Back</Button></a>

     </div>
      <p className="text-lg  leading-7 line-spacing mt-3">
        <JobDescription />
        
      </p>
    </div>
   
  </main>
</div>
 </div>
    );
}

export default HomePage;
