function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const currentPage = window.location.pathname;
const jsonPath = currentPage.includes("index.html")
  ? "content1.json"
  : currentPage.includes("lines.html")
  ? "content2.json"
  : null;

if (jsonPath) {
  fetch(jsonPath)
    .then((response) => response.json())
    .then((data) => {
      const randomIndex = rand(0, data.length - 1);
      const selected = data[randomIndex];
      document.getElementById("mainText").textContent = selected.text;
      document.getElementById("author").textContent = selected.author;
      document.getElementById("recommender").textContent =
        "by " + selected.source;
      document.getElementById("reason").textContent = selected.comment;
    })
    .catch((error) => {
      console.error("JSON 로드 실패:", error);
    });
}

document.getElementById("syncButn").addEventListener("click", function () {
  location.reload();
});
