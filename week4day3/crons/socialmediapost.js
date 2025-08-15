const cron = require("node-cron");

cron.schedule("* * * * *", () => {
  const message = `Good morning! It's ${new Date().toLocaleString()}`;
  console.log(`Posted to social media: "${message}"`);
});

console.log("Social media cron scheduled.");
