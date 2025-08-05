const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

// GET all reviews, optional filtering by tag
router.get("/", async (req, res) => {
  try {
    const { tag } = req.query;
    const filter = tag ? { tags: tag } : {};
    const reviews = await Review.find(filter).sort({ date: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
