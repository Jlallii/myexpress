var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get ('/example',function(request,response)
{
  response.send("Hello");
  console.log("I am example");
});

router.get ('/example/:name',function(request,response)
{
  response.send("Hello "+request.params.name);
  console.log("I am example");
});

router.get ('/example2/:firstName/:lastName',function(request,response)
{
  response.send("Hello"+request.params.firstName+" "+request.params.lastName);
  console.log("I am example");
});
router.post('/',function(request,response)
{
  response.send(request.body);
});
module.exports = router;
