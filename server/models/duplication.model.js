const mongoose = require("mongoose");

const gamePlateSchema = new mongoose.Schema({
  gamedata:{
    type:Object,
    required:true
  }
});

const gamePlateModel = mongoose.model("gamePlate", gamePlateSchema);

module.exports = { gamePlateModel };