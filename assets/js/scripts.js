$(document).ready(function() {


    $('#slider-contratos').owlCarousel({
        stagePadding: 15,
        loop:false,
        margin:10,
        dots:false,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })

    //Coloca first-active e last-active no carousel
    $('.owl-carousel').trigger('to.owl.carousel', 0);
    function brandSliderClasses() {
        $('.owl-carousel').each(function() {
            var total = $(this).find('.owl-item.active').length;
            $(this).find('.owl-item').removeClass('first-active');
            $(this).find('.owl-item').removeClass('last-active');
            $(this).find('.owl-item.active').each(function(index) {
                if (index === 0) {
                    $(this).addClass('first-active')
                }
                if (index === total - 1 && total > 1) {
                    $(this).addClass('last-active')
                }
            })
        })
    }
    brandSliderClasses();
    $('.owl-carousel').on('translated.owl.carousel', function(event) {
        brandSliderClasses()
    });
    $('.first-active .card-radio-label').click();
    //Clica em um vai para a primeira posição
    // $(document).on('click', '.owl-item', function() {
    //     let carousel = $(this).closest('.owl-carousel');
    //     let index = $(this).index();
    //     let relativeIndex = carousel.data('owl.carousel').relative(index);
    //     carousel.trigger('to.owl.carousel', [relativeIndex, 300]);
    // });

    


});