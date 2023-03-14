const color = document.querySelector(".renk");
console.log(color);

color.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  color.style.backgroundColor = randomColor;
  console.log(randomColor);
});
