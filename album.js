const navbarSticky = document.querySelector('.stiky-menu');
const pauseIcon = document.querySelector('.pause-icon-album');
const playIcon = document.querySelector('.play-icon-middle');

const olList = document.querySelector('ol');
// const olListI = document.querySelectorAll('ol span div li i ');

//////////////////////////////////////////////////////////////
////////////// PlayIcon in the music list
/////////////////////////////////////////////////////////////

olList.addEventListener('mouseover', function (e) {
  e.stopPropagation();
  const elementsClick = e.target.querySelector('.ab');

  if (elementsClick) elementsClick.classList.remove('d-none');

  // console.log(elementsClick);
});

olList.addEventListener('mouseout', function (e) {
  e.stopPropagation();
  const elementsLeave = e.target.querySelector('.ab');

  if (elementsLeave) elementsLeave.classList.add('d-none');
});

//////////////////////////////////////////////////////////
////////////////Sticky Menu in the Album Page
//////////////////////////////////////////////////////////

const sectionAlbum = document.querySelector('.section-icons-album');

const initialCoords = sectionAlbum.getBoundingClientRect();

// console.log(initialCoords.top + 10);

window.addEventListener('scroll', function () {
  // console.log(window.scrollY);

  if (window.scrollY > initialCoords.top)
    navbarSticky.classList.remove('d-none');
  else navbarSticky.classList.add('d-none');
});

//////////////////////////////////////////////////////////
////////////////ol list play icon
//////////////////////////////////////////////////////////

// playIcon.classList.add('d-none');

playIcon.addEventListener('click', function (e) {
  // e.stopPropagation();

  console.log('click');
  const clickplay = e.currentTarget;
  pauseIcon.classList.toggle('invisible');

  // clickplay.classList.classList.remove('');

  // if (clickplay) playIcon.classList.add('d-none');
  // else pauseIcon.classList.remove('d-none');

  // playIcon.classList.add('d-none');
  // pauseIcon.classList.toggle('d-none');

  // playIcon.classList.toggle('d-none');
  // pauseIcon.classList.toggle('d-none');
});
