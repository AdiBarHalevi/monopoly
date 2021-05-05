const postCard = async (req, res) => {
  const {
    name,
    price,
    headerColor,
    cardDetails,
    fieldNum,
    displayImage,
    originalImage,
  } = req.body;

  try {
    const card = new CardModel({
      fieldNum,
      name,
      price,
      headerColor,
      cardDetails,
      displayImage,
      originalImage,
    });
    console.log(card);
    card.save((err) => {
      if (err) return res.json({ error: err });
      return res.json({ Success: card });
    });
  } catch (e) {
    res.json({ error: e });
  }
};

post("/gameCards", async (req, res) => {
  cardController.postCard(req, res);
});
