const express = require('express');
const router = express.Router();
const Product = require('../controllers/product');
const { userAuth } = require('../middlewares/auth');
const images = require('../helpers/images');

router.post('/', userAuth, images.multer.single('image'),images.sendUploadToGCS, Product.addProduct);
router.put('/:id', userAuth, Product.editProduct);
router.delete('/:id', userAuth, Product.deleteProduct);
router.get('/searchall', Product.searchAllProduct);
router.get('/searchcategory', Product.searchByCategory);
router.get('/getall', Product.getAllProduct);
router.get('/getcategory', Product.getByCategory);
router.get('/filterprice', Product.filterByPrice);

module.exports = router;