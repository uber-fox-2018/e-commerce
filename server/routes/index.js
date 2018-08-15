'use strict'
const express = require('express'),
      router = express.Router(),
      images = require('../helpers/images')
const {uploadProduct, getAllProduct} = require('../controllers/productController')

router.get('/', (req, res, next) => {
  res.send({ message: 'Hi, Setia' })
})
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
router.get('/products', getAllProduct)

module.exports = router
