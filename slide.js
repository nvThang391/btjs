var carousel = document.querySelector(".carousel");
var carouselImg = carousel.querySelector(".carousel-img");
var carouselNext = carousel.querySelector(".carousel .nav-btn span.next");
var carouselPrev = carousel.querySelector(".carousel .nav-btn span.prev");
var carouselDots = carousel.querySelector(".nav-dots");

var carouselItems = carouselImg.children;
var dotId = 0;
//
// tinh kich thuoc chieu rong 1 item
var itemWidth = carouselImg.clientWidth;
console.log(`kich thuoc 1 anh la: ${itemWidth}`);
// tong kich thuoc item
var totalWidth = itemWidth * carouselItems.length;
console.log(`Tong kich thuoc slide: ${totalWidth}`);
carouselImg.style.width = `${totalWidth}px`;

// lang nghe su kien click vao nut next
var translateX = 0;
carouselNext.addEventListener("click", function () {
  if (Math.abs(translateX) >= totalWidth - itemWidth) {
    return;
  }
  translateX -= itemWidth;
  carouselImg.style.translate = `${translateX}px`;
});
// lang nghe su kien click vao nut prev
carouselPrev.addEventListener("click", function () {
  if (Math.abs(translateX) < itemWidth) {
    return;
  }
  translateX += itemWidth;
  carouselImg.style.translate = `${translateX}px`;
});
// tao dot
for (let i = 0; i < carouselItems.length; i++) {
  var dot = document.createElement("span");
  carouselDots.appendChild(dot);
}
// active dot

function activeDot() {
  for (let i = 0; i < carouselItems.length; i++) {
    carouselDots.children[i].classList.remove("active");
    if (i === dotId) {
      carouselDots.children[i].classList.add("active");
    }
  }
}
activeDot();
// click dot
var dots = document.querySelectorAll(".nav-dots span");
for (let i = 0; i < carouselItems.length; i++) {
  dots[i].addEventListener("click", function () {
    translateX = i * itemWidth * -1;
    carouselImg.style.translate = `${translateX}px`;
    dotId = i;
    activeDot();
  });
}
// vuot silde
