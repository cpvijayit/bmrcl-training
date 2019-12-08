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
    /* Hero Banner Script */
    if ($("#hero-banner").length) {
        var hero_banner = $("#hero-banner").find(".item").length;

        $("#hero-banner").owlCarousel({
            animateOut: "fadeOutRight",
            animateIn: "fadeInLeft",
            touchDrag: hero_banner > 1 ? true : false,
            mouseDrag: hero_banner > 1 ? true : false,
            loop: hero_banner > 1 ? true : false,
            autoplay: hero_banner > 1 ? 3000 : false,
            autoplayHoverPause: hero_banner > 1 ? true : false,
            responsive: {
                0: {
                    items: 1,
                    dots: hero_banner > 1 ? true : false,
                    nav: hero_banner > 1 ? false : false
                },
                768: {
                    items: 1,
                    dots: hero_banner > 1 ? true : false,
                    nav: hero_banner > 1 ? false : false
                },
                1025: {
                    items: 1,
                    dots: hero_banner > 1 ? false : false,
                    nav: hero_banner > 1 ? true : false
                }
            }
        });

        $("#hero-banner")
            .find(".owl-next,.owl-prev")
            .append("<span class='icon-wrap'></span>");
    }
    // $("#hero-banner").on("changed.owl.carousel", function(event) {
    //     var item = event.item.index - 2;

    //     //removing animation first
    //     $(".banner-title").removeClass("wow fadeInDown animated");
    //     console.log("removed");
    //     $(".owl-item")
    //         .not(".cloned")
    //         .eq(item)
    //         .find(".banner-title")
    //         .addClass("wow fadeInDown animated");
    // });

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
            onInitialized: counter,
            onTranslated: counter,
            slideBy: 3,
            items: 3,
            responsive: {
                0: {},
                768: {},
                1000: {}
            }
        });

        function counter(event) {
            var element = event.target;
            var items = event.item.count / 3;
            var item = event.item.index / 3 + 1;
            var sldtxt = $(".active .ivySlideTxt").html();
            //var sldWidth = 100;
            //var sldPercent = (sldWidth * item) / items;
            $("#counter").html(
                "<span class='big-num'>" +
                item +
                "</span>" +
                " / " +
                "<span class='small-num'>" +
                items +
                "</span>"
            );
            $(".slTxt").html(sldtxt);
            //$(".slideState span").css("width", sldPercent + "%");
            //$(".slideState span").html(sldPercent + "%");
            //alert(item);
        }
    }
    // Get Result
    $(".btn-details").click(function() {
        $(".get-result-details").slideToggle("slow");
        $(".get-details").toggleClass("hidden");
        $(".get-details-close").toggleClass("hidden");
    });

    // Menu Click
    $(".burger-menu").click(function() {
        $(".menu").toggleClass("change");
        $(".menu-list > ul").toggleClass("change");
        $(".menu-list").toggleClass("change-bg");
        $("body").toggleClass("overflow-hidden");
        $("#menu-list .box-menu").toggleClass("wow animated");
        // $("#plan-journey > .pos-absolute").toggleClass("none");
    });

    /* Testimonial Carousel */

    if ($(".testimonial-banner").length) {
        var testimonial_banner = $(".testimonial-banner").find(".item").length;
        $(".testimonial-banner").owlCarousel({
            dots: testimonial_banner > 1 ? false : false,
            nav: testimonial_banner > 1 ? true : false,
            touchDrag: gallery_items_banner > 1 ? true : false,
            mouseDrag: gallery_items_banner > 1 ? true : false,
            loop: gallery_items_banner > 1 ? true : false,
            autoplay: testimonial_banner > 1 ? 3000 : false,
            autoplayHoverPause: testimonial_banner > 1 ? true : false,
            items: 1,
            responsive: {
                0: {},
                768: {},
                1000: {}
            }
        });
    }
    $("marquee").hover(
        function() {
            this.stop();
        },
        function() {
            this.start();
        }
    );

    // End bracket
});