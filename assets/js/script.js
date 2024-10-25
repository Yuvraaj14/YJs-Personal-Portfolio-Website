$(document).ready(function () {
    // Menu toggle for mobile
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Scroll load for menu and scroll-top button
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // Scroll spy for section highlighting
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // Smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });

    // EmailJS for contact form submission
    $("#contact-form").submit(function (event) {
        event.preventDefault(); // Prevent default form submission

        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm"); // Initialize with your user ID

        emailjs.sendForm('contact_service', 'template_contact', this)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                $("#contact-form").trigger("reset");
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
    });

    // Dynamic page title change on visibility
    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Yuvraaj M N";
            $("#favicon").attr("href", "assets/images/favicon.png");
        } else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });

    // Typed.js effect for rotating text
    var typed = new Typed(".typing-text", {
        strings: ["artificial intelligence", "data science", "machine learning", "big data", "deep learning"],
        loop: true,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500,
    });

    // Scroll reveal animation setup
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    // Reveal elements on scroll
    const scrollRevealSections = [
        { selector: '.home .content h3', delay: 200 },
        { selector: '.home .content p', delay: 200 },
        { selector: '.home .content .btn', delay: 200 },
        { selector: '.home .image', delay: 400 },
        { selector: '.about .content h3', delay: 200 },
        { selector: '.about .content p', delay: 200 },
        { selector: '.skills .container', interval: 200 },
        { selector: '.work .box', interval: 200 },
        { selector: '.contact .container', delay: 400 }
    ];

    scrollRevealSections.forEach(({ selector, delay, interval }) => {
        srtop.reveal(selector, { delay: delay || 0, interval: interval || 0 });
    });

    // Tilt.js effect for images/cards
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });

    // Start Tawk.to Live Chat
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    })();
});

// Disable developer mode (Optional)
document.onkeydown = function (e) {
    if ([123, 73, 67, 74, 85].includes(e.keyCode) && (e.ctrlKey || e.shiftKey)) {
        return false;
    }
}
