import React from "react"
import './slider_card_desktop.css'
import Card from '../card/Card'
import { CardData } from '../card/CardData.js'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import { Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import {Navigation} from "swiper/modules"

const SliderCardDesktop = () => {
    return ( 
        <div className="slider_card_desktop">
            <IoIosArrowBack className="swiper-button-prev arrow_card_left_desktop"/>
            <Swiper
                    slidesPerView={'auto'}
                    effect={'coverflow'}
                    grabCursor={true}
                    spaceBetween={71}
                    navigation={{
                        nextEl:'.swiper-button-next',
                        prevEl:'.swiper-button-prev',
                        clickable: true
                    }}


                    modules={[Navigation]}
                    className="swiper_coach"
                >
                    {CardData.map(CardData => (
                        <SwiperSlide className="swiper_slide" key={CardData.id}>
                            <Card
                                image={CardData.image}
                                name={CardData.name}
                                position={CardData.position}
                            />
                        </SwiperSlide>
                    ))}
            </Swiper>
            <IoIosArrowForward className="swiper-button-next arrow_card_right_desktop"/>
        </div>
     );
}
 
export default SliderCardDesktop;