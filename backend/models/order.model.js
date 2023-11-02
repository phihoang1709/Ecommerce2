const mongoose = require('./mongoose');

const orderSchema = new mongoose.Schema({
    user_id : {type : Number, required : true},
    product_id : {type : Number, required : true},
    amount : {type : Number, required : true},
    ship_price : {type : Number, required : true},
    paid : {type : Boolean, required : true}
},{
    timestamps : true
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;