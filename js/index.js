$(window).ready(function () {
  function changeImg(x) {
    if (x.matches) {
      $('#first-img').attr('src', 'images/wine-glass-field.jpeg');
      $('#second-img').attr('src', 'images/pouring-copy.jpeg');
      $('#socials').attr('src', 'images/gathering-copy.jpeg');
      $('#specials').attr('src', 'images/wedding-copy.jpeg');
      $('#family-gathering').attr('src', 'images/wine-picnic-2-copy.jpeg');
    } else {
      $('#first-img').attr('src', 'images/red-white-wines.jpeg');
      $('#second-img').attr('src', 'images/pouring.jpeg');
      $('#socials').attr('src', 'images/gathering.jpeg');
      $('#specials').attr('src', 'images/wedding.jpeg');
      $('#family-gathering').attr('src', 'images/wine-picnic-2.jpeg');
    }
  }

  function handleShadow(x) {
    if (x.matches) {
      $('#second-img').addClass('shadow');
    } else {
      $('#second-img').removeClass('shadow');
    }
  }
  $('.h5').on('click', function (e) {
    const h5 = e.target;
    $(h5).siblings().addClass('text-muted').removeClass('selected');
    $(h5).removeClass('text-muted ').addClass('selected');
    if ($(h5).html() === 'SOCIAL EVENTS') {
      $('#socials').fadeIn(1000);
      $('#specials').attr('style', 'display:none');
      $('#family-gathering').attr('style', 'display:none');
      $('.event-summary .h2').text('Social Events');
      $('.event-summary .col-md-10').text(
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempore veniam omnis ipsum soluta expedita modi assumenda explicabo saepe'
      );
      $(h5).addClass('active-1');
      $(h5).siblings().removeClass('active-2 active-3');
    } else if ($(h5).html() === 'SPECIAL EVENTS') {
      $('#specials').fadeIn(1000);
      $('#socials').attr('style', 'display:none');
      $('#family-gathering').attr('style', 'display:none');
      $('.event-summary .h2').text('Special Events');
      $('.event-summary .col-md-10').text(
        'Cupiditate consectetur autem animi ut exercitationem voluptates error quasi laudantium, ducimus consequatur sit praesentium, nesciunt explicabo earum, architecto cumque in odio quos.'
      );
      $(h5).addClass('active-2');
      $(h5).siblings().removeClass('active-1 active-3');
    } else if ($(h5).html() === 'FAMILY GATHERING') {
      $('#family-gathering').fadeIn(1000);
      $('#specials').attr('style', 'display:none');
      $('#socials').attr('style', 'display:none');
      $('.event-summary .h2').text('Family Gathering');
      $('.event-summary .col-md-10').text(
        'Quae accusantium praesentium commodi? Maiores aperiam at optio sunt velit odit et quae, magni illum dignissimos doloremque cumque dolorem quaerat.'
      );
      $(h5).addClass('active-3');
      $(h5).siblings().removeClass('active-1 active-2');
    }
  });

  function addAsideAndShadow(z) {
    if (z.matches) {
      $('#reservation-container')
        .before('<aside id="reservation-block"></aside> ')
        .prepend(' <div class="stripe" id="reservation-stripe"></div>');
    } else {
      $('#reservation-block').remove();
      $('#reservation-stripe').remove();
    }
  }
  const x = window.matchMedia('(max-width: 767px) and (min-width: 600px)');
  changeImg(x);
  x.addListener(changeImg);

  const y = window.matchMedia('(max-width: 1200px)');
  handleShadow(y);
  y.addListener(handleShadow);

  const z = window.matchMedia('(min-width: 993px)');
  addAsideAndShadow(z);
  z.addListener(addAsideAndShadow);
});
