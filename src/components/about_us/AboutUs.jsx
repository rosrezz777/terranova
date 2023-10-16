import React from 'react'
import './about_us.css'
import SliderPhoto from './slider_photo/SliderPhoto'

const AboutUs = () => {
    return ( 
        <section className="about_us">
            <div className="about_us_content">
                <div className="text">
                    <h1 className="headline">
                                Современный фитнес-клуб, в вашей доступности.
                    </h1>
                    <p className="description">
                        Вы опытный спортсмен, новичок или находитесь где-то посередине? 
                        К нам может присоединиться любой, независимо от уровня физической подготовки и опыта. 
                        Мы предлагаем свободные веса и передовые тренажеры от Spirit.
                    </p>
                </div>
            </div>
            <SliderPhoto/>
        </section>
     );
}
 
export default AboutUs;