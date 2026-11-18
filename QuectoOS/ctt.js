document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("h1, a, small");
  elements.forEach((el) => {
    el.style.display = "block";
    el.style.textAlign = "center";
  });
});
