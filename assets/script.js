document.querySelector("#darkmode").addEventListener("click", function () {
  document.getElementsByTagName("body")[0].classList.toggle("dark");
  document.getElementsByClassName("desc")[0].classList.toggle("dark");
});
