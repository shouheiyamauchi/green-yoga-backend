const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const mailerRoutes = require('./routes/mailer')

const app = express()
app.use(cors())
app.use(helmet())
app.use('/mailer', mailerRoutes)

module.exports = app
