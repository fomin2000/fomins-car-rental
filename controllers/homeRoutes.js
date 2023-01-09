const { Cars } = require('../models');
const authenticate = require('../utils/authenticate');


const router = require('express').Router();




router.get('/', (req, res) => {

    res.render('homepage', {
        logged_in: req.session.logged_in
    })
})



router.get('/cars', authenticate, async (req, res) => {
    try {
        const carData = await Cars.findAll()

        const cars = carData.map((car) => car.get({ plain: true}))

        res.render('cars', {
            cars
        })

    } catch (err) {
        res.status(500).json(err);
    }


})

router.get('/cars/:type', authenticate, async (req, res) => {
    try{
        const carTypes = await Cars.findAll({ where: { type: req.params.type}})
        
        const cars = carTypes.map((car) => car.get({ plain: true}))

        res.render('cars', {
            cars
        })
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/login', (req, res) => {
    console.log(req.session.destination)
    if (req.session.logged_in) {
        res.redirect('/')
    }

    res.render('login')

})

router.get('/register', (req, res) => {
    res.render('register')
})

router.get('/contact', (req, res) => {
    res.render('contact')
})

module.exports = router