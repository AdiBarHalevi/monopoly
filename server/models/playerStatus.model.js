const mongoose = require("mongoose");

const PlayerStatusSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  currentLocation: {
    type: Number,
    required: true,
  },
  playersTurnNumber: {
    type: Number,
    unique: true,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  relatedGameId: {
    type: Number,
    required: true,
  },
});

const PlayerStatusModel = mongoose.model("Player", PlayerStatusSchema);

module.exports = { PlayerStatusModel };
