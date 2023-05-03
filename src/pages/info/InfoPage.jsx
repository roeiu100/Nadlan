import React from 'react'
import { useLocation } from 'react-router-dom';
import cover from '../../images/bg-info.jpg'
import Map from './components/Map';
import { ArrowBack, Phone, VideoCameraBack } from '@mui/icons-material';
import Footer from '../general/Footer';
import { Carousel } from './components/Carousel';
const InfoPage = () => {
const location=useLocation() 
const {pic,info,title,price,lat,lng,video,pics}=location.state
console.log(location); 
const priceLines = price.split('\n');

  return (
    <div>
        <div className="absolute top-0 left-0 w-full  p">
              <img
                className=" w-full h-[170vh]"
                src={cover}
                alt=""
              />
            </div>
    <div className="mt-10 w-full max-w-6xl rounded bg-white shadow-xl mx-auto text-gray-800 relative md:text-left ">
    <div className="md:flex items-center">
        <div className="w-full md:w-4/6 ">
            <div className="relative">
            <img src={pic} alt="assest" className="w-full h-full rounded-lg rounded-b-none"/>
            </div>
        </div> 
        <div className="w-full md:w-2/6 px-10">   
    <div className='mr-72'>  <a href='/' ><ArrowBack className='hover:text-blue-600'/></a> </div>
                     <h1 className="font-bold uppercase text-2xl mb-5 second-head text-center">{title}</h1>

          <div className="text-xl font-semibold text-right">
          {priceLines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
                 </div>
                <div className=" mt-10 text-right">   
                    <a href="https://wa.me/+905391182712?text=היי%20לאון,%20אני%20רוצה%20להתייעץ%20איתך%20בנוגע%20לנדל''ן%20בצפון%20קפריסין"   
                    target='_blank' rel="noreferrer"         
                  className="bg-green-600 opacity-75 hover:bg-green-800 text-white 
                    rounded-full px-9 py-3 font-semibold "><Phone/> ליצירת קשר</a>
                </div>
                
                <div className=" mt-10 text-right">   
                    <a href={video} target='_blank'  rel="noreferrer"         
                  className="bg-red-600 opacity-75 hover:bg-red-800 text-white 
                    rounded-full px-10 py-3 font-semibold "><VideoCameraBack/>  סרטון</a>
                </div>
        </div>
    </div>  
    <div className="mb-10 text-right px-5 mt-3">
                <p className="text-xl font-semibold text-right">
                    {info}
                 </p>
            </div>
        <div className="w-full md:w-full flex justify-center">
            <Map
            lat={lat}
            lng={lng}
            />
        </div>  
        <h1 className='font-bold uppercase text-2xl mb-5 second-head text-center  mt-5'>תמונות של הנכס</h1>
<div className='flex justify-center'>
<Carousel 
pics={pics}
/>
</div>

</div>
<Footer/>
</div>
  )
}

export default InfoPage