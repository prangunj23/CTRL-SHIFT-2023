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
pinecone.projectName = "numerify";
await pinecone.init({
    environment: "us-east-1-aws",
    apiKey: pineconekey,
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

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://fastidious-piroshki-956d78.netlify.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
  

app.post('/search/', (req, res) => {
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


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`running on port ${port}`);
    
});





