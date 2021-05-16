const { CardModel } = require("../models/gamedata.model");
const { gamePlateModel } = require("../models/duplication.model");
const { PlayerStatusModel } = require("../models/playerStatus.model");
const { gameModel } = require("../models/game.model");

const initiateGameUnit = async (req, res) => {
  try {
    const parsed = JSON.parse(req.body.body);
    const users = {};
    let gameSerialNum = await gameModel.find({});
    parsed.users.forEach((user, i) => {
      const User = new PlayerStatusModel({
        name: user,
        currentLocation: 0,
        playersTurnNumber: i,
        balance: 1000,
        isActive: true,
        relatedGameId: 1,
        property: [],
        avatar: parsed.avatars[i],
      });
      users[i] = User;
    });
    const Gameboard = await CardModel.find({});
    const game = new gameModel({
      gameNum: gameSerialNum.length++,
      gameData: Gameboard,
      playersData: users,
    });
    game.save((err) => {
      if (err) return res.json({ error: err });
      return res.json({ serial: game.gameNum });
    });
  } catch (e) {
    res.json({ error: e });
  }
};

const findSpecificGame = async (req, res) => {
  try {
    const ans = await gameModel.findOne({
      gameNum: 1,
    });
    res.send(ans);
  } catch (e) {
    console.log(e);
  }
};

const deployAspecificGame = async (req, res) => {
  try {
    await PlayerStatusModel.collection.drop();
    await gamePlateModel.collection.drop();
    const ans = await gameModel.findOne({ gameNum: 1 });
    // generate the plates collection
    ans.gameData.forEach((value) => {
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
        _id,
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

    Object.values(ans.playersData[0]).forEach((player, i) => {
      const User = new PlayerStatusModel({
        name: player.name,
        currentLocation: 0,
        playersTurnNumber: i++,
        balance: 1000,
        isActive: true,
        relatedGameId: 1,
        property: [],
        avatar: player.avatar,
      });

      User.save();
    });
    res.send("works");
  } catch (e) {
    console.log(e);
  }
};

module.exports = { initiateGameUnit, findSpecificGame, deployAspecificGame };
