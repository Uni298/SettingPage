function request(value) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `
https://script.google.com/macros/s/AKfycbzfU_7TQ0OFA1loB66qQja6pzakj0f6guKJVsDP1-YoVla96rJVE8qy-lPT6_uKDT29Dw/exec?value=${value}
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