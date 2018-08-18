'use strict'
const express = require('express'),
      router = express.Router(),
      images = require('../helpers/images')
const {uploadProduct, getAllProduct, deleteProduct, editProduct} = require('../controllers/productController')

router.post('/upload',
  images.multer.single('image'), 
  images.sendUploadToGCS,
  (req, res) => {
    res.send({
      status: 200,
      message: 'Your file is successfully uploaded',
      link: req.file.cloudStoragePublicUrl
    })
  })

router.post('/uploadProduct', uploadProduct)
router.get('/', getAllProduct)
router.delete('/delete/:id', deleteProduct)
router.put('/edit/:id', editProduct)


module.exports = router
