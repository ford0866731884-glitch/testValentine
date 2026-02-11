const flowerContainer = document.querySelector(".flower-container");
const flowers = ["🌸", "🌺", "🌼", "💮"];
const crossContainer = document.querySelector(".cross-container");

function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");

  flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];

  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = 5 + Math.random() * 5 + "s";
  flower.style.opacity = Math.random();

  flowerContainer.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 10000);
}


setInterval(createFlower, 400);


function createCross() {
  const cross = document.createElement("div");
  cross.classList.add("cross");
  cross.innerText = "❌";

  cross.style.left = Math.random() * 100 + "vw";
  cross.style.animationDuration = 4 + Math.random() * 4 + "s";
  cross.style.fontSize = 16 + Math.random() * 16 + "px";
  cross.style.opacity = Math.random();

  crossContainer.appendChild(cross);

  setTimeout(() => {
    cross.remove();
  }, 9000);
}


setInterval(createCross, 500);