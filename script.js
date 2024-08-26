document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll(".slideshow img");
    let currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].classList.remove("active");
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    setInterval(function() {
        showSlide(currentSlide + 1);
    }, 5000);
});

function redirectTo(url) {
    window.location.href = url;
}

function enlargeImage(img) {
    img.style.transform = "scale(1.1)";
    img.style.transition = "transform 0.3s ease";
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showMap() {
    alert("Harita görüntüsü burada gösterilecek.");
}
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('nav ul.menu').classList.toggle('show');
    });
