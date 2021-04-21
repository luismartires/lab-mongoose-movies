const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

router.get("/movies/new", (req, res) => {
  res.render("movies/new");
});

router.post("/movies/new", async (req, res) => {
  const { name, genre, plot } = req.body;

  await Movie.create({
    name, 
    genre,
    plot
  });

  res.redirect("/");
});


module.exports = router;