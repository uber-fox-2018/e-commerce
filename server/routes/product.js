const express = require('express');
const router = express.Router();
const Product = require('../controllers/product');
const { userAuth } = require('../middlewares/auth');
const images = require('../helpers/images');

router.post('/add', userAuth, images.multer.single('image'),images.sendUploadToGCS, Product.addProduct);
router.put('/edit', userAuth, Product.editProduct);
router.delete('/delete', userAuth, Product.deleteProduct);
router.get('/searchall', userAuth, Product.searchAllProduct);
router.get('/searchcategory', userAuth, Product.searchByCategory);
router.get('/getall', userAuth, Product.getAllProduct);
router.get('/getcategory', userAuth, Product.getByCategory);
router.get('/filterprice', userAuth, Product.filterByPrice);

module.exports = router;