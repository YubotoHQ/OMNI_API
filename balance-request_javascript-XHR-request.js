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
xhr.setRequestHeader("Authorization", "Basic QUZCNUY3RjQtNkZBNS00QTcxLTkxRjktNjBBNDg1RDQ3QTk2");
xhr.setRequestHeader("Cache-Control", "no-cache");

xhr.send(data);