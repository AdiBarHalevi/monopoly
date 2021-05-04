const express = require("express");
const router = express.Router();
const cardController = require("../controllers/gameplay.controller");

router
  .get("/gameCards", async (req, res) => {
    cardController.getCards(req, res);
  })
  .post("/gameCards",(req,res)=>{
    console.log("in here")
    cardController.genGameData(req,res)
  })

  .put("/gameCards/:fieldNum", async (req, res) => {
    cardController.getCardbyFieldNum(req, res);
  })
  .get("/gameplay", async (req, res) => {
    cardController.initiateGame(req, res);
  })
  


module.exports = router;
