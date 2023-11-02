const router = require('express').Router();
let CommentController = require('../controller/comment.controller');

router.route('/').get(CommentController.getAllComments);

router.route('/:id').get(CommentController.getComment);

router.route('/').post(CommentController.createComment);

router.route('/:id').put(CommentController.updateComment);

router.route('/:id').delete(CommentController.deleteComment);


module.exports = router;