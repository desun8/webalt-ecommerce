import "owl.carousel";
import $ from "jquery";

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const isDesktop = window.matchMedia("(min-width: 1200px)").matches;

    if (!isDesktop) return false;

    const owl = $(".advantage-list");

    owl.owlCarousel({
      item: 1,
      // loop: true,
      mouseDrag: false,
      dots: false,
      nav: false,
      center: true,
      margin: 40,
      autoWidth: true,
      smartSpeed: 1000,
    });

    $(".advantage-btn--next").click(() => {
      owl.trigger("next.owl.carousel");
    });

    $(".advantage-btn--prev").click(() => {
      owl.trigger("prev.owl.carousel");
    });
  });
})();

// $(document).ready(() => {
//   const owl = $(".advantage-list");

//   owl.owlCarousel({
//     loop: true,
//     mouseDrag: false,
//     dots: false,
//     nav: false,
//     center: true,
//     responsive: {
//       // 0: {
//       //   items: 1,
//       // },

//       // 768: {
//       //   items: 2,
//       // },

//       // 960: {
//       //   items: 3,
//       // },

//       1200: {
//         items: 4,
//       },
//     },
//   });

//   // owl.on('changed.owl.carousel', (event) => {
//   //   // Reset autoplay timer
//   //   owl.trigger('stop.owl.autoplay');
//   //   owl.trigger('play.owl.autoplay');

//   //   // Animation for item elems
//   //   // Position of the current item
//   //   const item = event.item.index - 2;
//   //   // Animation for image
//   //   $('.hero-slider_img').css('animation-delay', '400ms');
//   //   $('.hero-slider_img').removeClass('animated fadeInUp fast');
//   //   $('.owl-item')
//   //     .not('.cloned')
//   //     .eq(item)
//   //     .find('.hero-slider_img')
//   //     .addClass('animated fadeInUp fast');

//   //   // Animation for bg
//   //   $('.hero-slider_bg-fill').removeClass('hero-slider_bg-fill--animated');
//   //   $('.owl-item')
//   //     .not('.cloned')
//   //     .eq(item)
//   //     .find('.hero-slider_bg-fill')
//   //     .addClass('hero-slider_bg-fill--animated');
//   // });

//   // $('.owl-next').click(() => {
//   //   owl.trigger('next.owl.carousel');
//   // });

//   // $('.owl-prev').click(() => {
//   //   owl.trigger('prev.owl.carousel');
//   // });
// });
