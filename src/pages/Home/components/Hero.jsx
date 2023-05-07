import React from 'react'
const Hero = ({logo,HeroImg}) => {
  return  (
    <div className={` relative  bg-cover bg-center flex justify-center items-center h-96 md:h-screen`} 
    style={{backgroundImage: `url(${HeroImg})`}}
    >

    
    <div className="mt-16 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 flex justify-center">
      <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <div className='flex justify-center mb-10'><img src={logo} alt="logo" className='w-36 h-36 max-md:w-24 max-md:h-24 '/>
        </div> 
        <h1 className="text-3xl text-center font-extrabold text-gray-900  md:text-8xl lg:text-10xl">
          
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-white from-white">
            Nadlan <br /> North Cyprus<br /> for you
          </span>{" "}
        </h1>
   
        <a
          href="#start"
          aria-label="Scroll down"
          className=" flex items-center mt-16 justify-center animate-bounce my-10	 bg-blue-500 hover:bg-blue-700 w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="currentColor"
          >
            <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
  )
}

export default Hero