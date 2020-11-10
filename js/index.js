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
      $('#socials').removeAttr('style');
      $('#specials').attr('style', 'display:none');
      $('#family-gathering').attr('style', 'display:none');
      $('.event-summary .h2').text('Social Events');
      $('.event-summary .col-md-10').text(
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempore veniam omnis ipsum soluta expedita modi assumenda explicabo saepe'
      );
    } else if ($(h5).html() === 'SPECIAL EVENTS') {
      $('#specials').removeAttr('style');
      $('#socials').attr('style', 'display:none');
      $('#family-gathering').attr('style', 'display:none');
      $('.event-summary .h2').text('Special Events');
      $('.event-summary .col-md-10').text(
        'Cupiditate consectetur autem animi ut exercitationem voluptates error quasi laudantium, ducimus consequatur sit praesentium, nesciunt explicabo earum, architecto cumque in odio quos.'
      );
    } else if ($(h5).html() === 'FAMILY GATHERING') {
      $('#family-gathering').removeAttr('style');
      $('#specials').attr('style', 'display:none');
      $('#socials').attr('style', 'display:none');
      $('.event-summary .h2').text('Family Gathering');
      $('.event-summary .col-md-10').text(
        'Quae accusantium praesentium commodi? Maiores aperiam at optio sunt velit odit et quae, magni illum dignissimos doloremque cumque dolorem quaerat cum.'
      );
    }
  });

  const x = window.matchMedia('(max-width: 767px)');
  changeImg(x);
  x.addListener(changeImg);

  const y = window.matchMedia('(max-width: 1200px');
  handleShadow(y);
  y.addListener(handleShadow);
});
