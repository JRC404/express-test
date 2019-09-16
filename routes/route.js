// requiring Router module from express
const {Router} = require('express');
const router = Router();
const User = require('../models/user');

router.get('/login', (req, res) => {
    // let resource = '<h1>Hello, Dean.</h1>';
    // // req - data they've sent you... client / browser
    // // res - send information back to the browser
    // // any type of data with res.send() hover for more info
    // // only use res once. Can use in if statement.
    // // ace if statement.
    // // https://www.restapitutorial.com/httpstatuscodes.html
    // if (resource != undefined) {
    //     res.send(resource)
    // }   else {
    //     res.status(404).send('Idiot.');
    // }

    res.render('login', {title: "Express"})

    
});

router.post('/login', (req, res) => {
    let name = req.body.name;
    let password = req.body.password;
    const user = new User({
        name: name,
        password: password
    });
    user.save();
    // always have to send a response back, otherwise it will hang... Jacob, research...
    res.render('login', {name, title: 'express'});
}) 

router.get('/signup', (req, res) => {
    res.render('signup');
})

// router.get('*', (req, res) => {
//     res.redirect('/login')
// })

router.get('/', (req, res) => {
    // the data we are sending over. With a title of express.
    res.render('index', {title: 'Express'});
})



module.exports = router;