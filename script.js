function request(value) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `
https://script.google.com/macros/s/AKfycbxuJiR2-miW6ePgjZZhfxPZHd4XH8WpGuMSf-yICv6E1nDtAt629UvEQ9kBimyxmSMPQw/exec?value=${value}
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
