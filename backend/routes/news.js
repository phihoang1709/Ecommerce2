const router = require('express').Router();
let NewsController = require('../controller/news.controller');

router.route('/').get(NewsController.getAllNews);

router.route('/:id').get(NewsController.getNews);

router.route('/').post(NewsController.createNews);

router.route('/:id').put(NewsController.updateNews);

router.route('/:id').delete(NewsController.deleteNews);


module.exports = router;