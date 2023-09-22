import Header from './components/header/Header';
import Promo from './components/promo/Promo';
import AboutUs from './components/about_us/AboutUs';
import Chain from './components/chain/Chain';
import Coach from './components/coach/Coach';

function App() {
  return (
    <div className="App">
      <Header/>
      <Promo/>
      <AboutUs/>
      <Chain content="Терра Нова"/>
      <Coach/>
      <div style={{ height: '2000px' }}></div> {/* Это для демонстрации прокрутки */}
    </div>
  );
}

export default App;
