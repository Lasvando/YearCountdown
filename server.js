//IMPORT
const express = require('express');
const morgan = require('morgan');

//App
const app = express();

//View Engine
app.set('view engine', 'ejs');

//Serving static file
app.use(express.static('public'))

//Logging Middleware
app.use(morgan('common'));

//Port
const port = process.env.PORT || 3000;

//Route Import
const indexRoute = require('./routes/indexRoute.js');

//Route Declaration
app.use('/', indexRoute);

//Page not Found Middleware
app.use('/', (req, res, next) => {
    res.status(404).render('pageNotFound');
})

//Server run
app.listen(port, console.log(`Server is listening on port ${port}\nhttp://localhost:${port}`));
