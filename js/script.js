$(document).ready(function () {
    $("#menu").click(function () {
        $(this).toggleClass("fa-times");
        $("header").toggleClass("toggle");
    });

    $(window).on("scroll load", function () {
        $("#menu").removeClass("fa-times");
        $("header").removeClass("toggle");

        if ($(window).scrollTop() > 0) {
            $(".top").show();
        } else {
            $(".top").hide();
        }
    });

    // detect resize
    function handleResize() {}
    $(window).resize(function () {
        if ($(window).width() > 500) {
            $("section").removeClass("on-mobile");
            $("#sidebar").addClass("show");
            $("section").addClass("hidden");
            $("#home").addClass("show");
        }
    });

    // handle click
    $(".nav-link").click(function (e) {
        $(".nav-link").css({
            color: "#000",
            background: "#fff",
        });
        $(this).css({
            color: "beige",
            background: "#00bcd4",
        });

        if ($(window).width() < 500) {
            $("#sidebar").removeClass("show");
            $("section").removeClass("show").removeClass("hidden");
            $("section").addClass("on-mobile");
        }
    });

    // smooth scrolling
    $('a[href*="#"]').on("click", function (e) {
        e.preventDefault();

        $("html, body").animate(
            {
                scrollTop: $($(this).attr("href")).offset().top,
            },
            500,
            "linear"
        );
    });

    $('a[id="download-link"]').click(function (e) {
        e.preventDefault();
        window.location.href = "cv.pdf";
    });

    // scroll animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
});
