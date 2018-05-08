//Scripts
(function ($) {
    //Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    //Active parent item on hover
    $(".submenu a").hover(function () {
            $(this).closest(".header-bottom-menu-item").find(".header-bottom-menu-link").addClass("hover");
        },
        function () {
            $(".header-bottom-menu-link").removeClass("hover");
        });
    //Carousel
    var jcarousel = $('.jcarousel');

    jcarousel
        .on('jcarousel:reload jcarousel:create', function () {
            var carousel = $(this),
                width = carousel.innerWidth();

            // if (width >= 600) {
            //     width = width / 3;
            // } else if (width >= 350) {
            //     width = width / 2;
            // }

            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })
        .jcarousel({
            animation: {
                duration: 1500,
                speed: 1500,
                easing: 'linear',
                complete: function () {
                }
            }
        })
        .jcarouselAutoscroll({
            interval: 5000,
            target: '+=1',
            autostart: true,
        })
        .on('mouseover', function (e) {
            $(this).jcarouselAutoscroll('stop');
        })
        .on('mouseout', function (e) {
            $(this).jcarouselAutoscroll('start');
        });

    $('.jcarousel-control-prev')
        .jcarouselControl({
            target: '-=1'
        });

    $('.jcarousel-control-next')
        .jcarouselControl({
            target: '+=1'
        });

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function () {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function () {
            $(this).removeClass('active');
        })
        .on('click', function (e) {
            e.preventDefault();
        })
        .jcarouselPagination({
            perPage: 1,
            item: function (page) {
                return '<a href="#' + page + '">' + page + '</a>';
            }
        });

    //Mobile menu
    $(function() {
        $('.icon-mobile-menu').click(function() {
            $('.mobile-menu').animate({
                left: '0px'
            }, 300);
            $('body').animate({
                left: '285px'
            }, 300);
        });

        $('.icon-close').click(function() {
            $('.mobile-menu').animate({
                left: '-285px'
            }, 300);
            $('body').animate({
                left: '0px'
            }, 300);
        });
    });

    //Lightbox
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

})(jQuery);


