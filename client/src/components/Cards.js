import React from 'react';
//import Card from 'react-bootstrap/Card';

function Cards(props) {

    const imgurl = `https://img.youtube.com/vi/${props.Video}/hqdefault.jpg`
    const youtubevideourl = `https://www.youtube.com/watch?v=${props.Video}&list=${props.Playlist}&t=${props.Start}s`    
    return (
        <div className="card">
        <img src={imgurl} alt="Title" className="card-img-top" />
        <div className="card-body">
          <a href={youtubevideourl} className="btn btn-primary">Learn more</a>
        </div>
      </div>
    );
}

export default Cards;