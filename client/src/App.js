import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './pages/pages.css'
import Axios from 'axios';
import About from './pages/About';
import Roadmap from './pages/Roadmap';
import Calculator from './pages/Calculator';
import Navbar from './components/Navbar';
import Cards from './components/Cards';

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
        <Navbar />
        <Routes>
          <Route path='/roadmap' element={<Roadmap />} />
          <Route path='/about' element={<About />} />
          <Route path='/calculator' element={<Calculator />} />
        </Routes>
      </BrowserRouter>
      <h1>Math Search Engine</h1>
      <input type="text" name="searchinput" onChange={(e) => {
        setSearchResult(e.target.value);
      }}/>
      <br></br>
      <button type="submit" onClick={submitSearch}/>
      {result.map((val) => {
        return <Cards Video={val.video} Playlist={val.playlist} Start={val.start}/>
      })};
    </div>
  );
}

export default App;
