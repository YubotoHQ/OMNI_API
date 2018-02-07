var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://services.yuboto.com/omni/v1/Balance");
xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
xhr.setRequestHeader("Authorization", "Basic {Base64 Encoded API KEY}");
xhr.setRequestHeader("Cache-Control", "no-cache");

xhr.send(data);
