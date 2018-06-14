  var header = document.querySelector('.row1');
  var previousScrollPosition = window.scrollY;

window.addEventListener('scroll', function(event){
  if (window.scrollY > 0 && window.scrollY < previousScrollPosition) {
      header.classList.add('fixed');
  } else {
      header.classList.remove('fixed');
  }

  previousScrollPosition = window.scrollY;
});
