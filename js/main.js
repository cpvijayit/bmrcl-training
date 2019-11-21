$(document).ready(function() {
    // Animation init
    new WOW().init();

    //Header backgrund color add on scroll

    if ($(this).scrollTop() !== 0) {
        $("header").addClass("float-menu-bg");
    } else {
        $("header").removeClass("float-menu-bg");
    }

    $(window).scroll(function() {
        if ($(this).scrollTop() !== 0) {
            $("header").addClass("float-menu-bg");
        } else {
            $("header").removeClass("float-menu-bg");
        }
    });

    /* Hero Banner Script */
    var hero_banner = $("#hero-banner").find(".item").length;
    $("#hero-banner").owlCarousel({
        animateOut: "fadeOutRight",
        animateIn: "fadeInLeft",
        dots: hero_banner > 1 ? false : false,
        nav: hero_banner > 1 ? true : false,
        touchDrag: hero_banner > 1 ? true : false,
        mouseDrag: hero_banner > 1 ? true : false,
        loop: hero_banner > 1 ? true : false,
        autoplay: hero_banner > 1 ? 3000 : false,
        autoplayHoverPause: hero_banner > 1 ? true : false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

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
        autoplay: gallery_items_banner > 1 ? 3000 : false,
        autoplayHoverPause: gallery_items_banner > 1 ? true : false,
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

    // Get Result
    $(".get-details").click(function() {
        $(".get-result-details").slideToggle("slow");
    });

    // Menu Click
    $(".menu").click(function() {
        $(this).toggleClass("change");
        $(".menu-list > ul").toggleClass("change");
        $(".menu-list").toggleClass("change-bg");
        $("body").toggleClass("overflow-hidden");
        $(".box-menu").toggleClass("wow animated");
        // $("#plan-journey > .pos-absolute").toggleClass("none");
    });

    /* Testimonial Carousel */
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

    // End bracket
});