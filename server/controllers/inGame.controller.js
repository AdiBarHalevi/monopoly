const { gamePlateModel } = require("../models/duplication.model");
const { PlayerStatusModel } = require("../models/playerStatus.model");

const finduser = async (req, res) => {
  try {
    let parsed = JSON.parse(req.body.body);
    const { _id, currentLocation, isActive, balance } = parsed;
    const ans = await PlayerStatusModel.findByIdAndUpdate(
      _id,
      { currentLocation, balance },
      { new: true }
    );
    if (!ans || ans.length === 0) {
      return res.send("unable to fetch, invalid search term");
    }
    return res.send(ans);
  } catch (e) {
    res.send("unable to fetch");
  }
};

const getPaid = async (req, res) => {
  let parsed = JSON.parse(req.body.body);
  try {
    const ans = await PlayerStatusModel.findByIdAndUpdate(
      parsed.payTo,
      { $inc: { balance: parsed.amount } },
      { new: true }
    );
    if (!ans || ans.length === 0) {
      return res.send("unable to fetch, invalid search term");
    }
    return res.send(ans);
  } catch (e) {
    res.send("unable to fetch");
  }
};

// const buyAsset =async (req, res) =>{
//     console.log(req.params.fieldNum)
//     try {
//         const ans = await gamePlateModel.findByIdAndUpdate(req.params.gameId);
//         const finalAns = ans.gamedata.find((item)=>{return item.fieldNum === parseInt(req.params.fieldNum)})
//         if (!ans || ans.length === 0) {
//         return res.send("unable to fetch, invalid search term");
//         }
//         return res.send(finalAns);
//     } catch (e) {
//         res.send("unable to fetch");
//     }
//     res.send("in here")
// }

const buyAsset = async (req, res) => {
  console.log(req.params.fieldNum);
  try {
    // const ans = await gamePlateModel.findById(req.params.gameId).findOne({"fieldNum":"5"});
    const ans = await gamePlateModel.find({ gamedata: 0 });
    console.log(ans);
    if (!ans || ans.length === 0) {
      return res.send("unable to fetch, invalid search term");
    }
    return res.send(ans);
  } catch (e) {
    res.send("unable to fetch");
  }
  res.send("in here");
};

module.exports = {
  finduser,
  buyAsset,
  getPaid,
};
