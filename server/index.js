import { PineconeClient  } from "@pinecone-database/pinecone";
import express, { query } from "express";
import bodyParser from "body-parser";
import cors from 'cors';

import { Configuration, OpenAIApi } from "openai";
const app = express();

const configuration = new Configuration({
    apiKey: "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"
});
const openai = new OpenAIApi(configuration);


const pinecone = new PineconeClient();
await pinecone.init({
    environment: "us-east-1-aws",
    apiKey: "83767c83-b7d4-4329-ad26-19496aac7ec7"
});
const index = pinecone.Index("mathsearchengine"); 

async function darequest(thestring) {
    const response = await openai.createEmbedding({
        model: "text-embedding-ada-002",
        input: thestring,
    });
    
    const embedding = response['data']['data'][0]['embedding'];
    const queryRequest = {
        vector: embedding,
        topK: 5,
        includeValues: true,
        includeMetadata: true,
        namespace: "",
    }
     
    const queryResponse = await index.query({ queryRequest });
    
    return queryResponse['matches'];
    
};


app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/search', (req, res) => {
    const searchquery = req.body.searchResult;
    darequest(searchquery).then((result) => {
        const videos = [];
        const playlists = [];
        const starttimes = [];
        for (var i = 0; i < 5; i++) {
            videos.push(result[i]['metadata']['Video']);
            playlists.push(result[i]['metadata']['Playlist']);
            starttimes.push(result[i]['metadata']['Start']);
        }
        const total = [videos, playlists, starttimes];
        res.send(total);
        
    });
    
});



app.listen(3001, () => {
    console.log("running on port 3001");
    
});





