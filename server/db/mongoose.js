const mongoose = require("mongoose")
const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const bodyParser = require('body-parser');


const uri = "mongodb+srv://adminPass:adminPass@cluster0.irz1b.mongodb.net/Cluster0?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("cluster0").collection("sample_airbnb");
    client.close();
  });


mongoose.connect(uri,{
    useNewUrlParser:true,
    useCreateIndex:true
})


const app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(process.env.PORT || 5000, () => {
    console.log(`application start at ${process.env.PORT || 5000}`)
})



const User = mongoose.model('User',{
    name:{
       type:String 
    },
    age:{
        type:Number
    }
})


app.get("/",async (req,res)=>{
    const ans = await User.find({})
    res.send({"works":ans})
})