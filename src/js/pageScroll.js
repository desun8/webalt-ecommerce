import { TimelineLite, RoughEase, Back, Linear, TweenLite, Power1 } from "gsap";
import fullpage from "fullpage.js";
import { throttle } from "lodash";

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const tl = new TimelineLite();

    const heroTitle = _$("#js-heroTitle");
    const heroImg = _$("#js-heroImg");
    const heroBtn = _$("#js-heroBtn");

    // Анимация херо блока
    if (isDesktop) {
      tl.fromTo(
        heroTitle,
        1,
        { x: -100, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, delay: 2 },
        "hero",
      )
        .fromTo(
          heroBtn,
          1,
          { x: -100, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, delay: 2 },
          "hero",
        )
        .fromTo(
          heroImg,
          1,
          { x: 100, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, delay: 2 },
          "hero",
        );
    } else {
      tl.fromTo(
        heroTitle,
        1,
        { y: -25, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, delay: 2 },
      )
        .fromTo(heroImg, 1, { autoAlpha: 0 }, { autoAlpha: 1 }, "-=0.2")
        .fromTo(
          heroBtn,
          1,
          { y: 50, autoAlpha: 0 },
          { y: 0, autoAlpha: 1 },
          "-=0.2",
        );
    }

    // FullPageScroll
    if (isDesktop) {
      const animated = {
        // why: true,
        how: true,
        sample: true,
        templates: true,
        feedback: true,
      };

      const howAnimated = () => {
        const elems = _$$(".how-step");

        tl.from(elems[0], 0.7, {
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
      };

      const templatesAnimated = () => {
        const iconVs = _$(".template-divide");

        let template1 = null;
        let template2 = null;

        _$$(".template").forEach(item => {
          switch (item.dataset.name) {
            case "1":
              template1 = item;
              break;
            case "2":
              template2 = item;
              break;
            default:
              break;
          }
        });

        if (template1 && template2) {
          tl.from(template1, 1, { x: -100, autoAlpha: 0, delay: 0.2 }, "first")
            .from(template2, 1, { x: 100, autoAlpha: 0, delay: 0.2 }, "first")
            .from(iconVs, 1, { y: 50, autoAlpha: 0 }, "-=0.2");
        }
      };

      const feedbackAnimated = () => {
        new TimelineLite()
          .from(
            ".feedback_form-col",
            1.5,
            {
              y: 200,
              autoAlpha: 0,
              ease: RoughEase.easeInOut,
              delay: 0.2,
            },
            0,
          )
          .from(
            ".border-top",
            1,
            {
              x: -100,
              scale: 1.5,
              autoAlpha: 0,
              ease: Back.easeInOut,
              delay: 0.2,
            },
            0,
          )
          .from(
            ".border-bottom",
            1,
            {
              x: 100,
              scale: 1.5,
              autoAlpha: 0,
              ease: Back.easeInOut,
              delay: 0.2,
            },
            0,
          )
          .from(
            ".border-left",
            1,
            {
              y: 100,
              scale: 1.5,
              autoAlpha: 0,
              ease: Back.easeInOut,
            },
            1,
          )
          .from(
            ".border-right",
            1,
            {
              y: -100,
              scale: 1.5,
              autoAlpha: 0,
              ease: Back.easeInOut,
            },
            1,
          );
      };

      const eventMouseAnimation = throttle(e => {
        const bgIcons = e.currentTarget.querySelectorAll(".bg-icon");

        const xPos = e.clientX / window.innerWidth - 0.5;
        const yPos = e.clientY / window.innerHeight - 0.5;

        bgIcons.forEach(icon => {
          TweenLite.to(icon, 1.2, {
            x: xPos * 15,
            y: yPos * 15,
            ease: Power1.easeOut,
          });
        });

        if (e.currentTarget.id === "sectionTemplates") {
          const templateIcons = e.currentTarget.querySelectorAll(
            ".template_bg-icon",
          );

          templateIcons.forEach(icon => {
            TweenLite.to(icon, 1.2, {
              x: xPos * 15,
              y: yPos * 15,
              ease: Power1.easeOut,
            });
          });
        }
      }, 100);

      const fullPageInstance = new fullpage("#fullPage", {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        lockAnchors: false,
        normalScrollElements:
          "#modalHow, #modalSample, #modalTemplates, #modalFeedback, #modalHero",
        onLeave(origin, destination) {
          if (destination.item.id === "sectionHow" && animated.how) {
            howAnimated();
            animated.how = false;
          }

          if (
            destination.item.id === "sectionTemplates" &&
            animated.templates
          ) {
            templatesAnimated();
            animated.templates = false;
          }

          if (destination.item.id === "sectionFeedback" && animated.feedback) {
            feedbackAnimated();
            animated.feedback = false;
          }

          // Анимация на движение курсора
          // if (origin.item.id === "sectionAdvantage") {
          //   origin.item.removeEventListener("mousemove", eventFn);
          // }
          // if (origin.item.id === "sectionFeatures") {
          //   origin.item.removeEventListener("mousemove", eventFn);
          // }
          // if (origin.item.id === "sectionSample") {
          //   origin.item.removeEventListener("mousemove", eventFn);
          // }
          // if (origin.item.id === "sectionTemplates") {
          //   origin.item.removeEventListener("mousemove", eventFn);
          // }
          // if (origin.item.id === "sectionClients") {
          //   origin.item.removeEventListener("mousemove", eventFn);
          // }
          // if (origin.item.id === "sectionFeedback") {
          //   origin.item.removeEventListener("mousemove", eventFn);
          // }
        },
        afterLoad(origin, destination) {
          // Анимация на движение курсора
          if (destination.item.id === "sectionAdvantage") {
            destination.item.addEventListener("mousemove", eventMouseAnimation);
          }

          if (destination.item.id === "sectionFeatures") {
            destination.item.addEventListener("mousemove", eventMouseAnimation);
          }

          if (destination.item.id === "sectionSample") {
            destination.item.addEventListener("mousemove", eventMouseAnimation);
          }

          if (destination.item.id === "sectionTemplates") {
            destination.item.addEventListener("mousemove", eventMouseAnimation);
          }

          if (destination.item.id === "sectionClients") {
            destination.item.addEventListener("mousemove", eventMouseAnimation);
          }

          if (destination.item.id === "sectionFeedback") {
            destination.item.addEventListener("mousemove", eventMouseAnimation);
          }
        },
      });
    }
  });
})();
