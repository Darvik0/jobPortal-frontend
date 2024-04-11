import '../App.css';
import ReactDOM from 'react-dom';
 import { Label } from "@/components/ui/label";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion, useAnimation } from 'framer-motion';
import { IoIosAddCircle } from "react-icons/io";
import BannerImg from '../images/banner.png';
import { PiBriefcaseBold } from "react-icons/pi";
import Yay from "../animations/Yay.json";
import Lottie from "lottie-react";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';  

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
   
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

const LocationPicker = () => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  return (
    <div className='flex mt-5 space-x-3 justify-between '>
      <CountryDropdown type="button" role="combobox" aria-controls="radix-:r5:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder="" className="custom-select flex w-full h-10  items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"  
        value={country}
        onChange={(val) => setCountry(val)} />


      <RegionDropdown type="button" role="combobox" aria-controls="radix-:r5:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder="" className="custom-select flex h-10 w-full  items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"  
        country={country}
         value={region}
         blankOptionLabel="Select Region"
        onChange={(val) => setRegion(val)} />



 
    </div>
  );
}

const TextEditor = () => {

  const [value, setValue] = useState('');

  return (
    <ReactQuill name="jobDescription"  className='w-full h-full' theme="snow" value={value} onChange={setValue} />
  );
}



const JobDetails = ({ onNext }) => {

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  }, [controls]);


  return (
<motion.div
     initial={{ opacity: 0, y: -5 }}
      animate={controls}
    >
    
  <div>

    
    <div className="font-bold mb-4 mt-8   flex  ">
      <p className="text-4xl">Create Jobs</p>
      
     </div>

     <div className=" mb-4  flex">
      <p className="text-2xl">For [company name]</p>
      
     </div>


     <div className='mt-20'>

     <div className="flex mt-5 space-x-3 justify-between">
<Input name="JobTitle" className="border   focus:ring-transparent" type="text" placeholder="Job Title" /> 
 </div>


     <div className="flex space-x-3 mt-5 ">
  <Input name="CompanyName" className="border   focus:ring-transparent" type="text" placeholder="Company name" /> 
  <Input name="Name" className="border   focus:ring-transparent" type="text" placeholder="Your name" /> 
</div>
<div className="flex mt-5 space-x-3 justify-between">
<Select>
      <SelectTrigger className=" ">
        <SelectValue placeholder="Job type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Job type</SelectLabel>
          <SelectItem value="grapes">Full time</SelectItem>
          <SelectItem value="pineapple">Part time</SelectItem>
          <SelectItem value="pineapple">Intern</SelectItem>

        </SelectGroup>
      </SelectContent>
    </Select> 
    <Input name="Salary" className="border   focus:ring-transparent" type="text" placeholder="Salary" /> 


    {/* change this!! */}
</div>

<div className="flex flex-col space-x-3 justify-between ">
<LocationPicker />

</div>



  </div>

  <Button className="mt-10 px-10 py-5 rounded-full" onClick={onNext}>Next </Button>


  </div>

  </motion.div>
  );
}

const JobNext = ({ onBack }) => {

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  }, [controls]);


  return (
    <motion.div
     initial={{ opacity: 0, y: -5 }}
      animate={controls}
    >
    <div className='justify-center'>
    <div className="font-bold mb-4 mt-8   flex  ">
      <p className="text-4xl">Write description</p>

    
      
     </div>

     <div className='  h-[300px]'>
      <TextEditor  />
      </div>

      <div className='mt-10'>
      <Button className="mt-10 px-10 py-5 rounded-full" onClick={onBack}>Back</Button>
      <Button type="submit" className="mx-5 mt-10 px-10 py-5 rounded-full">Submit</Button>
      </div>
    </div>
    </motion.div>
  );
}
 

const CreateJobs = () => {

  const [showJobDetails, setShowJobDetails] = useState(true); // Define showJobDetails state variable


 
  const handleNext = () => {
    setShowJobDetails(false);
  }

  const handleBack = () => {
    setShowJobDetails(true);
  }

    return (
      
      
        <div className="flex flex-col w-screen h-screen text-black overflow-y-auto">

            {/* Navbar */}
            <nav className=" transition-all duration-300 ease-in-out">

           
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
                        <a href="/sign-up" className="mr-5 py-2 transition ease-out delay-100 hover:-translate-y-1 text-blue-700 font-semibold hover:scale-105 duration-300 mt-4 px-4 py-2 leading-none text-black rounded-full border-white mt-4 lg:mt-0 bg-blue-100 ">
                            <IoIosAddCircle className="inline-block"/> Add jobs
                        </a>
                        
                        
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
                                <DropdownMenuItem className="text-red-400 hover:text-red-400">Sign out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</nav>


                {/* Main */}

<div>
  <div>
   </div>
  <main className="overflow-x-auto overflow-y-auto max-w-screen-md justify-center mx-auto items-center h-screen">

    <form   method='POST'>
    
  {showJobDetails ? (
          <JobDetails onNext={handleNext} />
        ) : (
          <JobNext onBack={handleBack} />
        )}

     </form>
  </main>
</div>

 

        </div>

        

    );
}

export default CreateJobs;
