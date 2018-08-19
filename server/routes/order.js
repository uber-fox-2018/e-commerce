const express = require('express');
const router = express.Router();
const Order = require('../controllers/order');
const { userAuth } = require('../middlewares/auth')

router.post('/add', userAuth, Order.addtToOrder);
router.put('/checkout', userAuth, Order.checkOutOrder);
router.put('/complete', userAuth, Order.completeOrder);
router.get('/pending', userAuth, Order.showPendingOrders);
router.get('/complete', userAuth, Order.showCompleteOrders);

module.exports = router;