let News = require('../models/news.model');

exports.getAllNews = async (req, res)=>{
    try {
        const news = await News.find();
        res.json(news);
    }catch(err){
        res.status(500).json({error : 'Internal Server Error '})
    }
}

exports.getNews = async (req, res)=>{
    try {
        const news = await News.findById(req.params.id);
        if(!news){
            return res.status(404).json({error : 'User not found'});
        }
        res.json(news);
    }catch{
        res.status(500).json({error : 'Internal Server Error '})
    }
}

exports.updateNews = async (req, res)=>{
    try{
        const news = await News.findByIdAndUpdate(req.params.id, req.body,{ new : true });
        if(!news){
            return res.status(404).json({error : 'User not found'});
        }
        res.json(news);
    }catch{
        res.status(500).json({error : 'Internal Server Error '})
    }
}

exports.createNews = async (req, res)=>{
    try{
        const newNews = new News(req.body);
        await newNews.save();
        res.status(201).json(newNews);
    }catch{
        res.status(500).json({error : 'Internal Server Error '})
    }
}

exports.deleteNews = async (req, res)=>{
    try{
        const news = await News.findByIdAndDelete(req.params.id);
        if(!news) return res.status(404).json({error : 'User not found'});
        res.json({message : 'User deleted successfully'});
    }catch{
        res.status(500).json({error : 'Internal Server Error '});
    }
}