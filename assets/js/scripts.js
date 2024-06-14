


function getURLParams() {
    var url = document.location.href;
    var paramsString = url.split('?')[1];
    var data = {};

    if (paramsString) {
        var params = paramsString.split('&');
        var tmp;

        for (var i = 0, l = params.length; i < l; i++) {
            tmp = params[i].split('=');
            data[tmp[0]] = decodeURIComponent(tmp[1]);  // Decode the parameter value
        }
    } else {
        console.warn('No query parameters found in the URL');
    }

    return data;
}


$(document).ready(function() {

    let params = getURLParams();
    if(params.theme && params.theme!=='undefined'){
        $('body').addClass(params.theme);
        $('.logo-datapact').addClass('d-none');
        $(`.logo-${params.theme}`).addClass('d-block');
    }

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

});