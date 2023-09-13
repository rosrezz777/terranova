import './about_us.css'

const AboutUs = () => {
    return ( 
        <section className="about_us">
            <div className="container">
                <div className="about_us_content">
                    <div className="photo_slider"></div>
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
            </div>
        </section>
     );
}
 
export default AboutUs;