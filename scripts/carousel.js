// Services Carousel 
$(document).ready(function () {
  $(".owl-carousel-services").owlCarousel({
    loop: true,
    margin: 16,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      800: {
        items: 3,
      }
    },
  });
});

// Hospital Facilities Carousel
$(document).ready(function () {
  $(".owl-carousel-facilities").owlCarousel({
    loop: true,
    margin: 40,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});

