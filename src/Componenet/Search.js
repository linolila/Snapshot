import React,{useState} from 'react'
import {useContext} from 'react';
import {ImageContext  } from '../App';
const Search = () => {
    const [searchValue,setSearchValue]=useState("");
    const {fetchData} = useContext(ImageContext);
    const handelInputChange=(e)=>{
        setSearchValue(e.target.value)
    }
    const handelButtonSearch=()=>{
        fetchData(`search/photos?page=1&query=${searchValue}office&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
        setSearchValue(" ");
    }
    const handelEnterSearch =e=>{
        if(e.key==="Enter"){
            fetchData(`search/photos?page=1&query=${searchValue}office&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
            setSearchValue(" ");

    }

    }
    
    return (
    
            <div className='flex'>
                <input 
                onChange={handelInputChange}
                className='bg-white-50 border border-gray-300 text-sm w-full
                indent-2 p-2.5 outline-none focus:border-white-500 focus:ring-2 rounde-tl rounded-bl'
                
                type="search"placeholder="Search..." />
                <button 
                onClick={handelButtonSearch}
                onKeyDown={handelEnterSearch}
                className='bg-black-600 px-6 py-2.5 border border-gray-300 text-white
                rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400'>Search</button>
            </div>
       
    )
}

export default Search;
