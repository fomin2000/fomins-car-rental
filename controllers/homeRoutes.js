const { Cars } = require('../models');


const router = require('express').Router();




router.get('/', (req, res) => {

    res.render('homepage')
})



router.get('/cars', async (req, res) => {
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

router.get('/cars/:type', async (req, res) => {
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
    res.render('login')

})

router.get('/register', (req, res) => {
    res.render('register')
})

router.get('/contact', (req, res) => {
    res.render('contact')
})

module.exports = router