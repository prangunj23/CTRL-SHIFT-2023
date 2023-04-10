import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './pages/pages.css';
import Axios from 'axios';
import About from './pages/About';
import Roadmap from './pages/Roadmap';
import Calculator from './pages/Calculator';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/css/roadmap.css';

function App() {

  const [searchResult, setSearchResult] = useState('');
  const [result, setResult] = useState([]);


  const submitSearch = () => {
      Axios.post("http://localhost:3001/search", {
        searchResult: searchResult,
      }).then((res) => {
        
        setResult(res['data']);

      })
  }

  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar text={setSearchResult} submitSearch={submitSearch}/>
        <Routes>
          <Route path='/roadmap' element={<Roadmap />} />
          <Route path='/about' element={<About />} />
          <Route path='/calculator' element={<Calculator />} />
        </Routes>
      </BrowserRouter>
      <div style={{ display: 'flex', margin: 'auto', width: '100%', padding: '10px'}}>
      {result.map((val) => {
        
          return <Cards Video={val.video} Playlist={val.playlist} Start={val.start} />
        
      })}
      </div>
    </div>
  );
}

export default App;
