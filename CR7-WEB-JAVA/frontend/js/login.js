function login() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  fetch(`http://localhost:8080/login?user=${u}&pass=${p}`)
    .then(res => res.text())
    .then(data => document.getElementById("result").innerText = data);
}
