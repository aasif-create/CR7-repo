function getCR7() {
  fetch("http://localhost:8080/cr7")
    .then(res => res.text())
    .then(data => document.getElementById("output").innerText = data);
}
