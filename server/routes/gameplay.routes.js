const express = require("express");
const router = express.Router();
const initiateGame = require("../controllers/initiateGame.controller");
const inGame = require("../controllers/inGame.controller")
const app = express()

router
// routes that use to Initiate the game
  .get("/gameCards", async (req, res) => {
    initiateGame.getCards(req, res);
  })

  .post("/gameCards",(req,res)=>{
    initiateGame.genGameData(req,res)
  })

  .get("/gameplay", async (req, res) => {
    initiateGame.initiateGame(req, res);
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
  .put("/gameCards/:gameId", async (req, res) => {
    inGame.getCards(req, res);
  })
  


module.exports = router;
