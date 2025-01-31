$(document).ready(function () {
    // Function to check scroll position and apply sticky class
    function checkScroll() {
        if ($(window).scrollTop() > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if ($(window).scrollTop() > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    }

    // Run checkScroll on page load & while scrolling
    checkScroll();
    $(window).scroll(checkScroll);

    // Slide-up script
    $('.scroll-up-btn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, "fast");
        $('html').css("scrollBehavior", "auto");
    });

    // Smooth scroll for navbar menu links
    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing text animation script
    var typed1 = new Typed(".typing", {
        strings: ["Web Designer", "Developer", "Freelancer", "Song Writer 🎼"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Web Designer", "Developer", "Freelancer", "Song Writer 🎼"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl Carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000, // Corrected property name
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1, nav: false },
            600: { items: 2, nav: false },
            1000: { items: 3, nav: false }
        }
    });
});
