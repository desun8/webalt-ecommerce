import "owl.carousel";
import $ from "jquery";

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    if (isDesktop) {
      // Слайдер "Преимущества"
      const owl = $(".advantage-list");
      owl.addClass("owl-carousel");

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
    }

    const owlClients = $(".clients-slider");

    owlClients.owlCarousel({
      loop: true,
      mouseDrag: false,
      dots: false,
      nav: true,
      navText: [
        '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" fill="none"><path fill="#EF8B54" fill-rule="evenodd" d="M.41 9.87l1.414 1.414 8.228 8.228 1.414-1.414L3.238 9.87l8.228-8.228L10.052.228 1.824 8.456.408 9.87z" clip-rule="evenodd"/></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" fill="none"><path fill="#EF8B54" style="transform: translate3d(-5px, 0, 0);" fill-rule="evenodd" d="M19.59 9.87l-1.414 1.414-8.228 8.228-1.414-1.414 8.228-8.228-8.228-8.228L9.948.228l8.228 8.228 1.415 1.414z" clip-rule="evenodd"/></svg>',
      ],
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
  });
})();
