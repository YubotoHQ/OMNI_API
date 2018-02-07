var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://services.yuboto.com/omni/v1/Balance",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json; charset=utf-8",
    "Authorization": "Basic {Base64 Encoded API KEY}",
    "Cache-Control": "no-cache",
    "Postman-Token": "e4785b45-7f9a-c0a2-b000-83445a54b355"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
