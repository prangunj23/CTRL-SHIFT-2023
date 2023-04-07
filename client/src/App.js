import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';
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
