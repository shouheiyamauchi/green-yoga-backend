const Mailgun = require('mailgun-js')

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY
const DOMAIN_NAME = 'greenyoga.com.au'

const mailgun = new Mailgun({
  apiKey: MAILGUN_API_KEY,
  domain: DOMAIN_NAME
})

const send = (req, res) => {
  console.log(req.body)
  const { from, message } = req.body

  const mailData = {
    to: 'namaste@greenyoga.com.au',
    from,
    subject: 'Green Yoga Contact Form',
    html: `
      <b>From: </b>${from}<br />
      <b>Message: </b>${message}`
  }

  mailgun.messages().send(mailData)
    .then(response => res.status(200).send({ status: 'success', response }))
    .catch(err => res.status(err.statusCode).send({ status: 'error', response: err.message }))
}

module.exports = {
  send
}
