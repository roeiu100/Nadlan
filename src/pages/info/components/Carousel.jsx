import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '500px',
}

export const Carousel = ({ pics }) => {
  return (
      <div className=" w-3/4 mt-2  mb-6">
        <Slide>
         {pics?.map((pic, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${pic})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}