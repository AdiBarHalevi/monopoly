const mongoose = require("mongoose")
const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")
const app = express();
const path = require('path');
app.use(cors());

const uri = "mongodb+srv://adminPass:adminPass@cluster0.irz1b.mongodb.net/Cluster0?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const collection = client.db("cluster0").collection("sample_airbnb");
//     client.close();
//   });

mongoose.connect(uri,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true 
})


const User = mongoose.model('User',{
    name:{
       type:String 
    },
    age:{
        type:Number
    }
})


app.get("/test",async (req,res)=>{
    const ans = await User.find({})
    console.log(ans)
    res.status(200).send(ans)
})


const port = 8000;

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('/*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
app.listen(process.env.PORT || port , () =>{
    console.log(`Server started on port ${port}`)
});






// const app = express();

// app.use(cors())


// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());



// // app.listen(process.env.PORT || 5000, () => {
// //     console.log(`application start at ${process.env.PORT || 5000}`)
// // })

// if (process.env.NODE_ENV === 'production') {
//     // Exprees will serve up production assets
//     app.use(express.static('client/build'));
  
//     // Express serve up index.html file if it doesn't recognize route
//     const path = require('path');
//     app.get('*', (req, res) => {
//       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
//   }
// app.listen(process.env.PORT || port , () =>{
//     console.log(`Server started on port ${port}`)
// });



