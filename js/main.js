$(document).ready(function () {
  $('a.blog-button, a.gallery-button').click(function (e) {
    var $panelCover = $('.panel-cover');
    if ($panelCover.hasClass('panel-cover--collapsed')) return;
    currentWidth = $panelCover.width();
    if (currentWidth < 960) {
      $panelCover.addClass('panel-cover--collapsed');
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $panelCover.css('max-width', currentWidth);
      $panelCover.animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
  });

  if (window.location.hash && (window.location.hash == '#blog' || window.location.hash == '#gallery_index')) {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  });

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

});
