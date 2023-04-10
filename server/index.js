import { PineconeClient  } from "@pinecone-database/pinecone";
import express, { query } from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const openaikey = process.env.OPENAIAPIKEY
const pineconekey = process.env.PINECONEAPIKEY

const configuration = new Configuration({
    apiKey: openaikey
});
const openai = new OpenAIApi(configuration);


const pinecone = new PineconeClient();
await pinecone.init({
    environment: "us-east-1-aws",
    apiKey: pineconekey
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
        const total = [];
        for (var i = 0; i < 5; i++) {
            const temp = {
                video: result[i]['metadata']['Video'],
                playlist: result[i]['metadata']['Playlist'],
                start: result[i]['metadata']['Start']
            };
            total.push(temp);
        }
        res.send(total);
        
        
    });
    
});



app.listen(3001, () => {
    console.log("running on port 3001");
    
});





