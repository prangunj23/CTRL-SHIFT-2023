import { PineconeClient  } from "@pinecone-database/pinecone";
import express from "express";

const app = express()

const pinecone = new PineconeClient();
    await pinecone.init({ 
        environment: "us-east-1-aws",
        apiKey: "83767c83-b7d4-4329-ad26-19496aac7ec7",
}); 
const index = pinecone.Index("example-index");
const queryRequest = await index.fetch({
    vector: [0],
    topK: 5,
    includeValues: true,
    includeMetadata: true,
});
const queryRespone = await index.query({ queryRequest });
const Description = await pinecone.describeIndex({
    indexName: "mathsearchengine"
}); 


app.listen(3001, () => {
    console.log(queryRespone);
});





