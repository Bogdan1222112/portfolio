document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-list__link');

    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('.nav').offsetHeight,
                behavior: 'smooth'
            });
        });
    }
});

const btnDarkMode = document.querySelector('.dark-mode-btn');
const header = document.querySelector('header');
const body = document.body; 

btnDarkMode.onclick = function() {
    btnDarkMode.classList.toggle('dark-mode-btn--active');
    const isLightTheme = body.classList.toggle('light-theme');
    
    // Toggle background image for the header
    header.style.backgroundImage = isLightTheme 
        ? "url('img/header-bg-light.png')" 
        : "url('img/header-bg-dark.png')";
    
    // Update icon visibility based on theme
    document.querySelectorAll('.dark-icon').forEach(icon => {
        icon.style.display = isLightTheme ? 'none' : 'inline';
    });
    document.querySelectorAll('.light-icon').forEach(icon => {
        icon.style.display = isLightTheme ? 'inline' : 'none';
    });
};
