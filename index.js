// requires
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const router = express.Router();

// Init App
const app = express();

// Middleware
// body parser -  application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// body parse - application/json
app.use(bodyParser.json());

// Init Router
app.use(router);


const movies = [
  {
    id: 1,
    title: "Jurassic Park",
    genre: "Adventure",
    description: "Mutant dinosaurs go wild."
  },
  {
    id: 2,
    title: "Terminator 2",
    genre: "Action",
    description: "AI Robots go wild."
  }
];

app.get('/', (req, res) => {
  res.send('<h1>Express API Homepage</h1>');
});



// ROUTES -----------------------------------------------

// Movies Routes -----------------------------------------
router.get('/api/movies', function(req, res){
  res.json(movies);
});




app.listen(PORT, function(){
  console.log(`Server started on port ${PORT}`);
});
