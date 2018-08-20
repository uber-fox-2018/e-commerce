
const Item = require("../models/Item");

module.exports = {
  listItems(req, res) {
    Item.find()
      .then(found => {
        res.status(200).json({ msg: "all items ", found });
      })
      .catch(err => {
        res.status(500).json({ msg: "err", err });
      });
  },

  createItem: function(req, res) {
    const { title, category, quantity, price, image } = req.body;
    Item.create({
      title,
      category,
      quantity,
      price,
      image
    })
      .then(task => {
        res.status(200).json({
          msg: "Adding Items",
          task
        });
      })
      .catch(err => {
        res.status(500).json({
          msg: err.message
        });
      });
  },
  editItem(req, res) {
    let objectId = mongoose.Types.ObjectId;
    const { title, category, quantity, price, image } = req.body;
    Item.update(
      { _id: objectId(req.params.id) },
      {
        $set: {
          title,
          category,
          quantity,
          price,
          image
        }
      }
    )
      .then(item => {
        res
          .status(200)
          .json({ msg: `Item id = ${req.params.id} edited`, item });
      })
      .catch(err => {
        res.status(500).json({ msg: "err", err });
      });
  },

  deleteItem(req, res) {
    Item.deleteOne({ _id: req.params.id })
      .then(found => {
        console.log(found);

        res.status(200).json({ msg: `item id = ${req.params.id} deleted` });
      })
      .catch(err => {
        res.status(500).json({ msg: "err", err });
      });
  }
};
