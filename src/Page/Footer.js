import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around mr-36 ml-24 pb-28 pt-48 bg-black'>
      <div >
        <img className='w-48 h-auto ml-16 ' src='https://vjsl.pineapplebuilder.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Faurity%2Fimage%2Fupload%2Fv1706635180%2Fvj_smart_living_final_jpg_57d0d857d5.jpg&w=256&q=90' alt='/' />
      </div>
      <div  className='mt-7'>
        <ul className='text-white '>
          <li className='text-white font-bold text-xl text-[1.5]'>Company</li>
          <li className='text-[#47DEB1] m-2'>About Us</li>
          <li className='text-[#47DEB1] m-2'>Contact Us</li>
          <li className='text-[#47DEB1] m-2'>Terms of Service</li>
        </ul>
      </div>
      <div className='mt-7'>
        <ul className='text-white '>
          <li className='text-white font-bold text-xl text-[1.5rem]'>Service</li>
          <li className='text-[#47DEB1] m-2'>Development</li>
          <li className='text-[#47DEB1] m-2'>Consulting</li>
        </ul>
      </div>
      <div className='mt-7'>
      <ul className='text-white '>
        <li className='text-white font-bold text-xl text-[1.5rem]'>Connect</li>
          <li className='text-[#47DEB1] m-2'>facebook
          </li>
          <li className='text-[#47DEB1] m-2'>Linkedin</li>
          <li className='text-[#47DEB1] m-2'>Twitter</li>
          <li className='text-[#47DEB1] m-2'>Instagram</li>
        </ul>
      </div>
      
    </div>
  )
}

export default Footer
