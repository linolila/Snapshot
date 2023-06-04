


import React from 'react';
import Logo from './logo.jpg';

const Navigation = () => {

    return(
<>
    
    <nav class="bg-green-500 shadow-lg">
			<div class="max-w-6xl mx-auto px-4">           
				<div class="flex justify-between">
					< div class="flex space-x-7">
						<div>
					
							<a href="#" class="flex items-center py-4 px-1">
								<img src="logo.jpg" alt="Logo" class="h-11 w-15 mr-2"/>
								{/* <span class="font-semibold text-gray-500 text-lg">Navigation</span> */}
							</a>
						</div>
					
						<div class="hidden md:flex items-center space-x-1">
							<a href="" class="py-3 px-2 text-gray-500 font-semibold hover:text-yellow-500">Home</a>
							<a href="" class="py-3 px-2 text-gray-500 font-semibold hover:text-yellow-500 transition duration-300">Coures</a>
							<a href="" class="py-3 px-2 text-gray-500 font-semibold hover:text-yellow-500 transition duration-300">About</a>
							<a href="" class="py-3 px-2 text-gray-500 font-semibold hover:text-yellow-500 transition duration-300">Contact Us</a>
						</div>
					</div>
                    <div class="hidden md:flex items-center space-x-3 ">
						<a href="" class="py-2 px-2 font-medium text-gray-500 rounded hover:bg-yellow-500 hover:text-white transition duration-300">Log In</a>
						<a href="" class="py-2 px-2 font-medium text-yellow bg-yellow-500 rounded hover:bg-yellow-400 transition duration-300">Sign Up</a>
					</div>
                    </div>
                    
                    
   </div>
   </nav>
   
       </>
    )
}

export default Navigation;
// border-yellow-500,border-b-4