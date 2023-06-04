import React from 'react'

const Skeleton = ({item}) => {
  return[...Array(item).keys()]
.map(()=>
<div className="animate-pulse">
    <div className="bg-gray-300 h-72 rounded-lg"></div>
</div>

   ) }

export default Skeleton