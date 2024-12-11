function request(value) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `
 https://script.google.com/macros/s/AKfycbxUaeBlS0GxvjdsIjmpvErlPbBsd--d_6Szef9iFsago2l_ecPCnINzw7B-pniuWuyLIg/exec?value=${value}
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
  request(val.replace(/\n/g,"^"));
  alert("SEND!")
}
