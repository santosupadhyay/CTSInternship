const cron = require('node-cron');
const nodemailer = require('nodemailer');
require('dotenv').config();

// const transporter = nodemailer.createTransport({
//     service:'gmail',
//     auth:{
//         user:process.env.SENDING_EMAIL,
//         pass:process.env.PASSWORD_SENDING_MAIL
//     }
// })

// const mailOptions = {
//     from:process.env.SENDING_EMAIL,
//     to:"tankawasthi4u@gmail.com",
//     subject:"Testing mail from nodemailer using cron",
//     html: "<h1>Hello!</h1><p>This email was sent using <b>Node.js cron jobs, to Tank</b></p>"
// }

// cron.schedule("*/2 * * * *", ()=>{
//     console.log(`sending scheduled email at ${new Date().toLocaleString()}`);
//     transporter.sendMail(mailOptions, (error, info)=>{
//         if (error) {
//       return console.log("Error sending email:", error);
//     }
//     console.log("Email sent:", info.response);
//     })
// })
// console.log("Email scheduler is running...");

// for batch processing


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SENDING_EMAIL,
        pass: process.env.PASSWORD_SENDING_MAIL
    }
});

let users = [
    "aashwinpant25@gmail.com",
    "dasarathayer007@gmail.com",
    "tankawasthi4u@gmail.com",
    "joshibishal6@gmail.com",
];

const BATCH_SIZE = 2;

cron.schedule("*/1 * * * *", () => {
    if (users.length === 0) {
        console.log("All emails sent!");
        return;
    }

    const batch = users.splice(0, BATCH_SIZE);

    batch.forEach(email => {
        const mailOptions = {
            from: "process.env.SENDING_EMAIL",
            to: email,
            subject: "Batch Email Demo",
            text: `Hello ${email}! This is a test batch email sent at ${new Date().toLocaleString()}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(`Error sending to ${email}:`, error.message);
            } else {
                console.log(`Email sent to ${email}: ${info.response}`);
            }
        });
    });

    console.log(`Batch sent at ${new Date().toLocaleString()} | Remaining: ${users.length}`);
});
