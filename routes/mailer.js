const express = require('express')
const bodyParser = require('body-parser')
const mailerController = require('../controllers/mailer')

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }))

router.post('/', mailerController.send)

module.exports = router
