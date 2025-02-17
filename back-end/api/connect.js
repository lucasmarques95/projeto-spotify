import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://lucasmarques:9748@cluster.fhzuz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster";

const client = new MongoClient(URI);

export const db = client.db("projectSpotify");
