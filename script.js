document.addEventListener("DOMContentLoaded", function() {
    var fadeText = document.getElementById("fade-text");
    var fadeInDelay = 500; 
    
    setTimeout(function() {
        fadeText.style.opacity = "1";
        fadeText.style.transform = "translateY(0)";
    }, fadeInDelay);
});

document.addEventListener("DOMContentLoaded", function() {
    var fadeText = document.getElementById("fade-text");
    var fadeInDelay = 500; 
    
    setTimeout(function() {
        fadeText.style.opacity = "1";
        fadeText.style.transform = "translateY(0)";
    }, fadeInDelay);
});

document.addEventListener("DOMContentLoaded", function() {
    var carousels = document.querySelectorAll(".proyecto-carousel");

    function collapseCarousel(carousel) {
        carousel.classList.remove("proyecto-expanded");
        document.removeEventListener("keydown", handleKeyPress);
        var closeCarouselButton = carousel.querySelector(".close-button");
        closeCarouselButton.style.display = "none"; // Oculta el botón al colapsar
    }

    function handleKeyPress(event) {
        if (event.key === "Escape") {
            var expandedCarousel = document.querySelector(".proyecto-carousel.proyecto-expanded");
            if (expandedCarousel) {
                collapseCarousel(expandedCarousel);
            }
        }
    }

    carousels.forEach(function(carousel) {
        var closeCarouselButton = carousel.querySelector(".close-button");
        
        closeCarouselButton.addEventListener("click", function() {
            var expandedCarousel = document.querySelector(".proyecto-carousel.proyecto-expanded");
            if (expandedCarousel) {
                collapseCarousel(expandedCarousel);
            }
        });

        var images = carousel.querySelectorAll("img");
        images.forEach(function(image) {
            image.addEventListener("click", function() {
                carousel.classList.toggle("proyecto-expanded");
                if (carousel.classList.contains("proyecto-expanded")) {
                    document.addEventListener("keydown", handleKeyPress);
                    closeCarouselButton.style.display = "block"; // Muestra el botón al expandir
                } else {
                    collapseCarousel(carousel);
                }
            });
        });
    });
});

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
