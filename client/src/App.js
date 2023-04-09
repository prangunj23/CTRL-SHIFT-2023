import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Axios from 'axios';
import About from './pages/About';
import Roadmap from './pages/Roadmap';
import Other from './pages/Other';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import './App.css';

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
          <Route path='/other' element={<Other />} />
        </Routes>
      </BrowserRouter>
      <input type="text" name="searchinput" onChange={(e) => {
        setSearchResult(e.target.value);
      }}/>
      <br></br>
      <button type="submit" onClick={submitSearch}/>
      {result.map((val) => {
        return <h1>{val.video}</h1>
      })}
    </div>
  );
}

export default App;
