import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './pages/pages.css';
import About from './pages/About';
import Roadmap from './pages/Roadmap';
import Calculator from './pages/Calculator';
import Navbar from './components/Navbar';
import Result from './pages/Result';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [searchResult, setSearchResult] = useState('');
  
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar text={searchResult} setResult={setSearchResult}/>
        <Routes>
          <Route path='/roadmap' element={<Roadmap />} />
          <Route path='/about' element={<About />} />
          <Route path='/result' element={<Result text={searchResult} />} />
          <Route path='/calculator' element={<Calculator />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
