import Header from './components/header/Header';
import Promo from './components/promo/Promo';
import AboutUs from './components/about_us/AboutUs';
import Chain from './components/chain/Chain';
import Coach from './components/coach/Coach';
import Membershpip from './components/membership/Membership';
import ContactUs from './components/contact_us/ContactUs';
import ContactInfo from './components/contact_info/ContactInfo';
import Footer from './components/footer/Footer';
import ModalHours from './components/hours/ModalHours';

function App() {
  return (
    <div className="App">
      <Header/>
      <Promo/>
      <AboutUs/>
      <Chain content="Терра Нова"/>
      <Coach/>
      <Membershpip/>
      <ContactUs/>
      <Chain content="Терра Нова"/>
      <ContactInfo/>
      <Footer/>
      {/* <div style={{ height: '2000px' }}></div> Это для демонстрации прокрутки */}
    </div>
  );
}

export default App;
