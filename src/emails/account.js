const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'andreweyesman@gmail.com',
        subject: 'Thanks for signing up!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'andreweyesman@gmail.com',
        subject: 'Account canceled',
        text: `We're sorry to see you go ${name}, please let us know why you canceled your account.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
