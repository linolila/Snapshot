import React from 'react'

const Header = ({children}) => {
  return (
    <div className="bg-pink-900 flex items-center py-10">
    <div className='max-w-md mx-auto w-full'>
        <h1 className='text-white text-center text-2xl font-bold mb-5'>
Snapshot
        </h1>
        {children}
        </div>
        </div>
  )
}

export default Header