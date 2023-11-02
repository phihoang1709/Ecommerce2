let Product = require('../models/product.model');

exports.getAllProducts = async (req, res)=>{
    try {
        const products = await Product.find();
        res.json(products);
    }catch(err){
        res.status(500).json({error : 'Internal Server Error '})
    }
}

exports.getProduct = async (req, res)=>{
    try {
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({error : 'User not found'});
        }
        res.json(product);
    }catch{
        res.status(500).json({error : 'Internal Server Error '})
    }
}

exports.updateProduct = async (req, res)=>{
    try{
        const product = await Product.findByIdAndUpdate(req.params.id, req.body,{ new : true });
        if(!product){
            return res.status(404).json({error : 'User not found'});
        }
        res.json(product);
    }catch{
        res.status(500).json({error : 'Internal Server Error '})
    }
}

exports.createProduct = async (req, res)=>{
    try{
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    }catch{
        res.status(500).json({error : 'Internal Server Error '})
    }
}

exports.deleteProduct = async (req, res)=>{
    try{
        const product = await Product.findByIdAndDelete(req.params.id);
        if(!product) return res.status(404).json({error : 'User not found'});
        res.json({message : 'User deleted successfully'});
    }catch{
        res.status(500).json({error : 'Internal Server Error '});
    }
}