const express = require("express");
const { Sequelize } = require("sequelize");
const cors = require("cors");
const models = require("./models");

const app = express();
const port = 5000;
const trickRoutes = require("./routes/trickRoutes");

// Middleware to parse JSON
app.use(express.json());

// Enable CORS for all routes
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Set up the Sequelize connection
const sequelize = new Sequelize(
  "polefolio_db",
  "shanejeon",
  "ChobaniYogurt123!",
  {
    host: "127.0.0.1",
    dialect: "postgres",
  }
);

// Authenticate and Sync the Database
async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connection to POstgreSQL has been established successfully.");

    // Sync models with the database
    await models.Trick.sync({ alter: true });
    console.log("Database schema updated!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

initializeDatabase();
// async function updateSchema() {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");

//     // Sync models with the database
//     await models.Trick.sync({ alter: true });

//     console.log("Database schema updated!");
//   } catch (error) {
//     console.error("Unable to update the database:", error);
//   } finally {
//     await sequelize.close();
//   }
// }

// updateSchema();

// Use the trick routes
// app.use("/api", trickRoutes);

app.get("/", async (req, res) => {
  // res.send("Hello World!");
  try {
    const tricks = await models.Trick.findAll();
    res.json(tricks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Route to add a new trick
app.post("/", async (req, res) => {
  try {
    const { name, contactPoints } = req.body;

    if (!name || contactPoints === undefined) {
      return res
        .status(400)
        .json({ error: "Name and contactPoints are required" });
    }

    const newTrick = await models.Trick.create({
      name,
      contactPoints,
    });

    res.status(201).json(newTrick);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
