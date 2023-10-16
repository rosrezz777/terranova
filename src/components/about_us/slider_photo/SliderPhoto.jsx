import { SliderData } from './SliderData';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import s from './slider_photo.module.css'

import { Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import {Navigation} from "swiper/modules"


const SliderPhoto = () => {

  return (
    <section className={s.slider}>
        <Swiper
              navigation={{
                  nextEl:'.swiper_button_next',
                  prevEl:'.swiper_button_prev',
                  clickable: true
              }}
              modules={[Navigation]}
              className={s.swiper_about_us}
        >
          <SwiperSlide className={s.slide}></SwiperSlide>
          <SwiperSlide className={s.slide}></SwiperSlide>
          <SwiperSlide className={s.slide}></SwiperSlide>
          <SwiperSlide className={s.slide}></SwiperSlide>
          <SwiperSlide className={s.slide}></SwiperSlide>
          <SwiperSlide className={s.slide}></SwiperSlide>
          <SwiperSlide className={s.slide}></SwiperSlide>
          <SwiperSlide className={s.slide}></SwiperSlide>
          <SwiperSlide className={s.slide}></SwiperSlide>
        </Swiper>
        <div className={s.slider_btn}>
            <IoIosArrowBack className={`swiper_button_prev ${s.arrow}`}/>
            <span></span>
            <IoIosArrowForward className={`swiper_button_next ${s.arrow}`}/>
        </div>
    </section>
  );
};

export default SliderPhoto;