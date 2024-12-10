function request(value) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `
https://script.google.com/macros/s/AKfycbwQLYEknPnEu47ls4tyfJxcYZh8y9mUS9CMb1ZXduj1RrL2_jwfk5VXb0mpmfRwOK7oOg/exec?value=${value}
`);
  xhr.send();
  xhr.responseType = "json";
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const data = xhr.response;
      console.log(data);
    } else {
      console.log(`Error: ${xhr.status}`);
    }
  };
}
function send() {
  var val = document.getElementById("val").value;
  request(val);
  alert("SEND!")
}
