const { CardModel } = require("../models/gamedata.model");
const {gamePlateModel} = require("../models/duplication.model")

const getCards = async (req, res) => {
  try {
    const ans = await CardModel.find({});
    if (!ans || ans.length === 0) {
      return res.send("unable to fetch, invalid search term");
    }
    return res.send(ans);
  } catch (e) {
    res.send("unable to fetch");
  }
};

const initiateGame = async (req, res) => {
  try {
    const ans = await gamePlateModel.findById("60916bd27c237f324c8b64fe");
    if (!ans || ans.length === 0) {
      return res.send("unable to fetch, invalid search term");
    }
    return res.send(ans);
  } catch (e) {
    res.send("unable to fetch");
  }
};

const genGameData = async (req, res) => {
  try {
    const ans = await CardModel.find({});
    const newGame = new gamePlateModel({
      gamedata:ans
    })
    newGame.save((err)=>{
      if(err) return res.json({"error":err})
      return res.json({"Success":newGame})
  })
  } catch (e) {
    res.send("unable to fetch");
  }
};

const getCardbyFieldNum =async(req,res)=>{
  try {
    const querry = req.params.fieldNum
    const ans = await CardModel.find({"fieldNum":querry});
    if (!ans || ans.length === 0) {
      return res.send("unable to fetch, invalid search term");
    }
    return res.send(ans);
  } catch (e) {
    res.send("unable to fetch");
  }
}


module.exports = {
  getCards,
  getCardbyFieldNum,
  genGameData,
  initiateGame
};
