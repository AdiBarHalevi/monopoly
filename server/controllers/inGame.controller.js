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

const takeMoneyfromUser = async(req,res)=>{
  const parsedData = JSON.parse(req.body.body)
  console.log(parsedData)
  try {
    const ans = await PlayerStatusModel.findByIdAndUpdate(
      parsedData.userId,
      { $inc: { balance: (parsedData.amount*-1) } },
      { new: true }
    );
    console.log(ans)
    if (!ans || ans.length === 0) {
      return res.send("unable to fetch, invalid search term");
    }
    return res.send(ans);
  } catch (e) {
    res.send("unable to fetch");
  }

}

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

const changeAssetOwnerShip = async (req, res) => {
  const { newOwner, fieldNum } = req.params;
  try {
    const ans = await gamePlateModel.findOneAndUpdate(
      { fieldNum: fieldNum },
      { property: [{ ownedby: newOwner, Assets: "none" }], forSale: false },
      { new: true }
    );
    const getTheUser = await PlayerStatusModel.findOne({
      playersTurnNumber: newOwner,
    });
    const updateProperty = [...getTheUser.property, ans];
    const updateUser = await PlayerStatusModel.findOneAndUpdate(
      { playersTurnNumber: newOwner },
      { property: updateProperty },
      { new: true }
    );

    if (!ans || ans.length === 0) {
      return res.send("unable to fetch, invalid search term");
    }
    return res.json({ success: [updateUser, ans] });
  } catch (e) {
    res.send("unable to fetch");
  }
};

const retirePlayer = async (req, res) => {
  try {
    const ans = await PlayerStatusModel.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
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

const updateTheGameLayout = async(req,res)=>{
  const fieldNum = parseInt(req.params.fieldNum)
  const parsed = JSON.parse(req.body.body)
  console.log(parsed.newLocationData.avatar )

  try {
    const de = await gamePlateModel.findOneAndUpdate(
      { fieldNum:parsed.previousLocation },
      { avatar: ""},
      { new: true }
    );
    const ans = await gamePlateModel.findOneAndUpdate(
      { fieldNum:fieldNum },
      { avatar: parsed.newLocationData.avatar },
      { new: true }
      );
    if (!ans || ans.length === 0) {
      return res.send("unable to fetch, invalid search term");
    }
    return res.send(ans);
  } catch (e) {
    res.send("unable to fetch");
  }

}

const mortgageAnAsset = async (req, res) => {
  const fieldNum = parseInt(req.params.fieldNum)
  try {
    const ans = await gamePlateModel.findOneAndUpdate(
      { fieldNum:fieldNum },
      { isActive: false },
      { new: true }
    );
    console.log(ans)
    if (!ans || ans.length === 0) {
      return res.send("unable to fetch, invalid search term");
    }
    return res.send(ans);
  } catch (e) {
    res.send("unable to fetch");
  }
};

module.exports = {
  finduser,
  changeAssetOwnerShip,
  getPaid,
  retirePlayer,
  mortgageAnAsset,
  takeMoneyfromUser,
  updateTheGameLayout
};
