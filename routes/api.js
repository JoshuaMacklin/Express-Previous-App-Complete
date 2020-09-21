var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  let answer = '';
  if('reversedInput' in req.query){
    let input = req.query.reversedInput.toLowerCase().replace(/\s/g, '') //regular input
    let reversedInput = input.split('').reverse().join(''); //split('') = splits the input into letters
     (input == reversedInput) ? answer = "It's a palindrome" :  answer = 'Not a palindrome';
     if (input == "leon"){
       answer = "Try your full name Mr. Noel"
      }
     }

     res.send(JSON.stringify(answer));
});

module.exports = router;
