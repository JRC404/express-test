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
    let email = req.body.email
    let password = req.body.password;


    
    
    // always have to send a response back, otherwise it will hang... Jacob, research...
    // res.render('login', {name, title: 'express'});
}) 

router.get('/about', (req, res) => {
    res.render('about', {title: "About the creator"})
})

router.get('/signup', (req, res) => {
    res.render('signup');
})

router.post('/signup', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({email}, function(err, user) {
        if(err) {
            console.log('Error.')
        }

        if (user)
        {
            let err = new Error('A user with that email has already registered. ${email}')
            err.status = 400;
            console.log(err)
            res.render('signup', {errorMessage: 'A user with that email has already registered.'})
            return;
            // Research error of 'Cannot set headers after they are sent to the client.' 
        }
        // else {
        //     res.render('login', {name, title: 'express'});
        // }
        // res.render('login', {name, title: 'express'});
    })
    

    const user = new User({
        name: name,
        email: email, 
        password: password
    });
    user.save();
    
    // res.render('./login', {name, title: 'express'});
})


// router.get('*', (req, res) => {
//     res.redirect('/login')
// })

router.get('/', (req, res) => {
    // the data we are sending over. With a title of express.
    res.render('index', {title: 'Express', subtitle: 'Social Platform'});
})



module.exports = router;