const { Cars, User } = require('../models');
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
});

// router.get('/cars/:id')
router.put('/cars/:id', authenticate, async (req, res) => {
    console.log("Car ID: ", req.params.id);

    // make a request to our DB for the Car with ID of xxx
    try {
       // const updatedData = await Cars.findByIdAndUpdate(req.params.id, { is_rented: true });
        const carData = await Cars.findByPk(req.params.id);
        const currentCar = carData.get({ plain: true });
       // console.log(updatedData);
        console.log(currentCar);
        
        // update the is_rented field 
        currentCar.is_rented = true;
        console.log("*******");
        console.log(currentCar);
        // then save the record to the DB
        await currentCar.save()  // .catch(error => console.log(error));

        res.status(200).json(currentCar);
    } catch (error) {
        console.log(error);
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