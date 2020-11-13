var imgs = document.querySelectorAll('img[data-src]');

function getBounding () {
  var result = [];
  imgs.forEach(function(img){ result.push(img.getBoundingClientRect().top) });
  return result;
}

var bounding = getBounding();
var height = window.innerHeight;

window.onresize = function () {
  bounding = getBounding();
  height = window.innerHeight;
}

var flag = false;
function handleScroll() {
  // Throttle
  if (flag) return;
  flag = true;
  setTimeout(function(){
    flag = false;
    bounding = getBounding();
  }, 600);

  bounding.forEach(function(imgBounding, i) {
    if(imgBounding < height + 200)
      imgs.item(i).src = imgs.item(i).getAttribute('data-src');
  });

  if (bounding[bounding.length -1] < height) window.removeEventListener('scroll', handleScroll);
}

window.addEventListener('scroll', handleScroll)
