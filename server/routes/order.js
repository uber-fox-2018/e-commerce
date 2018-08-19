const express = require('express');
const router = express.Router();
const Order = require('../controllers/oder');

router.post('/addorder', Order.addtToOrder);
router.put('/checkout', Order.checkOutOrder);
router.put('/complete', Order.completeOrder);
router.get('/pending', Order.showPendingOrders);
router.get('/complete', Order.showCompleteOrders);

module.exports = router;