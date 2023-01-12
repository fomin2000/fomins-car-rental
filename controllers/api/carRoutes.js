const router = require('express').Router();
const { Cars } = require('../../models')


router.get('/', async (req, res) => {
    try {
        const carData = await Cars.findAll({})

        res.status(200).json(carData)
    } catch (err){
        res.status(500).json(err)
    }
})

router.put('/', async (req, res) => {
    try {
        const carData = await Cars.update({
            user_id: req.session.user_id,
        }, {
            where: {
                id: req.body.id
            }
        })
        
        res.status(200).json(carData)
    

    } catch (err) {
        res.status(500).json(err)
    }
})


router.put('/remove', async (req, res) => {
    try {
        const carData = await Cars.update({
            user_id: null,
        }, {
            where: {
                id: req.body.id
            }
        })
        
        res.status(200).json(carData)
    

    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router