document.addEventListener('DOMContentLoaded', function() {
    // Toggle navbar menu visibility
    var navbarToggle = document.getElementById('navbarToggle');
    var navbarMenu = document.getElementById('navbarMenu');

    navbarToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('show');
    });
});
