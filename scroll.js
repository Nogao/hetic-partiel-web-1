var scrolltotop = document.querySelector('.scrolltotop');

scrolltotop.addEventListener('click', function() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})
