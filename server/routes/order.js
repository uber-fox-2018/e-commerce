const express = require('express');
const router = express.Router();
const Order = require('../controllers/order');
const { userAuth } = require('../middlewares/auth')

router.post('/', userAuth, Order.addtToOrder);
router.put('/remove', userAuth, Order.removeProduct);
router.delete('/:id', userAuth, Order.deleteOrder);
router.put('/checkout', userAuth, Order.checkOutOrder);
router.put('/complete', userAuth, Order.completeOrder);
router.get('/open', userAuth, Order.showOpenOrders);
router.get('/pending', userAuth, Order.showPendingOrders);
router.get('/complete', userAuth, Order.showCompleteOrders);

module.exports = router;