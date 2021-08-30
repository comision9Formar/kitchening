const express = require('express');
const app = express();
const path = require('path');
const port = 3030;
const methodOverride = require('method-override');

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');

app.use(express.static('public'));

app.use(methodOverride('_method'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/',indexRouter);
app.use('/products',productsRouter);


app.listen(port, () => console.log('Server running in port ' + port))