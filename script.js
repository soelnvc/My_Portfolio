// script.js (FINAL VERSION with Hot Corner Functionality)

// --- DARK MODE LOGIC (PRESERVED) ---
function toggleDarkMode() {
    const body = document.body;
    const buttonIcon = document.getElementById('mode-toggle').querySelector('i');
    
    // Toggles the 'dark-mode' class on the body (CSS transitions handle color changes)
    body.classList.toggle('dark-mode'); 
    
    // 1. Reset the icon's rotation instantly to prepare for the spin effect
    buttonIcon.style.transform = 'rotate(0deg)';

    // 2. Use a short timeout to apply the icon change and rotation after a slight delay
    // This allows the initial rotation to start and gives a smooth feeling.
    setTimeout(() => {
        // Change the icon class
        if (body.classList.contains('dark-mode')) {
            buttonIcon.classList.remove('fa-moon');
            buttonIcon.classList.add('fa-sun');
            // Add rotation class (CSS will animate the 360deg transform)
            buttonIcon.style.transform = 'rotate(360deg)';
        } else {
            buttonIcon.classList.remove('fa-sun');
            buttonIcon.classList.add('fa-moon');
            // Remove rotation (CSS will animate the 360deg back to 0deg)
        }
    }, 10); 
}

// --- MENU CONTROL FUNCTIONS (REFACTORED) ---
function openMenu() {
    const nav = document.getElementById('main-nav');
    if (!nav.classList.contains('nav-open')) {
        nav.classList.add('nav-open');
    }
}

function closeMenu() {
    const nav = document.getElementById('main-nav');
    if (nav.classList.contains('nav-open')) {
        nav.classList.remove('nav-open');
    }
}

// Logo Click Functionality (Called via onclick="toggleMenu()" in HTML)
function toggleMenu() {
    const nav = document.getElementById('main-nav');
    if (nav.classList.contains('nav-open')) {
        closeMenu();
    } else {
        openMenu();
    }
}

// Optional: Close the menu when a link is clicked
document.querySelectorAll('#main-nav a').forEach(link => {
    link.addEventListener('click', closeMenu);
});


// --- HOTSPOT / HOVER LISTENER (NEW FUNCTIONALITY) ---
document.addEventListener('DOMContentLoaded', () => {
    const hotspot = document.getElementById('menu-hotspot');
    const nav = document.getElementById('main-nav');

    if (hotspot && nav) {
        // 1. Hover-to-Open (Hotspot) - When mouse enters the narrow left strip
        hotspot.addEventListener('mouseenter', openMenu);
        
        // 2. Hover-to-Close (Menu) - When mouse leaves the sidebar menu itself
        nav.addEventListener('mouseleave', closeMenu);
    }
});
