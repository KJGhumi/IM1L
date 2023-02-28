$('div#header ul.gnb li').mouseenter(function(){
  $(this).children('ul').stop().slideDown();
});
$('div#header ul.gnb li').mouseleave(function(){
  $(this).children('ul').stop().slideUp();
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const main_swiper = new Swiper('.main_swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});