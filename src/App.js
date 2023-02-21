import './App.css';
// import {Routes , Route} from 'react-router-dom'
import {Routes , Route} from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Onesection from './Components/Onesection/Onesection';
import Card from './Components/Card/Card';
import Box from './Components/Box/Box';
import Main from './Components/Main/Main';
function App() {
  return (
    <div className="App">
        <div className='container'>
        <Header/>
        <Routes>
          <Route path='/Onesection' element={<Onesection/>} />
          <Route path='/Card' element={<Card />} />
          <Route path='/Box' element={<Box />} />
          <Route path='/Main' element={<Main />} />
        </Routes>
        <Footer/>
        </div>
    </div>
  );
}

export default App;
