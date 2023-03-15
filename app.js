const renkDe = document.querySelector(".kutu");
console.log(renkDe);
renkDe.style.renkDe ="red"

renkDe.addEventListener("mousemove", () => {
  const randomrenkDe = "#" + Math.floor(Math.random() * 16777215).toString(16);
  renkDe.style.backgroundrenkDe = randomrenkDe;
  console.log(randomrenkDe);
});




