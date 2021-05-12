const express = require("express");
const router = express.Router();
const initiateGame = require("../controllers/initiateGame.controller");
const inGame = require("../controllers/inGame.controller");
const app = express();

router
  // routes that use to Initiate the game

  // gets card from the origianl collection
  .get("/gameCards", async (req, res) => {
    initiateGame.getCards(req, res);
  })

  .post("/gameCards", (req, res) => {
    initiateGame.genGameData(req, res);
  })

  .get("/gameplay", async (req, res) => {
    initiateGame.fetchGameLayout(req, res);
  })

  .put("/gameCards/:fieldNum", async (req, res) => {
    initiateGame.getCardbyFieldNum(req, res);
  })

  .post("/genUser/:name/:turn", async (req, res) => {
    initiateGame.genUser(req, res);
  })
  .get("/users/getAll/:relatedGame", async (req, res) => {
    initiateGame.getAllUsers(req, res);
  })

  // routes that use to play the game.
  .put("/users/update", async (req, res) => {
    inGame.finduser(req, res);
  })

  .put("/users/getPaid", async (req, res) => {
    inGame.getPaid(req, res);
  })

  .put("/gameCards/changeOwnerShip/:fieldNum/:newOwner", async (req, res) => {
    inGame.changeAssetOwnerShip(req, res);
  })

  .put("/gameCards/mortgageAnAsset/:fieldNum/:userId/:mortgageValue", async (req, res) => {
    inGame.mortgageAnAsset(req, res);
  })

  .put("/users/retirePlayer/:id", async (req, res) => {
    inGame.retirePlayer(req, res);
  })

  .put("/users/reduceMoney", async (req, res) => {
    inGame.takeMoneyfromUser(req, res);
  })

  .delete("/deleteGame", async (req, res) => {
    initiateGame.delGame(req, res);
  })

  .put("/gameCards/updateLayout/:fieldNum", async (req, res) => {
    inGame.updateTheGameLayout(req, res);
  })
  .put("/buyhouse" , async (req, res) => {
    inGame.buyHouse(req, res);
  });

module.exports = router;
