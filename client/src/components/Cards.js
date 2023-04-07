import React from 'react';
import Card from 'react-bootstrap/Card';
function Cards(props) {

    const imgurl = `https://img.youtube.com/vi/${props.Video}/hqdefault.jpg`
    const youtubevideourl = `https://www.youtube.com/watch?v=${props.Video}&list=${props.Playlist}&t=${props.Start}s`    
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgurl} />
            <Card.Body>
                <Card.Link href={youtubevideourl}>Here's a Link to the Video</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default Cards;