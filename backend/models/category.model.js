const mongoose = require('./mongoose');

const categorySchema = new mongoose.Schema({
    cate_id : {type : Number, required : true},
    cate_name : {type : String, required : true}
},{
    timestamps : true
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;