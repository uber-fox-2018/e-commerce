const Item = require("../models/item");
const User = require("../models/user");

module.exports = {
	getItems: (req, res) => {
		const {by, value} = req.query
		if(by === undefined){
			Item.find()
				.then(items=>{
					res.status(200).json({
						items
					})
				})
		}else{
			Item.find({ [by]: { $regex: new RegExp(`${value}`) } })
			.then(items=>{
				res.status(200).json({
					items
				})
			})
			.catch(err=>{
				console.log(err)
			})
		}
		
		
	},

	newItem: (req, res) => {
		console.log("masuk!")
		Item.create( req.body )
		.then(newItem => {
			console.log("masuk lagi!")
			console.log(newItem)
			res.status(200).json({
				newItem
			})
			
		})
		.catch(err=>{
			console.log(" gamasuk!")
			console.log( err)
		})
	},

	getItem: (req, res) => {

		Item.findOne({ _id: req.params.id })
			.then(item=>{
				res.status(200).json({
					item
				})
			})
	},

	updateItem: (req, res) => {
		Item.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
			.then(item => {
				res.status(200).json(item);
			})
			.catch(err => {
				res.status(500).json(err);
			});
	},

	deleteItem: (req, res) => {
		Item.remove({ _id: req.params.id })
			.then(()=>{
				res.status(200).json({
					msg: "success"
				})
			})
			.catch(err => {
				res.status(500).json(err);
			});
	}
};
