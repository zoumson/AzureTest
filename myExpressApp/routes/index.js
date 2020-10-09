var express = require('express');
var router = express.Router();
var firstTestObject = require('./Objects/FirstTestObject');

/* GET home page. */
router.get('/', (req, res) => {
  /* Fetch the ReverseString method and feed it with the inputReverseString data
     Send the reverse string as the http response 
  */
  res.send(
    firstTestObject.methods.ReverseString(
      firstTestObject.data.inputReverseString
    )
  );
});

module.exports = router;
