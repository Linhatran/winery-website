$(window).ready(function () {
  function changeImg(x) {
    if (x.matches) {
      $('#first-img').attr('src', '/images/wine-glass-field.jpeg');
      $('#second-img').attr('src', '/images/pouring-copy.jpeg');
      $('#fourth-img').attr('src', '/images/gathering-copy.jpeg');
    } else {
      $('#first-img').attr('src', '/images/red-white-wines.jpeg');
      $('#second-img').attr('src', '/images/pouring.jpeg');
      $('#fourth-img').attr('src', '/images/gathering.jpeg');
    }
  }

  var x = window.matchMedia('(max-width: 767px)');
  changeImg(x);
  x.addListener(changeImg);
});
