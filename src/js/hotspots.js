// import $ from 'jquery';

$(document).ready(() => {
  // quick and dirty DFS children traversal
  function traverseChildren(elem) {
    const children = [];
    const q = [];
    q.push(elem);
    while (q.length > 0) {
      const elem = q.pop();
      children.push(elem);
      pushAll(elem.children);
    }

    function pushAll(elemArray) {
      for (let i = 0; i < elemArray.length; i++) {
        q.push(elemArray[i]);
      }
    }

    return children;
  }

  function makeMouseOutFn(elem) {
    const list = traverseChildren(elem);
    return function onMouseOut(event) {
      const e = event.toElement || event.relatedTarget;
      if (!!~list.indexOf(e)) {
        return;
      }

      setTimeout(() => {
        elem.style.height = null;
        elem.classList.remove('img-feature--open');
      }, 250);
    };
  }

  const block = document.querySelectorAll('.hero-slider_img');

  block.forEach((elm) => {
    const img = elm.querySelector('img');
    const imgCoordLeft = img.getBoundingClientRect().left;
    const features = elm.querySelectorAll('.img-feature');

    features.forEach((elem) => {
      const elemCoordLeft = elem.getBoundingClientRect().left;

      const text = elem.querySelector('.img-feature_wrap');
      elem.addEventListener('mouseover', (e) => {
        const target = e.currentTarget;

        if (target.classList.contains('img-feature--open')) {
          return 0;
        }

        // Average element max-width = 460
        // Half width ~= 200
        const HALF_WIDTH = 200;

        if (elemCoordLeft - imgCoordLeft > HALF_WIDTH) {
          target.style.transform = 'translateX(-50%)';
        }

        target.classList.add('img-feature--open');
        setTimeout(() => {
          target.style.height = `${text.offsetHeight}px`;
        }, 150);
      });

      elem.addEventListener('mouseout', makeMouseOutFn(elem));
    });
  });
});
