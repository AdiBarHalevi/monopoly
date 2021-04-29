const {MongoClient,ObjectID} = require("mongodb")

const connectionURL = "mongodb://127.0.0.1:27017"
const dataBaseName = "task-manager"

MongoClient.connect(connectionURL,{userNewUrlParser:true},(error,client)=>{
    if(error){return console.log("unable to connect to db")
}
    const db = client.db(dataBaseName)
})