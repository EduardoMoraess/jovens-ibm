function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

const menuBtn = document.getElementById('mobile-menu-btn');
menuBtn.addEventListener('click', toggleMenu);