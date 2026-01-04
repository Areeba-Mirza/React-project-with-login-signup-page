const mongoose = require("mongoose");

const TourSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
});

module.exports = mongoose.model("Tour", TourSchema);
