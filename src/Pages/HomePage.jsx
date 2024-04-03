import '../App.css';
import { Label } from "@/components/ui/label";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from 'framer-motion';
import { IoIosAddCircle } from "react-icons/io";
import BannerImg from '../images/banner.png';
import { PiBriefcaseBold } from "react-icons/pi";
import Yay from "../animations/Yay.json";
import Lottie from "lottie-react";
   
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
    <p className="leading-8 line-spacing mt-3">

    <ShortDescription/>

    <br />

      What to Expect<br />
      The Role<br /><br />
      We are looking for a highly motivated mobile engineer specializing in creating exceptional user experiences for our users. You will need to demonstrate strong software engineering skills, excellent interpersonal communication, tenacity, extreme ownership, and the ability to accept and give meaningful technical feedback. You will be responsible for designing architecture, writing correct, robust code, maintaining and improving existing functionality, and shipping new features. You will collaborate with our design team as well as vehicle UI and back-end developers. Our team strives to set the bar for vehicle mobile user experience. We want to work with people who are excited by this goal and have the talent to deliver on it.<br /><br />
      What You’ll Do<br />
      Responsibilities<br /><br />
      Design, code and maintain mobile user experiences end-to-end.<br />
      Optimize code for performance, stability, and maintainability.<br />
      Work with a cross-functional team of hardware engineers, application/UI software engineers, QA/Validation, and designers<br /><br />
      What You’ll Bring<br />
      Requirements<br /><br />
      Bachelor’s Degree in Computer Science, Software Engineering, or equivalent.<br />
      Minimum 2 years’ experience in Mobile (iOS/Android) development.<br />
      Proficient in at least one of: Swift, Kotlin, Objective-C, or Java.<br />
      Familiar with JavaScript/TypeScript. Experience with React/React Native is preferred.<br />
      Excellent grasp of fundamental computer science concepts, good at solving complex technical problem.<br />
      Experience using common design patterns. High standards for code quality, maintainability, and performance.<br />
      Experience creating, maintaining, and shipping top-ranking mobile apps is preferred.<br /><br />
      Compensation and Benefits<br />
      Benefits<br /><br />
      Along with competitive pay, as a full-time Tesla employee, you are eligible for the following benefits at day 1 of hire:<br />
      Aetna PPO and HSA plans less than 2 medical plan options with $0 payroll deduction<br />
      Family-building, fertility, adoption and surrogacy benefits<br />
      Dental (including orthodontic coverage) and vision plans, both have options with a $0 paycheck contribution<br />
      Company Paid (Health Savings Account) HSA Contribution when enrolled in the High Deductible Aetna medical plan with HSA<br />
      Healthcare and Dependent Care Flexible Spending Accounts (FSA)<br />
      LGBTQ+ care concierge services<br />
      401(k) with employer match, Employee Stock Purchase Plans, and other financial benefits<br />
      Company paid Basic Life, AD&D, short-term and long-term disability insurance<br />
      Employee Assistance Program<br />
      Sick and Vacation time (Flex time for salary positions), and Paid Holidays<br />
      Back-up childcare and parenting support resources<br />
      Voluntary benefits to include: critical illness, hospital indemnity, accident insurance, theft & legal services, and pet insurance<br />
      Weight Loss and Tobacco Cessation Programs<br />
      Tesla Babies program<br />
      Commuter benefits<br />
      Employee discounts and perks program<br /><br />
      Expected Compensation<br />
      $96,000 - $336,000/annual salary + cash and stock awards + benefits<br /><br />
      Pay offered may vary depending on multiple individualized factors, including market location, job-related knowledge, skills, and experience. The total compensation package for this position may also include other elements dependent on the position offered. Details of participation in these benefit plans will be provided if an employee receives an offer of employment.<br /><br />
      Tesla is an Equal Opportunity / Affirmative Action employer committed to diversity in the workplace. All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, age, national origin, disability, protected veteran status, gender identity or any other factor protected by applicable federal, state or local laws.<br /><br />
      Tesla is also committed to working with and providing reasonable accommodations to individuals with disabilities. Please let your recruiter know if you need an accommodation at any point during the interview process.<br /><br />
      For quick access to screen reading technology compatible with this site click here to download a free compatible screen reader (free step by step tutorial can be found here). Please contact accommodationrequest@tesla.com for additional information or to request accommodations.<br /><br />
     </p>
  );
}

const ShortDescription = () => {
  return (
    <p className='leading-7 line-spacing mt-3'>As a Senior Software Engineer, you will lead the development of robust software solutions, guiding the team through design, implementation, and deployment phases. Your role involves collaborating with stakeholders to define project requirements, architecting software systems, and ensuring adherence to coding standards. You'll provide technical mentorship to junior engineers, conduct code reviews, and troubleshoot complex technical issues. Additionally, you'll contribute to the technical roadmap, stay updated on industry trends, and communicate effectively with cross-functional teams to drive project success.</p>
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
          <AvatarImage  src="https://www.logodesignlove.com/images/monograms/tesla-symbol.jpg" />
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

 

export const ApplyForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Your logic for handling form submission can go here
    // For now, just setting the state to indicate submission
    setIsSubmitted(true);
  };

  const handleApplyClick = () => {
    setIsSubmitted(true); // Set the state to indicate submission when the Apply button is clicked
  };

  return (
    <Dialog>
      <form onSubmit={handleSubmit}>
        <DialogTrigger asChild>
          <Button  className="px-10 bg-black text-white transition ease-out delay-100 rounded-full  hover:-translate-y-1 hover:scale-105    hover:bg-diffBlue hover:text-white   " variant="outline">Apply</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px]">
          {!isSubmitted ? (
            <>
              <DialogHeader>
                <DialogTitle>Applying to Senior Software Engineer</DialogTitle>
                <DialogDescription>
                  TESLA - Innovating electric vehicles and sustainable energy solutions.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-row gap-4">
                  <Label className="text-left">Name</Label>
                  <Input id="name" className="col-span-full" />
                </div>
                <div className="grid grid-row gap-4">
                  <Label className="text-left">Email</Label>
                  <Input id="username" className="col-span-10" type="email" />
                </div>
                <div className="grid grid-row items-center gap-4">
                  <Label className="text-left">Phone Number</Label>
                  <Input id="phoneNumber" className="col-span-12" />
                </div>
                <div className="grid grid-row items-center gap-4">
                  <Label className="text-left">Cover Letter</Label>
                  <Input id="coverLetter" type="file" className="col-span-12" />
                </div>
                <div className="grid grid-row items-center gap-4">
                  <Label className="text-left">Resume</Label>
                  <Input id="resume" className="col-span-12" type="file" />
                </div>
              </div>
              <DialogFooter>
                <Button  onClick={handleApplyClick} type="submit">Apply</Button>
              </DialogFooter>
            </>
          ) : (
            <DialogHeader>
          
            <Lottie   animationData={Yay} loop={true} /> 
        
<center>
              <DialogTitle className="text-3xl mb-5">Congratulations!</DialogTitle>

             
              <DialogDescription className="text-xl pb-10 ">
                We have received your application. We will review it and get back to you soon.
              </DialogDescription></center>
            </DialogHeader>
          )}
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
    <div className="text-gray-400 text-sm font-medium flex flex-row text-right">
  <span className='flex items-center'><MdLocationOn className="mr-1"/> California</span>  
  <span className='ml-4 flex items-center'><TbCoinRupeeFilled  className="mr-1"/>100K-240K</span>
  <span className='ml-4 flex items-center'><IoTime  className="mr-1" />4 Hours ago</span> 
  <span className='ml-4 flex items-center'><PiBriefcaseBold  className="mr-1" />Full-time</span>   
</div>

  </div>
</CardHeader>

     <CardContent>
      <div className='  space-x-2'>
     <Badge className="border-green-500 text-green-600 text-xs " variant="outline"><FaCircleCheck className='mr-1' /> Actively Hiring</Badge>
     <Badge className="border-purple-500 text-purple-600 text-xs " variant="outline"><IoRocketSharp className='mr-1' />Good  growth</Badge>
     
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
     <a href="/details">  <Button className="hover:underline-0 rounded-full transition ease-out delay-100  hover:-translate-y-1 hover:scale-105 ml-4 px-10 border-solid border-2 border-black hover:bg-white   bg-white text-black"  >Details</Button></a>

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
    <img  draggable="false" src={BannerImg} className="w-full" alt="" /> {/* Set width to 100% */}
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
