import React from "react"
import './contact_info.css'
import MapYandex from "./map/MapYandex";


const ContactInfo = () => {
    return ( 
        <section className="contact_info">
            <div className="container">
                <div className="contact_info_content">
                    <div className="text_contact_info">
                        <h2 className="adress_contact_info">
                            Парковый проезд 3
                        </h2>
                        <p className="description_contact_info">
                            Вы можете найти нас на улице Парковый проезд в городе Златоуст. 
                            Испытайте сочетание современных технологий и любовь к фитнесу в одном месте.
                        </p>
                        <h2 className="phone_number_contact_info">
                            +7 351-723-07-00
                        </h2>
                        <a href="#!" className="social_contact_info">
                            vkontakte
                        </a>
                    </div>
                    <MapYandex/>
                </div>
            </div>
        </section>
     );
}
 
export default ContactInfo;