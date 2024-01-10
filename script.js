document.addEventListener("DOMContentLoaded", function () {
    // Get all paragraphs with the "hidden" class
    var paragraphs = document.querySelectorAll(".animated-text p.hidden");

    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle the scroll event
    function handleScroll() {
        paragraphs.forEach(function (paragraph) {
            if (isElementInViewport(paragraph)) {
                paragraph.classList.add("visible");
            }
        });
    }

    // Attach the handleScroll function to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Trigger the handleScroll function on page load
    handleScroll();
});





$(document).ready(function () {
    $('[data-fancybox="images"]').fancybox({
        buttons: [
            'zoom',
            'slideShow',
            'thumbs',
            'share',
            'close'
        ],
        loop: true,
        animationEffect: "zoom-in-out"
    });
});

