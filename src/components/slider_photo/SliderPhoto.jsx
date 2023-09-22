import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import './slider_photo.css'

const SliderPhoto = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;


  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className='slider'>
        <div className="slider_btn">
            <IoIosArrowBack className='arrow' onClick={prevSlide} />
            <span></span>
            <IoIosArrowForward className='arrow' onClick={nextSlide} />
        </div>
      {SliderData.map((slide, index) => {
        return (
            index === current && (
              <img src={slide.image} alt='gym image' className='image' />
            )
        );
      })}
    </section>
  );
};

export default SliderPhoto;