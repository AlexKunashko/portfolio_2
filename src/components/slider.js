export const slider = () =>
    $(document).ready(function () {
        $('.feedback__carusel').slick({
            dots: false,
            infinite: true,
            nextArrow:
                '<button class="arrow-arrow arrow-right"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
            prevArrow:
                '<button class="arrow-arrow arrow-left"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        });
    });