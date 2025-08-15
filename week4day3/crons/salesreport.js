const cron = require("node-cron");

cron.schedule("* * * * *", () => {
  const sales = Math.floor(Math.random() * 1000) + 100;
  console.log(`Sales report generated at ${new Date().toLocaleString()}: Total sales = $${sales}`);
});

console.log("Sales report cron scheduled.");
