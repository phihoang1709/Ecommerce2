const mongoose = require('./mongoose');

const newsSchema = new mongoose.Schema({
    cate_id : {type : Number, required : true},
    user_id : {type : Number, required : true},
    news_title : {type : String, required : true},
    news_content : {type : String, required : true},
    news_image : {type : String, required : true},
},{
    timestamps : true
});

const News = mongoose.model('News', newsSchema);
module.exports = News;