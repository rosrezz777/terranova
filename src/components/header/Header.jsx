import logo from './../../img/icons/Logo.svg'
import logo_mobile from './../../img/icons/Logo_mobile.svg'
import './header.css'
import React, {useState} from 'react'

function Header() {

    const [open, setOpen] = useState(false);


        return(
        <header className='header'>
            <div className="container">
                <div className="header_row">
                    <div className="header_logo">
                        <img src={logo} alt="Logo" className="logo"/>
                        <img src={logo_mobile} alt="Logo" className="logo_mobile" />
                     </div>
                    <div className={`header_nav ${open ? "active" : "inactive"}`}>
                        <a href="#!">О нас</a>
                        <a href="#!">Команда</a>
                        <a href="#!">Цены</a>
                        <a href="#!">Контакты</a>
                    </div>
                    <div className={`menu_btn ${open ? "clicked" : "unclicked"}`} onClick={()=>{setOpen(!open)}}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>  
        </header>
    )
}

export default Header