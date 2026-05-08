/* ============================================
   AVOLVE STUDIO — BOUTIQUE INTERACTION SYSTEM
   Purpose: Minimalist, smooth, high-fidelity experience.
   ============================================ */

// Note: type="module" handles defer/DOMContentLoaded automatically
initPreloader();
initNavigation();
initMobileMenu();
initScrollReveal();
initLenis();
initCountUp();
initContactForm();
initModal();

/* --- Preloader --- */
function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            document.body.style.overflow = 'visible';
        }, 1000);
    });

    // Fallback — ensures site reveals even if resources are slow
    setTimeout(() => {
        if (!preloader.classList.contains('fade-out')) {
            preloader.classList.add('fade-out');
            document.body.style.overflow = 'visible';
        }
    }, 2000);
}

/* --- Navigation --- */
function initNavigation() {
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }, { passive: true });
}

/* --- Mobile Menu --- */
function initMobileMenu() {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('mobile-menu');
    const links = menu.querySelectorAll('a');

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            menu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

/* --- Scroll Reveal --- */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

/* --- Count Up Animation --- */
function initCountUp() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    let counted = false;

    function animateCount(el) {
        const target = parseInt(el.dataset.count);
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);

            el.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = target; // Final value check
            }
        }

        requestAnimationFrame(update);
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !counted) {
                    counted = true;
                    counters.forEach(counter => animateCount(counter));
                    observer.disconnect();
                }
            });
        },
        { threshold: 0.5 }
    );

    counters.forEach(counter => observer.observe(counter));
}

/* --- Lenis Smooth Scroll --- */
function initLenis() {
    // Check if Lenis is loaded via CDN link
    if (typeof Lenis === 'undefined') return;

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                lenis.scrollTo(target, {
                    offset: -80,
                    duration: 1.5,
                });
            }
        });
    });
}

/* --- Contact Form Logic --- */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = form.querySelector('.submit-btn');
        const originalText = btn.innerText;

        btn.innerText = 'Sending Inquiry...';
        btn.disabled = true;

        // Gather form data for Web3Forms
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            });
            
            const result = await response.json();
            
            if (response.status === 200) {
                // Success state
                btn.innerText = 'Inquiry Received. Talk Soon.';
                btn.style.backgroundColor = '#000';
                btn.style.color = '#fff';
            } else {
                // Error from API
                console.log(result);
                btn.innerText = 'Something went wrong.';
                btn.style.backgroundColor = '#ff3333';
                btn.style.color = '#fff';
            }
        } catch (error) {
            // Network error
            console.log(error);
            btn.innerText = 'Network Error. Try again.';
            btn.style.backgroundColor = '#ff3333';
            btn.style.color = '#fff';
        }

        // Reset button and form after delay
        setTimeout(() => {
            if (btn.innerText === 'Inquiry Received. Talk Soon.') {
                form.reset();
            }
            btn.innerText = originalText;
            btn.disabled = false;
            btn.style.backgroundColor = '';
            btn.style.color = '';
        }, 4000);
    });
}

/* --- Modal Logic --- */
function initModal() {
    const modal = document.getElementById('tnc-modal');
    const openBtn = document.getElementById('open-tnc');
    const closeBtn = document.getElementById('close-tnc');

    if (!modal || !openBtn || !closeBtn) return;

    function openModal() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}
