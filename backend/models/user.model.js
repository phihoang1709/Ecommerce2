const mongoose = require('./mongoose');

const userSchema = new mongoose.Schema({
    user_id : {type : Number, required : true},
    username : {type : String, required : true},
    password : {type : String, required : true},
    name : {type : String, required : true},
    email : {type : String, required : true},
    phone : {type : String, required : true},
    user_img : {type : String, required : true},
    isAdmin : {type : String, required : true},
},{
    timestamps : true
});

const User = mongoose.model('User', userSchema);
module.exports = User;