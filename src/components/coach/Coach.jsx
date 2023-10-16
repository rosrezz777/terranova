import React from "react";
import './coach.css'
import SliderCard from './slider_card/SliderCard'
import SliderCardDesktop from "./slieder_card_desktop/SliderCardDescktop";

const Coach = () => {
    return ( 
        <section className="coach">
            <div className="container">
                <h2 className="headline_coach">
                    Наша команда
                </h2>
            </div>
            <SliderCard/>
            <SliderCardDesktop/>
            <div className="container">
                <p className="description_coach">
                    Поддержка и забота о наших посетителях - это большая честь и ответственность для нас, поэтому мы особенно требовательны при выборе персонала.
                </p>
            </div>
        </section>
     );
}
 
export default Coach;