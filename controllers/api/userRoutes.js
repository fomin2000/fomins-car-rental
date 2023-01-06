const router = require('express').Router();
const { User } = require('../../models')

router.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body)

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData)
        })



    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router