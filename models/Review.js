const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  reviewerName: String,
  rating: Number,
  reviewText: String,
  date: Date,
  tags: [String],
  source: String
});

module.exports = mongoose.model("Review", ReviewSchema);
