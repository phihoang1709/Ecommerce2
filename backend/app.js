const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products')
const commentsRouter = require('./routes/comments')
const ordersRouter = require('./routes/orders')
const newsRouter = require('./routes/news')
const categoriesRouter = require('./routes/categories')
const app = express();


app.use(bodyParser.json());
app.use(cors());

app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/comments', commentsRouter);
app.use('/orders', ordersRouter);
app.use('/news', newsRouter);
app.use('/categories', categoriesRouter);



app.listen(5000, ()=>{console.log("Listen from port 5000")});