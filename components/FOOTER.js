// FOOTER.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("./components/FOOTER.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    });
});
