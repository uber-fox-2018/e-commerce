const express = require('express');
const router = express.Router();
const Product = require('../controllers/product');
const { userAuth } = require('../middlewares/auth');
const images = require('../helpers/images');

router.post('/', userAuth, images.multer.single('image'),images.sendUploadToGCS, Product.addProduct);
router.put('/:id', userAuth, Product.editProduct);
router.delete('/:id', userAuth, Product.deleteProduct);
router.get('/searchall', userAuth, Product.searchAllProduct);
router.get('/searchcategory', userAuth, Product.searchByCategory);
router.get('/getall', userAuth, Product.getAllProduct);
router.get('/getcategory', userAuth, Product.getByCategory);
router.get('/filterprice', userAuth, Product.filterByPrice);

module.exports = router;