const mongoose = require('./mongoose');

const productSchema = new mongoose.Schema({
    cate_id : {type : Number, required : true},
    title : {type : String, required : true},
    price : {type : Number, required : true},
    price_sale : {type : Number, required : true},
    detail : {type : String, required : true},
    image : {type : String, required : true},
    ram : {type : String, required : true},
    cpu : {type : String, required : true},
    rom : {type : String, required : true},
    display_card : {type : String, required : true},
    display : {type : String, required : true},
    camera : {type : String, required : true},
    weight : {type : String, required : true},
    purchase : {type : Number, required : true},
    views : {type : Number, required : true}
    
},{
    timestamps : true
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;