import React from 'react'
import { useSpring, animated } from "react-spring";
const HeroSection = () => {
    const props = useSpring({
        from: { color: "gray" },
        to: [
          { color: "green" },
        { color: "yellow" },
          { color: "red"},
        ],
    
        config: { duration: 1000, tension: 100, friction: 10
     },
        loop: Infinity,
      });
  return (
    <div className="bg-black-400 py-12 px-4 sm:px-6 lg:px-8 bi-url{}" >
    <div className="max-w-7xl mx-auto">
      <div className="lg:text-center">
        {/* <h2 className="text-base text-white-900 font-bold tracking-wide uppercase">Fenote</h2> */}
   


        
        <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
        <animated.h1 style={props}>
         Techtopians
          </animated.h1>
          <div>
          <animated.h1 style={props}>
          Fenote
          </animated.h1>
          </div>
        </h1>
        
    
        <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
          
        </p>
        
        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
           Learning is a journey 
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeroSection