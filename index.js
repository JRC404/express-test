// either app.js or index.js - preferrence to call it index.js
// config file for express
// npm init -y
// -y is yes, thanks Dean.

// npm i express - because we are using express
// body-parses - allows us to access form data
// express-handlebars - allows us to use handlebars - templating
// path - join paths, doesn't have to identify the path. It allows us to join paths.
const hbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

const express = require('express');
// initialise express by calling it like a function. Allowing us to use epxress. Remember to hover over express.
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/signup', {
    useNewUrlParser: true
});

const router = require('./routes/route');

// config - capital letters. 
// either use the port enviornment OR if it's local, it's 3000.
// two ways...
// const PORT = process.env.PORT || 3000;

// this is preffered.
const {PORT = 3000} = process.env;

// express needs a view enginge... pain in the arse. 
// look into specific hbs documentation - objects inside hbs function
app.engine('.hbs', hbs({defaultLayout: 'layout', extname: '.hbs'}))

// why do we have to set up .hbs?
app.set('view engine', '.hbs');

// multiple app.use
app.use(express.static(path.join(__dirname, 'public')));

// bodyParser - urlencoded - read about it. body-parser
// app.use is a uniqute method for express... look into that.
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use('/', router);




// last thing in the file...
// waiting for something to happen. Waiting on PORT.
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});

