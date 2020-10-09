var express = require('express');
var router = express.Router();
var firstTestObject = require('./Objects/FirstTestObject');

/* GET home page. */
router.get('/', (req, res) => {
  //Fetch the ReverseString method and feed it with input string from URL
  res.send(
    'Add a string extension to the URL to see its corresponding reverse form'
  );
});
/* URL for taking input string from user */
router.get('/:str', (req, res) => {
  //Fetch the ReverseString method and feed it with input string from URL
  res.send(firstTestObject.methods.ReverseString(req.params.str));
});

module.exports = router;
