import logo from './../../img/icons/Logo_m.svg'
import './header.css'

function Header() {
    return(
        <header className='header'>
            <div className="header_bg">
                <div className="container">
                    <div className="header_row">
                        <div className="header_logo">
                            <img src={logo} alt="Logo" />
                        </div>
                        <div className="header_nav">
                            <ul>
                                <li><a href="#!">О нас</a></li>
                                <li><a href="#!">Команда</a></li>
                                <li><a href="#!">Цены</a></li>
                                <li><a href="#!">Контакты</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>  
        </header>
    )
}

export default Header