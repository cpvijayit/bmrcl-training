$(document).ready(function() {
    // Animation init
    new WOW().init();

    //Header backgrund color add on scroll

    if ($(this).scrollTop() !== 0) {
        $("header").addClass("float-menu-bg");
        $(".lang").addClass("text-black");
    } else {
        $("header").removeClass("float-menu-bg");
        $(".lang").removeClass("text-black");
    }

    $(window).scroll(function() {
        if ($(this).scrollTop() !== 0) {
            $("header").addClass("float-menu-bg");
            $(".scroll-top").fadeIn(700);
            $(".lang").addClass("text-black");
        } else {
            $("header").removeClass("float-menu-bg");
            $(".scroll-top").fadeOut(700);
            $(".lang").removeClass("text-black");
        }
    });

    // Scroll To Top
    $(".scroll-top").click(function() {
        $("body,html").animate({
                scrollTop: 0
            },
            300
        );
    });

    /* ------------- COLLAPSE MENU HIDE IN MOBILE ---------------*/
    $(".dropdown-menu a")
        //.not(document.getElementById("notli"))
        .click(function() {
            $(".dropdown").removeClass("open");
            $(".navbar-collapse").removeClass("in");
        });

    /* -------------  SCROLL TO TARGET MENU ---------------*/
    $(".dropdown-menu a").on("click", function() {
        var scrollAnchor = $(this).attr("data-scroll"),
            scrollPoint =
            $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 50;

        $("body,html").animate({
                scrollTop: scrollPoint
            },
            700
        );

        return false;
    });

    /* ------------- ACTIVE MENU ---------------*/
    $(window)
        .scroll(function() {
            var windscroll = $(window).scrollTop();
            if (windscroll >= 0) {
                $(".wrapper section").each(function(i) {
                    if ($(this).position().top - 50 <= windscroll - 0) {
                        $(".dropdown-menu.open li.active").removeClass("active");
                        $(".dropdown-menu.open li")
                            .eq(i)
                            .addClass("active");
                    }
                });
            } else {
                $(".dropdown-menu.open li.active").removeClass("active");
            }
        })
        .scroll();

    /* Gallery Carousel */
    if ($("#gallery-items-banner").length) {
        var gallery_items_banner = $("#gallery-items-banner").find(".item").length;

        $("#gallery-items-banner").owlCarousel({
            // animateOut: "fadeOutRight",
            // animateIn: "fadeInLeft",
            //smartSpeed: gallery_items_banner > 1 ? 500 : false,
            dots: gallery_items_banner > 1 ? false : false,
            nav: gallery_items_banner > 1 ? true : false,
            //touchDrag: gallery_items_banner > 1 ? true : false,
            //mouseDrag: gallery_items_banner > 1 ? true : false,
            //loop: gallery_items_banner > 1 ? true : false,
            autoplay: gallery_items_banner > 1 ? false : false,
            autoplayHoverPause: gallery_items_banner > 1 ? false : false,
            slideBy: 1,
            items: 1,
            responsive: {
                0: {},
                768: {},
                1000: {}
            }
        });
    }

    // End bracket
});