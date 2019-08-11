import SimpleBar from 'simplebar';

document.addEventListener('DOMContentLoaded', () => {
  const _$ = document.querySelector.bind(document);
  const _$$ = document.querySelectorAll.bind(document);
  const desktop = window.matchMedia('(min-width: 60em)');

  const isScrollActive = (boolean) => {
    if (!desktop.matches) {    
      document.body.style.cssText = boolean ? null : 'height: 100%; overflow: hidden;';
    }
  };

  const modalSampleBlock = _$('.modal-sample-wrap');
  const btnClose = _$('#modalSampleClose');

  const sampleElems = [
    _$('#samplePomidor'),
    _$('#sampleBaby'),
    _$('#sampleApteka'),
  ];

  const modalSampleElems = [
    _$('#modalSamplePomidor'),
    _$('#modalSampleBaby'),
    _$('#modalSampleApteka'),
  ];

  const setModalElmHeight = (modal) => {
    if (desktop.matches) {
      const BTN_PADDING = 70;
      const elem = modal.querySelector('.modal-sample_details');
      const modalBtmCoord = modal.getBoundingClientRect().bottom;
      const elemBtnCoord = elem.getBoundingClientRect().bottom;
      const elemHeight = elem.offsetHeight;

      if (elemBtnCoord - modalBtmCoord < 0) {
        const newHeight = elemHeight - (elemBtnCoord - modalBtmCoord + BTN_PADDING);
        elem.style.maxHeight = `${newHeight}px`;
      }
    }
  };

  sampleElems.forEach((sample) => {
    sample.addEventListener('click', () => {
      modalSampleBlock.style.transform = 'translateX(0)';
      
      isScrollActive(false);
      
      modalSampleElems.forEach((modalElm) => {
        switch (sample.id) {
          case 'samplePomidor':
            if (modalElm.id === 'modalSamplePomidor') {
              modalElm.style.display = 'flex';
              setModalElmHeight(modalElm);
            }
            break;
          case 'sampleBaby':
            if (modalElm.id === 'modalSampleBaby') {
              modalElm.style.display = 'flex';
              setModalElmHeight(modalElm);
            }
            break;
          case 'sampleApteka':
            if (modalElm.id === 'modalSampleApteka') {
              modalElm.style.display = 'flex';
              setModalElmHeight(modalElm);
            }
            break;
          default:
            modalSampleBlock.style.transform = null;
            isScrollActive(true);
        }
      });
    });
  });

  btnClose.addEventListener('click', () => {
    modalSampleBlock.style.transform = null;
    isScrollActive(true);
    setTimeout(() => {
      modalSampleElems.forEach((elem) => {
        elem.style.display = null;
      });
    }, 200);
  });

  modalSampleBlock.addEventListener('click', (e) => {
    if (desktop.matches) {
      if (e.target.classList.contains('modal-sample_img')) {
        modalSampleBlock.style.transform = null;
        setTimeout(() => {
          modalSampleElems.forEach((elem) => {
            elem.style.display = null;
          });
        }, 200);
      }
    }
  });

  // Custom scrollBar
  if (desktop.matches) {
    Array.from(_$$('.modal-sample_details')).forEach(el => new SimpleBar(el, {
      autoHide: false,
    }));
  }
});
