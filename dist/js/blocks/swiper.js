function swiper () {
    new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
           el: ".swiper-pagination",
           type: "fraction",
        },
        autoplay: {
           delay: 2500,
           disableOnInteraction: false
         },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      });
} 
export default swiper;