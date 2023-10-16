import React, {useState} from 'react';
import ModalHours from '../hours/ModalHours';
import './promo.css'

const Promo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return ( 
        <section className="promo">
            <div className="container">
                <div className="promo_content">
                    <div className="promo_text">Сила внутри, Мощь снаружи</div>
                </div>
                <div className="second_bar">
                    <div className="second_bar_content">
                        <a href="!#" className="member">Абонемент</a>
                        <span></span>
                        <a href="!#" onClick={()=>{setIsModalOpen(!isModalOpen)}} className={`open_hours ${isModalOpen ? "active" : "inactive"}`}>Часы Работы</a>
                    </div>
                </div>
                <div onClick={()=>{setIsModalOpen(!isModalOpen)}} className={`modal_overlay ${isModalOpen ? "active" : "inactive"}`}>
                    <ModalHours closeModal={() => setIsModalOpen(false)}/>
                </div>
            </div>
        </section> 
    );
}
 
export default Promo;