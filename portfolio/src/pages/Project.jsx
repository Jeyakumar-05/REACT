import React from 'react'
import '../assets/css/card.css'
import Photo from '../assets/img/pooldead.jpeg'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name:`JEY`,
    img: Photo,
    about : `Project 1 Sliders reflect a range of values along a bar, from which users may select a single value.`
  },
  {
    name:`JEY`,
    img: Photo,
    about : `Project 1 Sliders reflect a range of values along a bar, from which users may select a single value.`
  },
  {
    name:`JEY`,
    img: Photo,
    about : `Project 1 Sliders reflect a range of values along a bar, from which users may select a single value.`
  },
  {
    name:`JEY`,
    img: Photo,
    about : `Project 1 Sliders reflect a range of values along a bar, from which users may select a single value.`
  }
]


const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true 
  };
  return (
    <>
      <div className='w-3/4 m-auto'> 
        <div className='mt-20'>
          <Slider {...settings}>
            {data.map((d) => (
              <div className='bg-white h-[400px] text-black rounded-xl'>
                <div className='rounded-t-xl flex justify-center items-center'>
                  <img src={d.img} alt="" className=' rounded-t-xl h-full w-full'/>
                </div>

                <div className='flex flex-col justify-center items-center gap-4 p-4'>
                  <p className='text-xl font-semibold'>{d.name}</p>
                  <p>{d.about}</p>
                  <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Source</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default Project