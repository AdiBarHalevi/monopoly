const {CardModel} = require("../models/gamedata.model")

const getCards = async(req,res)=>{
    try{
        const ans = await CardModel.find({})
        if(!ans||ans.length===0){
            return res.send("unable to fetch, invalid search term")
        }
        return res.send(ans)


    }catch(e){res.send("unable to fetch")}
    
}

const postCard = async(req,res)=>{
    const {name,price,headerColor,cardDetails,fieldNUm} = req.body
    
    try{
        const card = new CardModel({
            fieldNUm,
            name,
            price,
            headerColor,
            cardDetails,
        })
        console.log(card)
        card.save((err)=>{
            if(err) return res.json({"error":err})
            return res.json({"Success":card})
        })
    }catch(e){
        res.json({"error":e})
    }  
}

module.exports={
    getCards,
    postCard
}