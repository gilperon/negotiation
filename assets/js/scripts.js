

// Pega os atributos da URL
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


// Salve o theme
function setThemeFromURL() {
    var params = getURLParams();
    if (params.theme) {
        localStorage.setItem('theme', params.theme);
    }

    applyTheme();
}

// Seta o theme
function applyTheme() {
    var theme = localStorage.getItem('theme');
    if (theme) {
        document.body.className = theme;
        if(theme.includes('bradesco') || theme.includes('crefaz')){
            $('.logo-datapact').addClass('d-none');
            $(`.logo-${theme}`).addClass('d-block');
        }
    }
}




$(document).ready(function() {

    // seta o theme
    setThemeFromURL();

    $('.link-disabled').on('click', function(event) {
        event.preventDefault(); 
        toastr["info"]("Ação desativada na versão demo.");
    });

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