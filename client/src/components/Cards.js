import React, { useState } from 'react';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import './css/Card.css';
function Cards(props) {

    const [imgurl, setImgUrl] = useState('');
    const [channelName, setChannelName] = useState('');
    const [videoName, setVideoName] = useState('');

    const url = `https://www.googleapis.com/youtube/v3/videos?id=${props.Video}&key=AIzaSyD8QMnKWOe9nEPr7XkEGxjM8ANo3oZX4_c&part=snippet`
    
    Axios.get(url).then((res) => {
      setImgUrl(res['data']['items'][0]['snippet']['thumbnails']['maxres']['url']);
      setChannelName(res['data']['items'][0]['snippet']['channelTitle']);
      setVideoName(res['data']['items'][0]['snippet']['title']);
    }) 

    
    const youtubevideourl = `https://www.youtube.com/watch?v=${props.Video}&list=${props.Playlist}&t=${props.Start}s`    
    return (
      
        <Card class='card' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imgurl}/>
          <Card.Body>
            <Card.Title>{channelName}</Card.Title>
            <Card.Text>{videoName}</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href={youtubevideourl}>Visit</Card.Link>
          </Card.Body>
        </Card>
        
        
    );
}

export default Cards;