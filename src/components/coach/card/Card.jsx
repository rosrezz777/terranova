import React from "react";
import './card.css'

import photo1 from './img_staff/12.png'

const Card = (props) => {
    return ( 
        <div key={props.id} className="card">
            {/* <img src = { photo1 } alt="coach_photo" /> */}
            <div className="card_info">
                <h3 className="staff_name">
                    {props.name}
                </h3>
                <p className="staff_position">
                    {props.position}
                </p>
            </div>
        </div>
     );
}
 
export default Card;