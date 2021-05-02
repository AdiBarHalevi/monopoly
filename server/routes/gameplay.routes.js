const express = require("express")
const router = express.Router()
const cardController = require("../controllers/gameplay.controller")

router
.get("/gameCards", async (req, res) => {
    cardController.getCards(req,res)
  })
.post("/gameCards", async (req, res) => {
    cardController.postCard(req,res)
  })




module.exports = router;
