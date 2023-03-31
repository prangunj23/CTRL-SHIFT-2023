import { PineconeClient  } from "@pinecone-database/pinecone";
import express, { query } from "express";
import axios from "axios";
const app = express();

const url = 'https://api.openai.com/v1/embeddings';
const apiKey = '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'
const model = 'text-embedding-ada-002';
const pinecone = new PineconeClient();
await pinecone.init({ 
    environment: "us-east-1-aws",
    apiKey: "83767c83-b7d4-4329-ad26-19496aac7ec7",
}); 
 


const darequest = () => {
    const body = {
        "input": "cross-product",
        "model": model,
    };
    axios.post(url, body, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        }
    }).then((res) => {
        const embeddings = res.data['data'][0]['embedding'];
        async () => {
            const index = pinecone.Index("mathsearchengine");
            const queryResponse = await index.query({
                query: {
                    vector: embeddings,
                    topK: 5,
                    includeValues: true,
                },
                namespace: "",
            });
            console.log(queryResponse);
        }
        
    });
};
app.get('/', (req, res) => {
    
    res.send(darequest()); 
});
app.listen(3001, () => {
    console.log(darequest());
});





