import { Button } from "@heroui/react";
import Link from "next/link";
import 'animate.css';

const Banner = () => {
  return (
    <div>      
      <div className="bg-[url('https://i.ibb.co.com/BHqGKDxQ/hero-image.png')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded shadow-2xl my-4">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-top">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-2xl">
            Books Today,<br /><span className='text-orange-500'>Brighter</span> Tomorrow
          </h1>

          <div className="flex justify-center items-center py-3">
            <Link href='/all-books'>             
              <button className="text-white text-3xl border border-purple-400 font-semibold bg-transparent px-8 py-1.5 rounded-full cursor-pointer">Browse Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className='flex justify-center items-center'>
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-linear-to-bl bg-gradient-to-r from-purple-700 to-fuchsia-700 bg-clip-text text-transparent max-w-2xl my-5 animate__animated animate__fadeInLeft">
          Find Your Next Read
        </h1>        
      </div>
    </div>
    
  );
};

export default Banner;