export default function Container4() {
  return (
    <div className="bg-[#021F28]  h-screen aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <h1 className="text-[#47DEB1] text-[3rem] font-bold pt-36" >Company Values</h1>
      <p className="text-white mt-6 font-bold text-[1.25rem]">
        At VJ Smart Living, our values are the cornerstone of our operations and
        they guide us in every decision we make.
      </p>

      <div className="flex ml-44 mr-40 pt-36">
        <div className="">
          <spam className=" flex justify-center items-centre h-24 w-24 ml-44">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#47DEB1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
              <line x1="16" y1="8" x2="2" y2="22"></line>
              <line x1="17.5" y1="15" x2="9" y2="15"></line>
            </svg>
          </spam>
          <h2 className="text-[#47DEB1] text-[1.35rem] font-bold ml-20">Innovation</h2>
          <p className="text-white text-[1.125rem] ml-20">
            We believe in pushing boundaries and constantly evolving to stay
            ahead of industry trends.
          </p>
        </div>   
        <div>
          <span className=" flex justify-center items-centre h-24 w-24 ml-72">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 28 28"
              strokeWidth={2.5}
              stroke="#47DEB1"
              
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
              />
            </svg>
          </span>
          <h2 className="text-[#47DEB1] text-[1.35rem] font-bold ml-44">Integrity</h2>
          <p className="text-white text-[1.125rem] ml-44">
            Honesty is at the heart of our business model. We ensure
            transparency in all our dealings with clients, partners, and
            employees.
          </p>
        </div>
        <div>
          <span className=" flex justify-center items-centre h-24 w-24 ml-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              strokeWidth={2.5}
              stroke="#47DEB1"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </span>
          <h2 className="text-[#47DEB1] text-[1.35rem] font-bold  ml-32">Quality</h2>
          <p className="text-white text-[1.125rem] ml-28">
            We're committed to delivering top-notch software solutions and IoT
            devices that not only meet but exceed expectations.
          </p>
        </div>
      </div>
    </div>
  );
}
