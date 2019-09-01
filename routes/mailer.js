const express = require('express')
const bodyParser = require('body-parser')
const mailerController = require('../controllers/mailer')

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }))

router.post('/', mailerController.contactForm('namaste@greenyoga.com.au', 'Green Yoga'))
router.post('/maum', mailerController.contactForm('hello@maumyoga.com', 'Maum Yoga'))

module.exports = router
