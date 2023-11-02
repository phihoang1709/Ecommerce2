let Comment = require('../models/comment.model');

exports.getAllComments = async (req, res)=>{
    try {
        const comment = await Comment.find();
        res.json(comment);
    }catch(err){
        res.status(500).json({error : 'Internal Server Error '})
    }
}

exports.getComment = async (req, res)=>{
    try {
        const comment = await Comment.findById(req.params.id);
        if(!comment){
            return res.status(404).json({error : 'User not found'});
        }
        res.json(comment);
    }catch{
        res.status(500).json({error : 'Internal Server Error '})
    }
}

exports.updateComment = async (req, res)=>{
    try{
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body,{ new : true });
        if(!comment){
            return res.status(404).json({error : 'User not found'});
        }
        res.json(comment);
    }catch{
        res.status(500).json({error : 'Internal Server Error '})
    }
}

exports.createComment = async (req, res)=>{
    try{
        const newComment = new Comment(req.body);
        await newComment.save();
        res.status(201).json(newComment);
    }catch{
        res.status(500).json({error : 'Internal Server Error '})
    }
}

exports.deleteComment = async (req, res)=>{
    try{
        const comment = await Comment.findByIdAndDelete(req.params.id);
        if(!comment) return res.status(404).json({error : 'User not found'});
        res.json({message : 'User deleted successfully'});
    }catch{
        res.status(500).json({error : 'Internal Server Error '});
    }
}