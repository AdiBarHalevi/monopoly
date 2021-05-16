const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  gameNum: {
    type: Number,
    require: true,
    unique: true,
  },
  gameData: {
    type: Array,
  },
  playersData: {
    type: Array,
  },
});

const gameModel = mongoose.model("Game", gameSchema);

module.exports = { gameModel };
