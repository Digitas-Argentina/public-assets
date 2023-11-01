class DigitasSDK {
  post(url, data) {
    console.log("digitasSDK.post");
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        var jsonRes = JSON.parse(xhr.responseText);
        console.log(jsonRes);
      }
    };
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(data));
  }

  getUserAgent() {
    console.log("digitasSDK.getUserAgent");
    return navigator.userAgent;
  }

  test() {
    console.log("digitasSDK.test");
    return "test";
  }
}

window.digitasSDK = new DigitasSDK();
