import { MongoClient } from "mongodb";

const uri = "mongodb+srv://kaicex:TentekBa1a123@kaizencluster.lh59q.mongodb.net/kaizenDatabase?retryWrites=true&w=majority&appName=KaizenCluster";

async function testConnection() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log("Connected to MongoDB successfully!");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err.message);
    } finally {
        await client.close();
    }
}

testConnection().catch(console.error);