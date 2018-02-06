<?php

$request = new HttpRequest();
$request->setUrl('https://services.yuboto.com/omni/v1/Balance');
$request->setMethod(HTTP_METH_POST);

$request->setHeaders(array(
  'Cache-Control' => 'no-cache',
  'Authorization' => 'Basic {Base64 Encoded API KEY}',
  'Content-Type' => 'application/json; charset=utf-8'
));

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}
?>
