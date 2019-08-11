import 'owl.carousel';
import $ from 'jquery';

$(document).ready(() => {
  const owl = $('.owl-carousel');

  owl.owlCarousel({
    loop: true,
    mouseDrag: false,
    dots: false,
    nav: true,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" fill="none"><path fill="#EF8B54" fill-rule="evenodd" d="M.41 9.87l1.414 1.414 8.228 8.228 1.414-1.414L3.238 9.87l8.228-8.228L10.052.228 1.824 8.456.408 9.87z" clip-rule="evenodd"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" fill="none"><path fill="#EF8B54" style="transform: translate3d(-5px, 0, 0);" fill-rule="evenodd" d="M19.59 9.87l-1.414 1.414-8.228 8.228-1.414-1.414 8.228-8.228-8.228-8.228L9.948.228l8.228 8.228 1.415 1.414z" clip-rule="evenodd"/></svg>'],
    responsive: {
      0: {
        items: 1,
      },

      768: {
        items: 2,
      },

      960: {
        items: 3,
      },

      1200: {
        items: 4,
      },
    },
  });

  // owl.on('changed.owl.carousel', (event) => {
  //   // Reset autoplay timer
  //   owl.trigger('stop.owl.autoplay');
  //   owl.trigger('play.owl.autoplay');

  //   // Animation for item elems
  //   // Position of the current item
  //   const item = event.item.index - 2;
  //   // Animation for image
  //   $('.hero-slider_img').css('animation-delay', '400ms');
  //   $('.hero-slider_img').removeClass('animated fadeInUp fast');
  //   $('.owl-item')
  //     .not('.cloned')
  //     .eq(item)
  //     .find('.hero-slider_img')
  //     .addClass('animated fadeInUp fast');

  //   // Animation for bg
  //   $('.hero-slider_bg-fill').removeClass('hero-slider_bg-fill--animated');
  //   $('.owl-item')
  //     .not('.cloned')
  //     .eq(item)
  //     .find('.hero-slider_bg-fill')
  //     .addClass('hero-slider_bg-fill--animated');
  // });

  // $('.owl-next').click(() => {
  //   owl.trigger('next.owl.carousel');
  // });

  // $('.owl-prev').click(() => {
  //   owl.trigger('prev.owl.carousel');
  // });
});
