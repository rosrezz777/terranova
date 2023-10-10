import React from "react";
import MemberCard from "./member_card/MemberCard";
import './membership.css'


const Membershpip = () => {
    return ( 
        <section className="membership">
            <div className="container">
                <div className="text_member">
                    <h2 className="headline_membership">
                        Абонементы
                    </h2>
                    <p className="description_membership">
                        Присоединяйтесь к нашему сообществу, где здоровый образ жизни находится в центре внимания. 
                        Остался всего один шаг, чтобы поднять вашу жизнь на новый уровень.
                    </p>
                </div>
                <div className="card_membership">
                    <MemberCard></MemberCard>
                    <MemberCard></MemberCard>
                    <MemberCard></MemberCard>
                </div>
            </div>
        </section>
     );
}
 
export default Membershpip;