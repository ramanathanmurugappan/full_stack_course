document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 10) {
        header.style.backgroundColor = '#444';
    } else {
        header.style.backgroundColor = '#333';
    }
});
