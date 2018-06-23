const Mailgun = require('mailgun-js')

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY
const DOMAIN_NAME = 'greenyoga.com.au'

const mailgun = new Mailgun({
  apiKey: MAILGUN_API_KEY,
  domain: DOMAIN_NAME
})

const send = (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) return res.status(400).send({ status: 'error', response: 'All \'name\', \'email\' and \'message\' must be present.' })

  const mailData = {
    to: 'namaste@greenyoga.com.au',
    from: email,
    subject: `Green Yoga Contact Form - ${name}`,
    html: `
      <b>From: </b>${name} (${email})<br />
      <b>Message: </b>${message}`
  }

  mailgun.messages().send(mailData)
    .then(response => res.status(200).send({ status: 'success', response }))
    .catch(err => res.status(err.statusCode).send({ status: 'error', response: err.message }))
}

module.exports = {
  send
}
