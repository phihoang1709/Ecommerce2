const router = require('express').Router();
let ProductController = require('../controller/product.controller');

router.route('/').get(ProductController.getAllProducts);

router.route('/:id').get(ProductController.getProduct);

router.route('/').post(ProductController.createProduct);

router.route('/:id').put(ProductController.updateProduct);

router.route('/:id').delete(ProductController.deleteProduct);


module.exports = router;