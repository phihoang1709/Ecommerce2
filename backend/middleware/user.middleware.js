const jwt = require('jsonwebtoken');
let User = require('../models/user.model');

const authMiddleware = async (req, res, next) => {
    try {
      const token = req.header('Authorization');
  
      if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
  
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      const user = await User.findById(decoded.userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      req.user = user;
  
      next();
    } catch (error) {
      res.status(401).json({ error: 'Unauthorized' });
    }
  };
  
  module.exports = authMiddleware;