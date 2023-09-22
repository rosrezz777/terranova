import './promo.css'

const Promo = () => {
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
                        <a href="!#" className="open_hours">Часы Работы</a>
                    </div>
                </div>
            </div>
        </section> 
    );
}
 
export default Promo;