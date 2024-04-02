import '../App.css';
import { Label } from "@/components/ui/label";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from 'framer-motion';
import { IoIosAddCircle } from "react-icons/io";
import BannerImg from '../images/banner.png';

   
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


export const JobDescription = () => {
  return (
    <Label className="  leading-6 line-spacing mt-3">
      Tesla is seeking a highly skilled and experienced Senior Developer to join our dynamic team. As a Senior Developer at Tesla, you will play a key role in developing cutting-edge software solutions that power our innovative electric vehicles, energy products, and autonomous driving technologies. You will work alongside talented engineers, designers, and product managers to drive innovation and create impactful solutions that shape the future of transportation.

      Responsibilities:

      Design, develop, and maintain scalable and reliable software solutions for Tesla's electric vehicles, energy products, and autonomous driving technologies.
      Collaborate with cross-functional teams to gather requirements, define technical specifications, and deliver high-quality software solutions that meet business needs.
      Architect and implement software systems using modern programming languages and frameworks, with a focus on performance, reliability, and security.
      Lead code reviews, provide technical guidance, and mentor junior developers to foster a culture of continuous learning and improvement.
      Stay up-to-date with the latest industry trends, technologies, and best practices, and contribute to the continuous improvement of Tesla's software development processes and methodologies.

      Qualifications:

      Bachelor's degree in Computer Science, Engineering, or a related field; Master's degree preferred.
      5+ years of professional experience in software development, with a strong focus on backend development, web development, or mobile app development.
      Proficiency in one or more programming languages such as Python, JavaScript, Java, or C++.
      Experience working with cloud platforms such as AWS, Azure, or Google Cloud Platform.
      Solid understanding of software engineering principles, design patterns, and best practices.
      Excellent problem-solving skills, attention to detail, and ability to work independently and collaboratively in a fast-paced environment.
      Strong communication skills and ability to effectively collaborate with cross-functional teams.

      Benefits:

      Competitive salary and stock options
      Comprehensive health benefits package
      401(k) retirement plan with employer match
      Flexible work schedule and remote work options
      Employee discounts on Tesla products and services
      Opportunities for career growth and advancement

      How to Apply:

      Interested candidates are encouraged to apply online through the Tesla careers website. Please include a resume, cover letter, and any relevant portfolio or code samples showcasing your work.
    </Label>
  );
}

const AboutCompany = () => {
  return (
    <HoverCard>
    <HoverCardTrigger>
      <a className="cursor-pointer hover:underline  text-gray-400 font-medium"  >at TESLA</a>
    </HoverCardTrigger>
    <HoverCardContent className="">
      <div className="flex space-x-4">
        <Avatar>
          <AvatarImage src="https://www.logodesignlove.com/images/monograms/tesla-symbol.jpg" />
         </Avatar>
        <div className="space-y-1">
          <h4 className=" font-semibold">Tesla</h4>


          <p className="text-sm">
         
           Innovating electric vehicles and sustainable energy solutions.
          </p>






          <div className="flex items-center pt-2">
           
            <span className="text-xs text-muted-foreground">
              Joined December 2024
            </span>
          </div>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
  );
}

 

const ApplyForm = () => {
    return (
      <Dialog className=" "> {/* Adjust the width as needed */}
  <form action="">
    <DialogTrigger asChild>
      <Button className="px-10 bg-black text-white transition ease-out delay-100 rounded-full  hover:-translate-y-1 hover:scale-105    hover:bg-diffBlue hover:text-white   " variant="outline">Apply</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[525px]  "> {/* Adjust the maximum width as needed */}
      <DialogHeader>
        <DialogTitle>Applying to <DialogTitle className="mt-2   text-2xl font-bold  "> Senior Software Engineer</DialogTitle></DialogTitle>
        <DialogDescription>
          TESLA - Innovating electric vehicles and sustainable energy solutions. 
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-row gap-4">
          <Label className="text-left">
            Name
          </Label>
          <Input
            id="name"
            className="col-span-full"
          />
        </div>
        <div className="grid grid-row  gap-4">
          <Label  className="text-left">
            Email
          </Label>
          <Input
            id="username"
            className="col-span-10"
            type="email"
          />
        </div>

        <div className="grid grid-row items-center gap-4">
          <Label  className="text-left">
            Phone Number
          </Label>
          <Input
            id="phoneNumber"
            
            className="col-span-12"
          />
        </div>

        <div className="grid grid-row items-center gap-4">
          <Label  className="text-left">
          Cover Letter
          </Label>
          <Input
            id="coverLetter"
            type="file"
            className="col-span-12"
          />
        </div>

        <div className="grid grid-row  items-center gap-4">
          <Label  className="text-left">
            Resume
          </Label>
          <Input
            id="resume"
            className="col-span-12"
            type="file"
          />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Apply</Button>
      </DialogFooter>
    </DialogContent>
  </form>
</Dialog>

    );
  };
  
const ListCard = () => (
    <Card className="transition ease-out delay-100  hover:-translate-y-1 hover:scale-[1.01] border-solid border-2 border-gray-300 w-full m-3 rounded-2xl">
   <CardHeader>
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-4">
      <Avatar className="hidden h-12 w-12 sm:flex">
        <AvatarImage  className="rounded-md"   src="https://www.logodesignlove.com/images/monograms/tesla-symbol.jpg" alt="Avatar" />
       </Avatar>
      <div className="grid gap-1">
        <CardTitle>Senior Software Engineer</CardTitle>
        <CardDescription ><AboutCompany /></CardDescription>
      </div>

      
    </div>
    <div className="text-gray-400 font-medium flex flex-row text-right">
  <span className='flex items-center'><MdLocationOn className="mr-1"/> California</span>  
  <span className='ml-4 flex items-center'><TbCoinRupeeFilled  className="mr-1"/>100K-240K</span>
  <span className='ml-4 flex items-center'><IoTime  className="mr-1" />4 Hours ago</span>    
</div>

  </div>
</CardHeader>

     <CardContent>
      <div className='  space-x-2'>
     <Badge className="border-green-500 text-green-600 text-xs " variant="outline"><FaCircleCheck className='mr-1' /> Actively Hiring</Badge>
     <Badge className="border-purple-500 text-purple-600 text-xs " variant="outline"><IoRocketSharp className='mr-1' />Amazing growth</Badge>
     
     <Badge className="border-yellow-500 text-yellow-600 text-xs " variant="outline"><RiEmotionHappyFill className='mr-1' />Satisfied</Badge>


     </div>
         <div className="grid w-full items-center gap-3">
            
          <div className="flex flex-col space-y-5">
           {/* DESCRIPTION */}
           <Label className="mt-3 truncate-multiline-3 ">
           <JobDescription />
            </Label>
           </div>
          
        </div>
 
    </CardContent>
    <CardFooter className="flex ">
       <ApplyForm /> 
       <Button  className="rounded-full transition ease-out delay-100  hover:-translate-y-1 hover:scale-105 ml-4 px-10 border-solid border-2 border-black hover:border-diffBlue hover:bg-diffBlue hover:text-white  bg-white text-black"  >Details</Button>

     </CardFooter>
  </Card>
  );
  
  const List = ({shouldRender}) => {

    if (!shouldRender) {
      return null;
    }

    return (
    <div className="p-10 items-center flex flex-col ">
 
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
       
    </div>
    ); 
  };
  

const HomePage = () => {

  const [showList, setShowList] = useState(true);

   

    return (
      
      
        <div className="flex flex-col w-screen h-screen text-black overflow-y-auto">

            {/* Navbar */}
            <nav className=" transition-all duration-300 ease-in-out">

           
    <div className="flex items-center justify-between px-2 py-4 mx-auto max-w-screen-lg"> {/* Adjusted padding */}
   
        <div className="flex items-center flex-shrink-0 text-black mr-6">
            <a href="/" className='transition ease-out delay-100  hover:-translate-y-1 hover:scale-125 '>
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
  <div className="overflow-y-auto mx-auto">
    <img src={BannerImg} className="w-full" alt="" /> {/* Set width to 100% */}
  </div>
  <main className="flex-1 overflow-y-auto max-w-screen-lg mx-auto">
    <div className="font-bold mb-4 mt-8  px-10 flex justify-between">
      <p className="text-4xl">Careers</p>
      <p className="text-lg">Page 1 to 10</p>
    </div>
    <List shouldRender={showList} />
    {/* Render "It's empty" message when List is not rendered */}
    {!showList && (
      <p className="text-xl text-center mt-6">It's empty</p>
    )}
  </main>
</div>

 

        </div>

    );
}

export default HomePage;
