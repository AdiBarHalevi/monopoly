const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;

const uri =
  "mongodb+srv://adminPass:adminPass@cluster0.irz1b.mongodb.net/Cluster0?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  const collection = client.db("cluster0").collection("cards");
  client.close();
});

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
