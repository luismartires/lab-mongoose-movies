const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const movieSchema = new Schema ({ 
  name: String,
  genre: String,
  plot: String,
});

module.exports = model("Movie", movieSchema);