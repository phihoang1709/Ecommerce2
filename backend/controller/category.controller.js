let Category = require('../models/category.model');

exports.getAllCategories = async (req, res)=>{
    try {
        const category = await Category.find();
        res.json(category);
    }catch(err){
        res.status(500).json({error : 'Internal Server Error '})
    }
}

exports.getCategory = async (req, res)=>{
    try {
        const category = await Category.findById(req.params.id);
        if(!category){
            return res.status(404).json({error : 'User not found'});
        }
        res.json(category);
    }catch{
        res.status(500).json({error : 'Internal Server Error '})
    }
}

exports.updateCategory = async (req, res)=>{
    try{
        const category = await Category.findByIdAndUpdate(req.params.id, req.body,{ new : true });
        if(!category){
            return res.status(404).json({error : 'User not found'});
        }
        res.json(category);
    }catch{
        res.status(500).json({error : 'Internal Server Error '})
    }
}

exports.createCategory = async (req, res)=>{
    try{
        const newCategory = new Category(req.body);
        await newCategory.save();
        res.status(201).json(newCategory);
    }catch{
        res.status(500).json({error : 'Internal Server Error '})
    }
}

exports.deleteCategory = async (req, res)=>{
    try{
        const category = await Order.findByIdAndDelete(req.params.id);
        if(!category) return res.status(404).json({error : 'User not found'});
        res.json({message : 'User deleted successfully'});
    }catch{
        res.status(500).json({error : 'Internal Server Error '});
    }
}