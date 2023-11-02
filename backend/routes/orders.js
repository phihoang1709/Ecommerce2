const router = require('express').Router();
let OrderController = require('../controller/order.controller');

router.route('/').get(OrderController.getAllOrders);

router.route('/:id').get(OrderController.getOrder);

router.route('/').post(OrderController.createOrder);

router.route('/:id').put(OrderController.updateOrder);

router.route('/:id').delete(OrderController.deleteOrder);


module.exports = router;