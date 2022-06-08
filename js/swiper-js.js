var swiper = new Swiper(".mySwiper", 
{
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 1,
      depth: 200,
      modifier: 2,
      slideShadows: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },  

  });


  var swiper = new Swiper(".mySwipertwo", {
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: "auto",
    spaceBetween: 30,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
