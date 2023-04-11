import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Axios from 'axios';
import Cards from '../components/Cards'; 

const Result = React.memo(() => {

    const location = useLocation();
    const { query } = location.state;
    const [result, setResult] = useState([]);

    Axios.post("https://numerify.herokuapp.com/search/", {
        searchResult: query,
    }).then((res) => {
        setResult(res['data']);
    });
    
    
    return (
        <div style={{ display: 'flex', margin: 'auto', width: '100%', padding: '10px'}}>
        {result.map((val) => {
            return <Cards Video={val.video} Playlist={val.playlist} Start={val.start} />
        })}
        </div>
    );
});

export default Result;