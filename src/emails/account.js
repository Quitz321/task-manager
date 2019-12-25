const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'quitz321@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how are you getting along with the app.`
    })
}

const sendCancelMail = (email, name) => {
    sgMail.send({
        to: email,
        fm: 'quitz321@gmail.com',
        subject: 'Sad to see you go',
        text: `Goodbye  ${name}, send us feedback why you left our app.`
    })
}

module.exports = {
    sendWelcomeMail,
    sendCancelMail
}