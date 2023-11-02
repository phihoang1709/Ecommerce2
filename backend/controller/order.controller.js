let Order = require('../models/order.model');

exports.getAllOrders = async (req, res)=>{
    try {
        const order = await Order.find();
        res.json(order);
    }catch(err){
        res.status(500).json({error : 'Internal Server Error '})
    }
}

exports.getOrder = async (req, res)=>{
    try {
        const order = await Order.findById(req.params.id);
        if(!order){
            return res.status(404).json({error : 'User not found'});
        }
        res.json(order);
    }catch{
        res.status(500).json({error : 'Internal Server Error '})
    }
}

exports.updateOrder = async (req, res)=>{
    try{
        const order = await Order.findByIdAndUpdate(req.params.id, req.body,{ new : true });
        if(!order){
            return res.status(404).json({error : 'User not found'});
        }
        res.json(order);
    }catch{
        res.status(500).json({error : 'Internal Server Error '})
    }
}

exports.createOrder = async (req, res)=>{
    try{
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.status(201).json(newOrder);
    }catch{
        res.status(500).json({error : 'Internal Server Error '})
    }
}

exports.deleteOrder = async (req, res)=>{
    try{
        const order = await Order.findByIdAndDelete(req.params.id);
        if(!order) return res.status(404).json({error : 'User not found'});
        res.json({message : 'User deleted successfully'});
    }catch{
        res.status(500).json({error : 'Internal Server Error '});
    }
}