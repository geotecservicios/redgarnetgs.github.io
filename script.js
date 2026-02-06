const hero = document.querySelector(".hero");

const images = [
  "img/hero-dron.jpg",
  "img/hero-embalse.jpg",
  "img/hero-valvula.jpg"
];

let index = 0;

function changeHero() {
  hero.style.backgroundImage = `url(${images[index]})`;
  index = (index + 1) % images.length;
}

changeHero();
setInterval(changeHero, 5000);
