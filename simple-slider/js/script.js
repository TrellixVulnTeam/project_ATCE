//find elements
const showNextBtn = document.querySelector('#show-next-btn');
const showPrevBtn = document.querySelector('#show-prev-btn');
const slideImg = document.querySelector('#slide-img');

//subscribe to events
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

//create array
const imageUrl = [
  'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1573950940509-d924ee3fd345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
];
let imageUrl_length = imageUrl.length;
let currentImageIndex = 0;
slideImg.src = imageUrl[currentImageIndex];

//function definition
function onShowPrevBtnClick(event) {
  if (currentImageIndex === 0) {
    currentImageIndex = imageUrl.length - 1;
    console.log(currentImageIndex);
  } else {
    currentImageIndex--;
  }
  slideImg.src = imageUrl[currentImageIndex];
}

function onShowNextBtnClick(event) {
  currentImageIndex++;
  if (currentImageIndex === imageUrl.length) {
    currentImageIndex = 0;
  }
  slideImg.src = imageUrl[currentImageIndex];
}

setInterval(onShowNextBtnClick, 5000);

//
//
//
//
//
//
//
