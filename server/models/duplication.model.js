const mongoose = require("mongoose");

const gamePlateSchema = new mongoose.Schema({
  fieldNum: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  property:{
    type:Array
  },
  price: {
    type: Number,
  },
  type: {
    type: String,
  },
  forSale: {
    type: Boolean,
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

const gamePlateModel = mongoose.model("gamePlate", gamePlateSchema);

module.exports = { gamePlateModel };
