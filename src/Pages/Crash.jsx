import '../App.css';
import { Label } from "@/components/ui/label";
import Cat from "../animations/cat404.json";
import Lottie from "lottie-react";

const Crash = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-diffBlue text-white">
            
            <div className="text-primary">
                <Lottie className='w-96 h-96'   animationData={Cat} loop={true} /> 
            </div>
            <Label className='whitespace-normal text-center text-4xl mb-8'>PAGE NOT FOUND</Label>
        </div>
    );
}

export default Crash;
