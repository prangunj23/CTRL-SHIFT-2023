import { PineconeClient  } from "@pinecone-database/pinecone";
import express, { query } from "express";
//import axios from "axios";
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
 

const response = await openai.createEmbedding({
    model: "text-embedding-ada-002",
    input: "Cross Product",
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


const darequest = () => {
    
    return queryResponse['matches'][0]['metadata']['Channel'];
    
};
app.get('/', (req, res) => {
    
    res.send(darequest()); 
    console.log(darequest);
});
app.listen(3001, () => {
    
    console.log(darequest());
});





