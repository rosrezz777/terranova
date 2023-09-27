import React from "react";
import './coach.css'
import SliderCard from './slider_card/SliderCard'




import { photo1} from './card/img_staff/coach1.jpg'

const Coach = () => {
    return ( 
        <section className="coach">
            <div className="container">
                <h2 className="headline_coach">
                    Наша команда
                </h2>
            </div>
            <SliderCard/>
            <div className="container">
                <p className="description_coach">
                    Поддержка и забота о наших посетителях - это большая честь и ответственность для нас, поэтому мы особенно требовательны при выборе персонала.
                </p>
            </div>
        </section>
     );
}
 
export default Coach;