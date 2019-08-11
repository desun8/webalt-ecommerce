// import TimelineLite from 'gsap/TimelineLite';
import { TweenLite, TimelineLite, Power3, RoughEase, Back, Ease, Elastic, Bounce, Power4, TweenMax, TimelineMax, Linear } from 'gsap';

import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'gsap/ScrollToPlugin';

import fullpage from 'fullpage.js';

document.addEventListener('DOMContentLoaded', () => {
  const _$ = document.querySelector.bind(document);
  const _$$ = document.querySelectorAll.bind(document);
  const tl = new TimelineLite();
  const desktop = window.matchMedia('(min-width: 60em)');

  const line = _$('#js-heroLine');
  const titleMain = _$('#js-heroTitleMain');
  const titleSec = _$('#js-heroTitleSec');
  const text = _$('#js-heroText');
  const btns = _$('#formCall');
  const circle = _$('#js-heroCircle');
  const phone = _$('#js-heroPhone');
  const btnDown = _$('#js-heroDown');

  TweenLite.from(phone, 1.2, {
    y: 10,
    autoAlpha: 0,
    delay: 1,
    ease: Power3.easeInOut,
  });

  tl
    .from(circle, 0.5, {
      autoAlpha: 0,
      delay: 1,
      ease: Power3.easeInOut,
    })
    .from(line, 0.8, {
      height: 0,
      ease: Power3.easeInOut,
    })
    .from(titleMain, 0.8, {
      x: -100,
      autoAlpha: 0,
      ease: RoughEase.easeInOut,
    })
    .from(titleSec, 0.8, {
      x: -100,
      autoAlpha: 0,
      ease: RoughEase.easeInOut,
    })
    .from(text, 0.8, {
      autoAlpha: 0,
      ease: RoughEase.easeInOut,
    })
    .from(btns, 0.8, {
      y: 100,
      autoAlpha: 0,
      ease: RoughEase.easeInOut,
    })
    .from(btnDown, 0.5, {
      y: -10,
      autoAlpha: 0,
      ease: Back.easeInOut,
    });

  // FullPageScroll
  if (desktop.matches) {
    const animated = {
      why: true,
      how: true,
      sample: true,
      clients: true,
      feedback: true,
    }

    const whyAnimated = () => {
      new TimelineLite()
        .from('#js-whyTitle', 1, {
          y: 150,
          autoAlpha: 0,
          ease: Ease.easeInOut,
        }, 0)
        .from('.why_sum-wrap', 1, {
          autoAlpha: 0,
          ease: Linear.easeInOut,
        }, 0)
        .from('#js-whyMark', 0.6, {
          autoAlpha: 0,
          ease: Back.easeInOut,
        })
        .from('#js-whyEqual', 0.8, {
          x: -100,
          autoAlpha: 0,
          ease: Ease.easeInOut,
        })
        .from('.equal-list', 0.8, {
          x: 100,
          autoAlpha: 0,
          ease: Ease.easeInOut,
        });
    };

    const howAnimated = () => {
      const elems = _$$('.how-step');

      new TimelineLite()
        .from(elems[0], 0.7, {
          x: -100,
          autoAlpha: 0,
          ease: Linear.easeOut,
        })
        .from(elems[1], 0.7, {
          x: -100,
          autoAlpha: 0,
          ease: Linear.easeOut,
        })
        .from(elems[2], 0.7, {
          x: -100,
          autoAlpha: 0,
          ease: RoughEase.easeOut,
        })
        .from(elems[3], 0.7, {
          x: 100,
          autoAlpha: 0,
          ease: Linear.easeOut,
        })
        .from(elems[4], 0.7, {
          x: 100,
          autoAlpha: 0,
          ease: Linear.easeOut,
        })
        .from(elems[5], 0.7, {
          x: 100,
          autoAlpha: 0,
          ease: Linear.easeOut,
        });
    }

    const feedbackAnimated = () => {
      new TimelineLite()
        .from('.feedback_form-col', 1.5, {
          y: 200,
          autoAlpha: 0,
          ease: RoughEase.easeInOut,
        }, 0)
        .from('.border-top', 1, {
          x: -100,
          scale: 1.5,
          autoAlpha: 0,
          ease: Back.easeInOut,
        }, 0)
        .from('.border-bottom', 1, {
          x: 100,
          scale: 1.5,
          autoAlpha: 0,
          ease: Back.easeInOut,
        }, 0)
        .from('.border-left', 1, {
          y: 100,
          scale: 1.5,
          autoAlpha: 0,
          ease: Back.easeInOut,
        }, 1)
        .from('.border-right', 1, {
          y: -100,
          scale: 1.5,
          autoAlpha: 0,
          ease: Back.easeInOut,
        }, 1);
    }

    const fullPageInstance = new fullpage('#fullPage', {
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      lockAnchors: false,
      normalScrollElements: '.modal-sample-wrap',
      onLeave: function(origin, destination, direction) {
        if (destination.item.id === 'sectionWhy' && animated.why) {
          whyAnimated();
          animated.why = false;
        }

        if (destination.item.id === 'sectionHow' && animated.how) {
          howAnimated();
          animated.how = false;
        }

        if (destination.item.id === 'sectionFeedback' && animated.feedback) {
          feedbackAnimated();
          animated.feedback = false;
        }
      }
    });
  }
});
