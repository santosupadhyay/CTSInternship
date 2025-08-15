const cron = require('node-cron');
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.SENDING_EMAIL,
        pass:process.env.PASSWORD_SENDING_MAIL
    }
})

const mailOptions = {
    from:process.env.SENDING_EMAIL,
    to:"tankawasthi4u@gmail.com",
    subject:"Testing mail from nodemailer using cron",
    html: "<h1>Hello!</h1><p>This email was sent using <b>Node.js cron jobs, to Tank</b></p>"
}

cron.schedule("*/2 * * * *", ()=>{
    console.log(`sending scheduled email at ${new Date().toLocaleString()}`);
    transporter.sendMail(mailOptions, (error, info)=>{
        if (error) {
      return console.log("Error sending email:", error);
    }
    console.log("Email sent:", info.response);
    })
})
console.log("Email scheduler is running...");