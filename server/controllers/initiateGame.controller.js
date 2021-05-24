const { CardModel } = require("../models/gamedata.model");
const { gamePlateModel } = require("../models/duplication.model");
const { PlayerStatusModel } = require("../models/playerStatus.model");

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

const fetchGameLayout = async (req, res) => {
  try {
    const ans = await gamePlateModel.find({});
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
    ans.forEach((value) => {
      const {
        _id,
        fieldNum,
        name,
        price,
        typeOfCard,
        headerColor,
        cardDetails,
        displayImage,
        originalImage,
      } = value;
      const newGameCard = new gamePlateModel({
        fieldNum,
        name,
        price,
        forSale: true,
        isActive: true,
        typeOfCard,
        property: [""],
        headerColor,
        cardDetails,
        displayImage,
        originalImage,
        avatar: "",
      });
      newGameCard.save();
    });
    res.json("saved the new game");
  } catch (e) {
    res.send("unable to fetch");
  }
};

const getCardbyFieldNum = async (req, res) => {
  try {
    const querry = req.params.fieldNum;
    const ans = await CardModel.find({ fieldNum: querry });
    if (!ans || ans.length === 0) {
      return res.send("unable to fetch, invalid search term");
    }
    return res.send(ans);
  } catch (e) {
    res.send("unable to fetch");
  }
};

const genUser = async (req, res) => {
  const name = req.params.name;
  const turn = req.params.turn;
  const avatar = req.body.body.avatar;
  try {
    const User = new PlayerStatusModel({
      name,
      currentLocation: 0,
      playersTurnNumber: turn,
      balance: 1000,
      isActive: true,
      relatedGameId: 1,
      property: [],
      avatar,
    });
    User.save((err) => {
      if (err) return res.json({ error: err });
      return res.json({ Success: User });
    });
  } catch (e) {
    res.json({ error: e });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const relatedGame = req.params.relatedGame;
    const ans = await PlayerStatusModel.find({
      relatedGameId: relatedGame,
      isActive: true,
    });
    if (!ans) {
      return res.send("unable to fetch, invalid search term");
    }
    return res.send(ans);
  } catch (e) {
    res.send("unable to fetch");
  }
};

const delGame = async (req, res) => {
  try {
    await PlayerStatusModel.collection.drop();
    await gamePlateModel.collection.drop();

    if (!ans || ans.length === 0) {
      return res.send("unable to fetch, invalid search term");
    }
    return res.send("sucess,game is deleted");
  } catch (e) {
    res.send("unable to fetch");
  }
};

module.exports = {
  getCards,
  getCardbyFieldNum,
  genGameData,
  fetchGameLayout,
  genUser,
  getAllUsers,
  delGame,
};
