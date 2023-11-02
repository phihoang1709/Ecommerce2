const router = require('express').Router();
let CategoryController = require('../controller/category.controller');

router.route('/').get(CategoryController.getAllCategories);

router.route('/:id').get(CategoryController.getCategory);

router.route('/').post(CategoryController.createCategory);

router.route('/:id').put(CategoryController.updateCategory);

router.route('/:id').delete(CategoryController.deleteCategory);


module.exports = router;