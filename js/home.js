$('#div-crsl').slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    touchMove: false,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});