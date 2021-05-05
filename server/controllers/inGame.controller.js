const {gamePlateModel} = require("../models/duplication.model")
const {PlayerStatusModel} = require("../models/playerStatus.model")


const finduser = async (req, res) => {
    let parsed = JSON.parse(req.body.body)
    const {_id,currentLocation,isActive,balance} = parsed 
    try {
        const ans = await PlayerStatusModel.findByIdAndUpdate(_id,{currentLocation,balance},{new:true});
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

};
