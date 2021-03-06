const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  fieldNum: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  typeOfCard: {
    type: String,
  },
  headerColor: {
    type: String,
  },
  displayImage: {
    type: String,
  },
  originalImage: {
    type: String,
  },
  cardDetails: {
    rent: {
      type: Number,
    },
    rentWithColorSet: {
      type: Number,
    },
    rentWith1house: {
      type: Number,
    },
    rentWith2house: {
      type: Number,
    },
    rentWith3house: {
      type: Number,
    },
    rentWith4house: {
      type: Number,
    },
    rentWithHotel: {
      type: Number,
    },
    hotelCost: {
      type: Number,
    },
    houseCost: {
      type: Number,
    },
  },
});

const CardModel = mongoose.model("Card", CardSchema);

module.exports = { CardModel };
