const navLink = document.querySelectorAll('.nav-link');
const productTabs = document.querySelectorAll('.product_tabs span');

// swiper breackpoint
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6.4,
        spaceBetween: 10,

    loop: 'true',

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

navLink.forEach(navLinkActive => {
    navLinkActive.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active')
        navLinkActive.classList.add('active')
    })
});

productTabs.forEach(productTabActive => {
  productTabActive.addEventListener('click', () => {
      document.querySelector('.product_tabs .active').classList.remove('active')
      productTabActive.classList.add('active')
  })
});