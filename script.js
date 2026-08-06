/**
 * Custom Scripts for Novopept Bio Tech Clone (Multi-Page)
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Header on Scroll
    const header = document.getElementById('header');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();

    // 2. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const closeMenu = document.getElementById('close-menu');
    const mobileOverlay = document.getElementById('mobile-menu-overlay');

    const openMobileMenu = () => {
        mobileOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    const closeMobileMenu = () => {
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    };

    if (mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
    if (closeMenu) closeMenu.addEventListener('click', closeMobileMenu);

    // 3. Mobile Dropdown Toggle
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    mobileDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const submenu = toggle.nextElementSibling;
            if (submenu.style.display === 'none') {
                submenu.style.display = 'block';
                toggle.querySelector('i').classList.replace('fa-caret-down', 'fa-caret-up');
            } else {
                submenu.style.display = 'none';
                toggle.querySelector('i').classList.replace('fa-caret-up', 'fa-caret-down');
            }
        });
    });

    // 4. Mark active menu item based on current URL
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const allLinks = document.querySelectorAll('.nav-link, .dropdown-item, .mobile-nav-link');
    
    allLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
            
            // If it's a dropdown item, also highlight the parent
            if (link.classList.contains('dropdown-item')) {
                const parentNav = link.closest('.dropdown').querySelector('.nav-link');
                if (parentNav) parentNav.classList.add('active');
            }
        }
    });
});

    // 5. FAQ Toggle (Accordion)
    const faqItems = document.querySelectorAll('.faq-item label');
    faqItems.forEach(label => {
        label.addEventListener('click', () => {
            const content = label.nextElementSibling;
            const icon = label.querySelector('i');
            
            // Toggle current
            if (content.style.display === 'none' || !content.style.display) {
                content.style.display = 'block';
                if (icon) {
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                }
                label.parentElement.classList.add('active');
            } else {
                content.style.display = 'none';
                if (icon) {
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                }
                label.parentElement.classList.remove('active');
            }
        });
    });
