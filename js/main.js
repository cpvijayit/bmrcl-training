$(document).ready(function() {
    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    //Build a Scene
    var scene = new ScrollMagic.Scene({
            triggerElement: '#play'
        })
        .setClassToggle('#play', 'fade-in')
        .addIndicators() // this Indicates the Start and Trigger Element
        .addTo(controller);
});