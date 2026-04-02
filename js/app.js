document.addEventListener('DOMContentLoaded', () => {
    console.log('Sistema en línea');

    const btnPortfolio = document.getElementById('btn-portfolio');
    const btnContact = document.getElementById('btn-contact');
    const btnProjects = document.getElementById('btn-projects');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const contactForm = document.getElementById('contact-form');
    const offset = 120;

    const smoothScroll = (targetId) => {
        const target = document.getElementById(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - offset,
                behavior: 'smooth',
            });
        }
    };

    if (btnPortfolio) {
        btnPortfolio.addEventListener('click', () => smoothScroll('portfolio'));
    }

    if (btnContact) {
        btnContact.addEventListener('click', () => smoothScroll('contact'));
    }

    if (btnProjects) {
        btnProjects.addEventListener('click', () => {
            console.log('Navegando a la sección de proyectos...');
            smoothScroll('projects');
        });
    }

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const business = document.getElementById('business').value;
            const message = document.getElementById('message').value;

            const phone = '50661540111'; 

            const text = `Hola, mi nombre es ${name}%0ANegocio: ${business}%0AMensaje: ${message}`;

            window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
        });
    }
});


