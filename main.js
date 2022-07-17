const isInViewport = function (elem) {
  const distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) - 50 &&
    distance.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

const findMe = document.querySelectorAll('.bootable');

window.addEventListener(
  'scroll',
  function (event) {
    // add event on scroll
    findMe.forEach((element) => {
      //for each .thisisatest
      if (isInViewport(element)) {
        //if in Viewport
        if (!element.classList.contains('boot')) {
          element.classList.add('boot');
          triggerCounterIn(element.querySelector('.counter'));
        }
      }
    });
  },
  false
);

function triggerCounterIn(n) {
  if (!n) return;
  const updateCount = () => {
    const target = +n.getAttribute('data-target');
    const count = +(parseInt(n.innerText.replaceAll(',', '')) | 0);
    const speed = n.getAttribute('data-speed')
      ? parseInt(n.getAttribute('data-speed'))
      : 5000; // change animation speed here
    const inc = target / speed;
    if (count < target) {
      n.innerText = Math.ceil(count + inc).toLocaleString('en-US');
      setTimeout(updateCount, 1);
    } else {
      n.innerText = target.toLocaleString('en-US');
    }
  };
  updateCount();
}
