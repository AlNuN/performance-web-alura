window.onscroll = function() {
  const imgs = document.querySelectorAll('img[data-src]');

  imgs.forEach(function(img) {
    if(img.getBoundingClientRect().top < window.innerHeight + 500)
      img.src = img.getAttribute('data-src');
  });
  
}