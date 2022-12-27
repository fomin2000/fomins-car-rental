const router = require('express').Router();




router.get('/', (req, res) => {
    res.render('homepage')
})



router.get('/cars', (req, res) => {
    res.render('cars')
})

router.get('/login', (req, res) => {
    res.render('login')
})


module.exports = router