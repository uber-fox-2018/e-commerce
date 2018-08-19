const Category = require ('../models/category')

class categoryController {
  static addCategory (req,res) {
    Category.create({
      name : req.body.name
    })
      .then (createdCategory => {
        res.status(200)
          .json({message : "successfully create new category", data : createdCategory})
      })
      .catch (err => {
        res.status(500)
          .json({message : "failed add category"})
      })
  }
  static removeCategory (req,res) {
    Category.remove({
      _id : req.params.id
    })
    .then(function(category) {
      if (category.n == 0) {
        res.status(201)
          .json({ message: "no category found" })
      } else {
        res.status(200)
          .json({ message: "delete category succeed" })
      }
    })
    .catch(function(err) {
      res.status(500)
        .json({ message: "unable delete category" })
    })
  }
}

module.exports = categoryController