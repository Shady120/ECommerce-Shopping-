import React, { useEffect, useState } from 'react';
import style from './Slider.module.css/'
import Slider from "react-slick";
import axios from 'axios';
import Categories from '../Categories/Categories';
import { useQuery } from '@tanstack/react-query';


export default function CategorySlider() {

function getSlideCategoryApi(){
 return axios.get("https://ecommerce.routemisr.com/api/v1/categories")
}

const {data , isLoading} = useQuery({
  queryKey: ['categories'],
  queryFn: getSlideCategoryApi
})

if(isLoading){return  <i className="fas fa-spin fa-spinner w-full text-center dark:text-white"></i>;}
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    autoplay: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
    
        <Slider {...settings} className="container mx-auto mt-5">
          {data.data.data.map((Category) => (
            <div key={Category._id} className="shadow bg-emerald-300 relative">
              <div>
                <img
                  src={Category.image}
                  alt={Category.title}
                  className="h-[200px] object-cover w-full"
                />
              </div>
              <h1 className="text-center">{Category.name}</h1>
            </div>
          ))}
        </Slider>
      

      
    </>
)} 
