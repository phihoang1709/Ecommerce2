const mongoose = require('./mongoose');

const commentSchema = new mongoose.Schema({
    comment_id : {type : String, required : true},
    product_id : {type : String, required : true},
    user_id : {type : String, required : true},
    user_post : {type : String, required : true},
    content : {type : String, required : true},
    sub_comment : {type : String, required : true},
},{
    timestamps : true
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;