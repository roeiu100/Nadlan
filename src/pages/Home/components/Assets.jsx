import { Link } from 'react-router-dom';
const Assets = ({pic,info,title,price,lat,lng,camera,video,pics,size}) => {
  return (
    <div className="mx-auto  max-w-xl my-2">
    <div className="bg-white shadow-2xl rounded-lg mb-6 tracking-wide" >
        <div className="md:flex-shrink-0">
            <img src={pic} alt="assest" className="w-full h-64 rounded-lg rounded-b-none"/>
        </div>
        <div className="px-4 py-2 mt-2 lg:h-[235px] h-[380px] ">
            <h2 className="font-bold text-2xl text-gray-800 tracking-normal">{title}</h2>
                <p className="text-xl text-gray-700 px-2 mr-1 mb-10">
                  {info}
                </p>
        </div>
        <div className=" flex items-center -ml-3 my-3">
          <Link
            
              to={`/assest`}
              state={{ 
                pic: pic,
                info:info,
                title:title,
                price:price,
                lat:lat,
                lng:lng,
                camera:camera,
                video:video,
                pics:pics,
                size:size,
               }}
              className="mb-10 mr-5 bg-blue-200 hover:bg-blue-300 px-4 py-2 rounded-full text-base  font-medium text-gray-800   "
            >
              לפרטים נוספים
            </Link>                  
                </div>
     
    </div>
</div>

  )
}

export default Assets