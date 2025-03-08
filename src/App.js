import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import merakiimg from './merakiimg.jpg';
import zoom from './zoom.webp';
import Page from './Page'; 
import Page1 from './Page1'; 
import Page2 from './Page2'; 
import './App.css';
import './Style.css';
import './Styles.css';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Page" element={<Page />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />

      </Routes>
    </Router>
  );
}

function Home() {
  const Navigate=useNavigate();
  const handlein = () => {
Navigate('/Page');

  };
  return (
    
    <div>
      <img src={merakiimg} alt="Meraki" />
      <div>
        <p className='head'>CAREER GUIDANCE</p>
        <button className='in' onClick={handlein}>LET ME IN</button>
      </div>
    </div>
  );
}

export default App;
