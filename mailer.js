require("dotenv").config()
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

const mailOptions = {
    form: 'otabekjon0302@gmail.com',
    to: 'kailynnolan0302@gmail.com',
    subject: 'Test Node Mailer',
    text: 'This is a test essage for testing nodemailer',
}

transporter.sendMail(mailOptions, err => {
    console.log(err);
})