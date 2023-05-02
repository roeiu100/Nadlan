import React from 'react'
const Advantages = ({content,icon}) => {
  return (
    <div className='mt-7 flex justify-center text-center'>
       
      <div className='border-4 w-44 rounded-full'> 
        {icon}
        <br/>
       {content}
        </div>
     
   
        </div>
  )
}

export default Advantages