import React from "react"
import './modal_hours.css'
import logo_mobile from './../../img/icons/Logo_mobile.svg'
import close from './../../img/icons/close.svg'

const ModalHours = ({closeModal}) => {
    const workingHours = [
        { day: 'Понедельник', hours: '8:00 - 21:00' },
        { day: 'Вторник', hours: '8:00 - 21:00' },
        { day: 'Среда', hours: '8:00 - 21:00' },
        { day: 'Четверг', hours: '8:00 - 21:00' },
        { day: 'Пятница', hours: '8:00 - 21:00' },
        { day: 'Суббота', hours: '10:00 - 21:00' },
        { day: 'Воскресенье', hours: '10:00 - 21:00' }
      ];

    return ( 
        <div className="modal_hours">
            <div className="header_modal_hours">
                <img src={logo_mobile} alt="Logo" className="logo_mobile_modal_hours" />
                <button onClick={closeModal} className="close_button">
                    <img src={close} alt="X" className="close_modal_hours" />
                </button>
            </div>
            <div className="content_modal_hours">
                {workingHours.map((item, index) => (
                <div key={index} className="day_row">
                    <div className="day">{item.day}</div>
                    <div className="hours">{item.hours}</div>
                </div>
                ))}
            </div>
            
        </div>
     );
}
 
export default ModalHours;