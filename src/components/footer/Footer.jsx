import React, {useState, useEffect, useRef} from "react"
import logo from './../../img/icons/Logo.svg'
import { IoIosArrowForward} from 'react-icons/io';
import './footer.css'


const Footer = () => {

    const [toggle, setToggle] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [heightEl, setHeightEl] = useState()
    const [heightEl2, setHeightEl2] = useState()

    const refHeight = useRef()
    const refHeight2 = useRef()

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])
    useEffect(() => {
        setHeightEl2(`${refHeight2.current.scrollHeight}px`)
    }, [])


    return ( 
        <section className="footer">
            <div className="container">
                <div className="row_footer">
                    <div className="logo_information_gym_footer">
                        <div className="container_logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="information_gym_desctop">
                            <p>© ООО «Терра Нова»</p>
                            <p>ИНН: 6679083248</p>
                            <a href="!#">Пользовательское Соглашение</a>
                        </div>
                    </div>
                    <div className="content_footer">
                        <span></span>
                        <div className="navigation_footer">
                            <div className="headline_bar">
                                <h3 className="headline_content_footer">Навигация</h3>
                                <IoIosArrowForward className={`arrow_footer ${toggle ? "clicked" : "unclicked"}`} onClick={()=> {setToggle(!toggle)}}/>
                            </div>
                            <div 
                                className={toggle ? "navigation_content animated" : "navigation_content"}
                                style={{height: toggle ? `${heightEl}` : "0px"}}
                                ref={refHeight}
                            >
                                <a aria-hidden={toggle ? "true" : "false"} href="#!">О нас</a>
                                <a aria-hidden={toggle ? "true" : "false"} href="#!">Команда</a>
                                <a aria-hidden={toggle ? "true" : "false"} href="#!">Цены</a>
                                <a aria-hidden={toggle ? "true" : "false"} href="#!">Контакты</a>
                            </div>
                        </div>
                        <span></span>
                        <div className="contact_footer">
                            <div className="headline_bar">
                                <h3 className="headline_content_footer">Контакты</h3>
                                <IoIosArrowForward className={`arrow_footer ${toggle2 ? "clicked" : "unclicked"}`} onClick={() => {setToggle2(!toggle2)}}/>
                            </div>
                            <div
                                className={toggle2 ? "contact_content animated" : "contact_content"}
                                style={{height: toggle2 ? `${heightEl2}` : "0px"}}
                                ref={refHeight2}
                            >
                                <p aria-hidden={toggle2 ? "true" : "false"} className="phone_number_footer">+7 351-723-07-00</p>
                                <p aria-hidden={toggle2 ? "true" : "false"}>zlatoust@terranova.ru</p>
                                <a aria-hidden={toggle2 ? "true" : "false"} href="#!">vkontakte</a>
                            </div>
                        </div>
                        <span></span>
                        <div className="information_gym_mobile">
                            <p>© ООО «Терра Нова»</p>
                            <p>ИНН: 6679083248</p>
                            <a href="!#">Пользовательское Соглашение</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Footer;