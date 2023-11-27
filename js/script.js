const carousel = document.getElementById('carousel');
const thumbnails = document.getElementById('thumbnails');
const btnUp = document.getElementById('pic_up');
const btnDown = document.getElementById('pic_down');
const btnPlay = document.getElementById('play');
const btnReverse = document.getElementById('reverse');
let update;
let play = true;
let showDirection = true;

const images = [
  {
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];

let activeIndex = 0;
images.forEach((element) => {
  let carou_card =
    `
  <div class="carousel-card">
  <img src="${element.image}" alt="${element.title}">
    <div class="caption">
      <h1>${element.title}</h1>
      <p>${element.text}</p>
    </div>
  </div>
  `;

  let thumb_card =
    `
  <div class="thumbnails-card">
    <img src="${element.image}" alt="${element.title}">
  </div>
  `;

  carousel.innerHTML += carou_card;
  thumbnails.innerHTML += thumb_card;
});

const carouselCard = document.querySelectorAll('.carousel-card');
const thumbnailsCard = document.querySelectorAll('.thumbnails-card');
carouselCard[activeIndex].classList.add('active');
thumbnailsCard[activeIndex].classList.add('select');



btnPlay.addEventListener('click', () => {
  if (play) {
    play = false;
    clearInterval(update);
    btnPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    play = true;
    btnPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
    refresh(showDirection);
  }
})

btnReverse.addEventListener('click', () => {
  play = false;
  clearInterval(update);
  if (showDirection) {
    showDirection = false;
    play = true;
    refresh(showDirection);
    btnReverse.innerHTML = '<i class="fa-solid fa-backward"></i>';
  } else {
    showDirection = true;
    play = true;
    refresh(showDirection);
    btnReverse.innerHTML = '<i class="fa-solid fa-backward fa-rotate-180"></i>';
  }
})

btnDown.addEventListener('click', function () {
  carouselCard[activeIndex].classList.remove('active');
  thumbnailsCard[activeIndex].classList.remove('select');
  activeIndex = activeIndex + 1;
  if (activeIndex == carouselCard.length) {
    activeIndex = 0;
  }
  thumbnailsCard[activeIndex].classList.add('select');
  carouselCard[activeIndex].classList.add('active');
});

btnUp.addEventListener('click', function () {
  carouselCard[activeIndex].classList.remove('active');
  thumbnailsCard[activeIndex].classList.remove('select');
  activeIndex = activeIndex - 1;
  if (activeIndex < 0) {
    activeIndex = carouselCard.length - 1;
  }
  carouselCard[activeIndex].classList.add('active');
  thumbnailsCard[activeIndex].classList.add('select');
});

function refresh(showDirection){
  update = setInterval(() => {
    if (play) {
      carouselCard[activeIndex].classList.remove('active');
      thumbnailsCard[activeIndex].classList.remove('select');
      if (showDirection) {
        activeIndex = activeIndex + 1;
        if (activeIndex == carouselCard.length) {
          activeIndex = 0;
        }
      } else {
        activeIndex = activeIndex - 1;
        if (activeIndex < 0) {
          activeIndex = carouselCard.length - 1;
        }
      }
      thumbnailsCard[activeIndex].classList.add('select');
      carouselCard[activeIndex].classList.add('active');
    }
  }, 3000);
}