const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.model");

const DB_NAME = 'starter-code';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebrities = [
  {name: "Tom Hardy", occupation: "Actor", catchPhrase: "Yes"},
  {name: "Tom Bardy", occupation: "Musician", catchPhrase: "No"},
  {name: "Tom Vardy", occupation: "Writer", catchPhrase: "Maybe"}
];

Celebrity.create(celebrities)
.then(celebritiesFromDB => {
  console.log(`Created ${celebritiesFromDB.length} celebrities`);
})
.catch(err => console.log(`An error occured while creating celebrities from the DB: ${err}`));