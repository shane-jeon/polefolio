const express = require("express");
const router = express.Router();
const db = require("../models");

// get all tricks
router.get("/", async (req, res) => {
  try {
    const tricks = await db.Trick.findAll();
    res.json(tricks);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// add new trick
router.post("/", async (req, res) => {
  try {
    const { name, contactPoints } = req.body;
    const newTrick = await models.Trick.create({ name, contactPoints });
    res.status(201).json(newTrick);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
