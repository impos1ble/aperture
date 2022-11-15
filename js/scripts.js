$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dotsEach: true,
    navText: ['', ' '],
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 2
        },

        1000: {
            items: 5
        }
    }
});

$(function () {
    $("#accordion").accordion();
});
