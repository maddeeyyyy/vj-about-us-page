import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between flex-wrap bg-black text-white'>
      <div className='flex items-center  '>
        <img className='ml-40' src='https://vjsl.pineapplebuilder.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Faurity%2Fimage%2Fupload%2Fv1706635180%2Fvj_smart_living_final_jpg_57d0d857d5.jpg&w=96&q=75' alt='/' />
      <span className='text-2xl ml-4 font-bold'>VJ Smart Living
      
</span>
</div >
<div className='incline-block   leading-none item-center justify-between flex-wrap p-6 m-6'>
  <span className='mr-12 font-weight-400 text-center text-[1.15rem] cursor-pointer'>Home</span>
  <span className='mr-12 font-weight-400 text-center text-[1.15rem] cursor-pointer'>Services</span>
  <span className='mr-12 font-weight-400 text-center text-[1.15rem] cursor-pointer'>About Us</span>
  <span className='mr-6 font-weight-400 text-center text-[1.15rem] cursor-pointer'>Contct Us</span>
  <button className='mr-40 font-weight-400 text-center text-black text-[1.15rem] rounded py-2 px-2 bg-[#E4F8EF] cursore-pointer '>Enquiry Now</button>
</div>
    </div>
  )
}

export default Header