$(".services-slider").slick({
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 519,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }
    ],
});

// $(".s-6-slider").slick({
//     slidesToShow: 3,
//     infinite: true,
//     slidesToScroll: 1,
//     arrows: true,
//     responsive: [
//         {
//             breakpoint: 519,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//             },
//         }
//     ],
// });


$(".testimonials").slick({
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
});


$(document).ready(function () {
    var slider = $(".s-6-slider");

    slider.slick({
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 519,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    slider.on("afterChange", function (event, slick, currentSlide) {
        setTimeout(() => {
            $(".s-6-slider .card").removeClass("shadow"); // Remove shadow from all cards

            // Find all visible cards in the slider
            let visibleCards = $(".s-6-slider .slick-slide[aria-hidden='false'] .card");

            // Add Bootstrap shadow class to the second visible card
            if (visibleCards.length >= 2) {
                $(visibleCards[1]).addClass("shadow");
            }
        }, 100);
    });

    // Trigger the event initially to set shadow on the second visible card on page load
    slider.trigger("afterChange");
});
