class DigitasSDK {
  post(url, data) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(data));
  }

  test() {
    console.log("test");
    return "test";
  }
}

window.digitasSDK = new DigitasSDK();
