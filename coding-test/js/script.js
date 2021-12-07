$(function(){
    $('.header-contact').click(function(e) {
        $('#contact').toggleClass("click");
        if ($('#contact').hasClass("click")) {
            $('#contact').attr("src", "img/header_button_on.png");
        } else {
            $('#contact').attr("src", "img/header_button_off.png");
        }
        })
        $('.contact').click(function(e) {
        $('#info-contact').toggleClass("click");
        if ($('#info-contact').hasClass("click")) {
            $('#info-contact').attr("src", "img/info_button_on.png");
        } else {
            $('#info-contact').attr("src", "img/info_button_off.png");
        }
        })
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: false,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
});