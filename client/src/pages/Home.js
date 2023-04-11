import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return(
        <div className="home-page">
            {/*<div style={{"width": "fit-content"}}><h1 className="home-heading">Welcome to Numerify</h1></div>*/}
            <div className="home-heading"><Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('Welcome to Numerify').start()}}/></div>
            <h3 className="home-subheading">Search for a math concept to find videos with specific timestamps explaining the 
            topic or click through the other pages to see what else we have to offer</h3>
            <h3 className="home-github-message">View the code at <a href='https://github.com/prangunj23/CTRL-SHIFT-2023'>github.com/prangunj23/CTRL-SHIFT-2023</a></h3>
        </div>
    )
}

export default Home;