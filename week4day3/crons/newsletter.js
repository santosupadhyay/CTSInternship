const cron = require('node-cron');

cron.schedule(" * * * * *", ()=>{
    console.log(`newsletter sent to all the subscribers at ${new Date().toString()}`);
})

console.log(`newsletter cron scheduled`)