const sequelize = require("./app");
const models = require("./models");

async function recreateSchema() {
  await sequelize.authenticate();
  await sequelize.sync({ force: true });
  console.log("Database schema recreated!");
}

recreateSchema().then(() => sequelize.close());
