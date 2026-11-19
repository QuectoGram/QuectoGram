document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("img, small, h1, a");
  elements.forEach((el) => {
    el.style.display = "block";
    el.style.textAlign = "center";
    el.style.marginLeft = "auto";
    el.style.marginRight = "auto";
  });
});
