import React from "react"
import Card from '../card/Card';
import s from './slider_card.module.css'
import { CardData } from '../card/CardData.js'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';


import { Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import {EffectCoverflow, Navigation} from "swiper/modules"

const SliderCard = () => {
    return ( 
        <div className={s.slider_card}>
            <Swiper
                    slidesPerView={'auto'}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    navigation={{
                        nextEl:'.swiper-button-next',
                        prevEl:'.swiper-button-prev',
                        clickable: true
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 6
                    }}


                    modules={[EffectCoverflow ,Navigation]}
                    className={s.swiper_coach}
                >
                    {CardData.map(CardData => (
                        <SwiperSlide className={s.swiper_slide} key={CardData.id}>
                            <Card
                                image={CardData.image}
                                name={CardData.name}
                                position={CardData.position}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className={s.slider_card_btn}>
                    
                    <IoIosArrowBack  className={`swiper-button-prev ${s.arrow_card}`}/>
                    <span></span>
                    <IoIosArrowForward className={`swiper-button-next ${s.arrow_card}`}/>
                </div>
        </div>
     );
}
 
export default SliderCard;