import '../App.css';
import { Label } from "@/components/ui/label";
import { BiConfused } from "react-icons/bi";

const Crash = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-diffBlue text-white">
             <h1 className='whitespace-normal text-center text-8xl mb-8'>404</h1>
            <h1 className='whitespace-normal text-center text-4xl mb-8'>PAGE NOT FOUND</h1>
            <div className="text-primary">
               <a href="/"><BiConfused className='transition ease-in-out delay-10 text-[#FF00A8] hover:-translate-y-1 hover:scale-110 hover:text-white   spin-reverse text-[#FF00A8]' style={{ fontSize: '20rem' }} /></a> 
            </div>
        </div>
    );
}

export default Crash;
