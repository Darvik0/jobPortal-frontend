import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react"
import '../App.css';


import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
import SignUpBG from '../images/signup.png';
import '../App.css';
 


function SignUp() {

    const [showError, setShowError] = useState(false);

    const handleButtonClick = () => {
        // conditions here... 
       setShowError(true);
    } 

    const handleDragStart = (event) => {
        event.preventDefault(); // Prevent the default drag behavior
      };


    return (

        <div className=" flex flex-col lg:flex-row h-screen">
        {/* Left side - Login Form */}
        <div className="lg:w-1/2 flex items-center justify-center">
            <div className="max-w-md w-full space-y-9">
                <h2  className="title pb-0 mt-4 text-5xl text-zinc-900 font-semibold text-center lg:text-left">
                    Sign up 
                </h2>
                <form className="mt-8 space-y-6">
                    <div className="flex flex-col transition ease-out delay-100  hover:-translate-y-1 hover:scale-105">
                        <Label htmlFor="name" className="text-left text-zinc-950 mb-2">Name</Label>
                        <Input
                            type="text"
                            id="name"
                            required
                            className=" font-medium block mb-1 w-96 px-2 py-5 border-2 border-gray-500 rounded-md focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col transition ease-out delay-100  hover:-translate-y-1 hover:scale-105">
                        <Label htmlFor="email" className="text-left  text-zinc-950 mb-2">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            required
                            className="  font-medium block mb-1 w-96 px-4 py-5 border-2 border-gray-500 rounded-md focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col transition ease-out delay-100  hover:-translate-y-1 hover:scale-105">
                        <Label htmlFor="PhoneNumber" className="text-left  text-zinc-950 mb-2">Phone Number</Label>
                        <Input
                            type="text"
                            id="number"
                            required
                            className="  font-medium block mb-1 w-96 px-4 py-5 border-2 border-gray-500 rounded-md focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col transition ease-out delay-100  hover:-translate-y-1 hover:scale-105">
                        <Label htmlFor="password" className="text-left  text-zinc-950 mb-2">Password</Label>
                        <Input
                            type="password"
                            id="password"
                            required
                            className="   font-medium block mb-1 w-96 px-4 py-5 border-2 border-gray-500 rounded-md focus:outline-none"
                        />

                        
                    </div>

                    <div className="flex flex-col transition ease-out delay-100  hover:-translate-y-1 hover:scale-105">
                        <Label htmlFor="password" className="text-left  text-zinc-950 mb-2">Select Role</Label>


                    <Select className=" transition ease-out delay-100  hover:-translate-y-1 hover:scale-105 block mb-1 w-96 px-4 py-5 border-2 border-gray-500 rounded-md focus:outline-none">
                        <SelectTrigger className=" hover:bg-[#FAFAFA] mb-2 w-96 px-4 py-5 border-2 border-gray-500 rounded-md focus:outline-none">
                            <SelectValue   placeholder="Roles" />
                        </SelectTrigger>
                        <SelectContent className="transition ease-out delay-100  hover:-translate-y-1 hover:scale-105 mb-2 w-96 border-2 border-gray-500 rounded-md focus:outline-none">
                            <SelectItem value="recuriter">Hiring manager</SelectItem>
                            <SelectItem value="applicant">Career seeker</SelectItem>
                        </SelectContent>
                    </Select>       
                  </div>

                  <div>
                            {showError && (
                                <Alert variant="destructive" className="block w-96  ">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertTitle>Error</AlertTitle>
                                    <AlertDescription>Invalid Phone number or Email.</AlertDescription>
                                </Alert>
                            )}
                        </div>

                    
                    <Button
                        type="submit"
                        className="transition ease-out delay-100  hover:-translate-y-1 hover:scale-105 block w-96 h-67 py-3 bg-[#0500FF] text-white rounded-md hover:bg-[#02005F]"
                        onClick={handleButtonClick}
                    >
                        Sign in
                    </Button>

                    <div className="pt-5">


                     
                     
                    <a href="/sign-in" className="transition ease-out delay-100  hover:-translate-y-1 hover:scale-105 hover:text-[#020059] block font-semibold text-blue-600 text-lg">Already have an account?  Sign in ↗</a>  
                    
                    </div>
                </form>
            </div>
        </div>
        {/* Right side - Image */}
        <div className="lg:w-1/2 flex items-start">
            <img src={SignUpBG}  onDragStart={handleDragStart}
        draggable="false"  alt="Background" className="w-full h-screen object-cover" />
        </div>
    </div>
    );
}

 

export default SignUp; 