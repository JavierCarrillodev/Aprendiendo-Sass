// Detectar la posición de scroll y cambiar la clase activa en el menú
window.addEventListener('scroll', function() {
    // Obtener todas las secciones
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('#nav ul li a');

    let currentSection = '';

    // Verificar en qué sección está el usuario
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 2 && window.scrollY < sectionTop + sectionHeight - 1) {
            currentSection = section.getAttribute('id');
        }
    });

    // Remover la clase 'active' de todos los enlaces
    links.forEach(link => {
        link.classList.remove('active');
        // Añadir la clase 'active' al enlace correspondiente
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});
