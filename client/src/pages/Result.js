import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Axios from 'axios';
import Cards from '../components/Cards'; 

const Result = React.memo(() => {

    const location = useLocation();
    const { query } = location.state;
    const [result, setResult] = useState([]);
    const [fetchError, setFetchError] = useState(false);
    const [noResults, setNoResults] = useState(false);

    Axios.post("https://numerify.herokuapp.com/search/", {
        searchResult: query,
    }).then((res) => {
        setFetchError(false);
        setResult(res['data']);
        if(res['data'].length === 0)
            setNoResults(true);
        else
            setNoResults(false);
    }).catch(() => {
        setFetchError(true);
    });
    
    
    return (
        <div className="results-page" style={{ display: 'flex', margin: 'auto', width: '100%', padding: '10px', alignItems: "center", justifyContent: "center"}}>
        {!fetchError && !noResults && result.map((val) => {
            return <Cards Video={val.video} Playlist={val.playlist} Start={val.start} />
        })}
        {!fetchError && noResults && <h3 className="search-error">Sorry, there were no results for that query</h3>}
        {fetchError && <h3 className="search-error">Sorry, it seems the search is down right now. In the meantime, check out the other features our site has to offer!</h3>}
        </div>
    );
});

export default Result;