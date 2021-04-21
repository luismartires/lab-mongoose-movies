const express = require("express");
const Celebrity = require("../models/Celebrity.model");
const router = express.Router();
const Movie = require("../models/Movie.model")

router.get("/celebrities", async (req, res) => {
  const celebritiesFromDB = await Celebrity.find();
  res.render("celebrities/index", {celebritiesFromDB});
});


router.get("/celebrities/new", async (req, res) => {
  const allMovies = await Movie.find();
  res.render("celebrities/new", {allMovies});
});

router.post("/celebrities/new", async (req, res) => {
  const { name, movie, occupation, catchPhrase } = req.body;
  await Celebrity.create({ name, movie, occupation, catchPhrase });

  res.redirect("/celebrities");
});


router.get("/celebrities/:celebrityId", async (req, res) => {
  const celebrityId = req.params.celebrityId;
  const celebrity = await Celebrity.findById(celebrityId).populate("movie");

  res.render("celebrities/show", { celebrity });
})


router.post("/celebrities/:celebrityId/delete", async (req, res) => {
  const celebrityId = req.params.celebrityId;
  await Celebrity.findByIdAndDelete(celebrityId);

  res.redirect("/celebrities");
})

router.get("/celebrities/:celebrityId/edit", async (req, res) => {
  const celebrityId = req.params.celebrityId;
  console.log(celebrityId)
  const celebrity = await Celebrity.findById(celebrityId).populate("movie");
  
  res.render("celebrities/edit", { celebrity });
})

router.post("/celebrities/:celebrityId/edit", async (req, res) => {
  const celebrityId = req.params.celebrityId;
  const { name, movie, occupation, catchPhrase } = req.body;

  await Celebrity.findByIdAndUpdate(celebrityId, {
    name,
    occupation,
    catchPhrase
  });
  
  res.redirect(`/celebrities/${celebrityId}`);
})

module.exports = router;