document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Signup successful! Welcome!");
});

document.querySelector("button").addEventListener("click", function() {
  document.body.style.backgroundColor = "#ffe6b3";
});
