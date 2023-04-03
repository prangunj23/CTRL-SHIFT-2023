import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
function App() {

  const [searchResult, setSearchResult] = useState('');
  const [videos, setVideos] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [starttimes, setStartTimes] = useState([]);

  useEffect(() => {
    
  })

  const submitSearch = () => {
    
    Axios.post("http://localhost:3001/search", {
      searchResult: searchResult,
    }).then((res) => {
      console.log(res);
      setVideos(res.data[0]);
      setPlaylists(res.data[1]);
      setStartTimes(res.data[2]);

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
      {videos.map((val) => {
        return <h1>{val}</h1>
      })}
    </div>
  );
}

export default App;
