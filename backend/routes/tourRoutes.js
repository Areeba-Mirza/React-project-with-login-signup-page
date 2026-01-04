const express = require("express");
const router = express.Router();
const Tour = require("../models/Tour");

// Get all tours
router.get("/", async (req, res) => {
  const tours = await Tour.find();
  res.send(tours);
});

// Add new tour (optional)
router.post("/", async (req, res) => {
  const tour = new Tour(req.body);
  await tour.save();
  res.status(201).send(tour);
});

module.exports = router;
