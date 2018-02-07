var request = require("request");

var options = { method: 'POST',
  url: 'https://services.yuboto.com/omni/v1/Balance',
  headers: 
   { 'Cache-Control': 'no-cache',
     Authorization: 'Basic {Base64 Encoded API KEY}',
     'Content-Type': 'application/json; charset=utf-8' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
