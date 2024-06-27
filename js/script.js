function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
}
const obj = document.querySelector(".count1");
const obj2 = document.querySelector(".count2");
const obj3 = document.querySelector(".count3");
const obj4 = document.querySelector(".count4");



document.querySelector("#pros").addEventListener("mouseenter", function(evt){
    animateValue(obj, 0, 10, 500);
    animateValue(obj2, 0, 23, 500);
    animateValue(obj3, 0, 96, 500);
    animateValue(obj4, 0, 7, 500);
})



const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));
