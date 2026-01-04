const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// User books a tour
router.post("/book", async (req, res) => {
  try {
    const { userId, tour } = req.body;

    if (!userId || !tour) return res.status(400).json({ error: "Missing data" });

    const booking = new Booking({ user: userId, tour });
    await booking.save();

    res.json({ message: "Booking successful", booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Admin: get all bookings
router.get("/all", async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user", "username email") // user info saath me
      .sort({ date: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
