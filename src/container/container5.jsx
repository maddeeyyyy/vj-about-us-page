import React from 'react';

const ImageCard = ({ imageUrl, name1,name2, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center max-w-md rounded overflow-hidden shadow-lg m-6">
      <img  src={imageUrl} alt={name1} className="w-68 h-68 rounded-full object-cover aos-init aos-animate" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200" />
      <div className="px-6 py-4">
        <div className="text-white font-bold text-[1.55rem] mb-0">{name1}</div>
        <div className="text-white font-bold text-[1.55rem] mb-0">{name2}</div>
        <p className="text-[#47DEB1] text-base text-[1.55rem] font-bold  mt-6">{title}</p>
        <p className='text-white text-[1.14rem]  mt-4'>{description}</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className='w-screen h-screen'>
      <div className='aos-init aos-animate' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <h1 className="text-[#47DEB1] text-7xl mt-20 font-weight-700 font-bold">Our Team</h1>
       <p className="text-white mt-10 text-[1.25rem] text-centre">
         Meet the dedicated team behind VJ Smart Living that is continuously
         working towards improving your everyday life through technology.
       </p>

      </div>

    
    <div className="flex justify-center items-center h-screen">
      <div className="flex"> 
        <ImageCard
          imageUrl="https://vjsl.pineapplebuilder.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Faurity%2Fimage%2Fupload%2Fv1706636840%2FProfile_pic_2ac99753b9.jpg&w=256&q=90"
          name1="Vijay "
          name2="Purohit"
          title="Founder and CEO"
          description="With over 5 years of experience in the tech industry, Vijay's vision and leadership are instrumental in driving our strategic direction. His passion for IoT solutions led to the creation of VJ Smart Living."
        />
        <ImageCard
          imageUrl="https://vjsl.pineapplebuilder.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Faurity%2Fimage%2Fupload%2Fv1706636065%2Fpakodasharma_a01a74eb1c.jpg&w=256&q=90"
          name1="Pragya "
          name2="Sharma"
          title="Director of Sales and Marketing"
          description="Pragya brings her extensive knowledge in marketing strategy and customer relations to lead our sales efforts, ensuring we reach those who can most benefit from our products."
        />
        <ImageCard
          imageUrl="https://vjsl.pineapplebuilder.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Faurity%2Fimage%2Fupload%2Fv1706636407%2Fvivek_pic_4e96474a03.png&w=256&q=90"
          name1="Vivek  "
          name2="Singh"
          title="Full Stack Developer"
          description="Vivek oversees product development from conception to launch, ensuring each device meets quality standards while aligning with customer needs."
        />
      </div>
    </div>
    </div>
  );
};

export default App;



