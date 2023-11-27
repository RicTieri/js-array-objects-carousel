const carousel = document.getElementById('carousel');
const thumbnails = document.getElementById('thumbnails');
const btnUp = document.getElementById('pic_up');
const btnDown = document.getElementById('pic_down');
let activeIndex = 0;

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

images.forEach((element)=>{
  imgEl = document.createElement('img');
  imgEl.src = element.image;
  carousel.appendChild(imgEl);
});

const carouselImage = document.querySelectorAll('#carousel img');
carouselImage[activeIndex].classList.add('active');

btnDown.addEventListener('click', function(){
  carouselImage[activeIndex].classList.remove('active');
  activeIndex = activeIndex + 1;
  if(activeIndex == carouselImage.length){
    activeIndex = 0;
  }
  carouselImage[activeIndex].classList.add('active');
});

btnUp.addEventListener('click', function(){
  carouselImage[activeIndex].classList.remove('active');
  activeIndex = activeIndex - 1;
  if(activeIndex < 0){
    activeIndex = carouselImage.length -1;
  }
  carouselImage[activeIndex].classList.add('active');
});
