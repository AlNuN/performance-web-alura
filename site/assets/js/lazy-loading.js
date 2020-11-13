var flag = false;
window.onscroll = function() {
  var imgs = document.querySelectorAll('img[data-src]');

  // Throttle
  if (flag) return;
  flag = true;
  setTimeout(function(){
    flag = false;
  }, 100);

  imgs.forEach(function(img) {
    if(img.getBoundingClientRect().top < window.innerHeight + 1000)
      img.src = img.getAttribute('data-src');
  });
}