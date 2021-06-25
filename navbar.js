const nabvarElements = document.querySelectorAll('nav ul li');

// console.log(nabvarElements);

console.log();
nabvarElements.forEach(nabvar => {
  nabvar.addEventListener('click', e => {
    e.stopPropagation();
    nabvarElements.forEach(nav => nav.classList.remove('navbar-active'));
    nabvar.classList.add('navbar-active');
  });
});
