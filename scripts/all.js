let offerBefore = document.querySelector('.offer__before');
let subtitle = document.querySelector('.offer__subtitle');
let hr = document.querySelector('.offer__hr');

let subtitleHeight = subtitle.offsetHeight;
let offerBeforeHeight = offerBefore.offsetHeight;

hr.style.height = `calc(${offerBeforeHeight - subtitleHeight}px + 4rem)`;