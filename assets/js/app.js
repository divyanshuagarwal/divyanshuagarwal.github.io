const navigation = document.querySelector('.glass-nav');
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

if (navigation && toggle && links) {
    const setMenu = (open) => {
        toggle.setAttribute('aria-expanded', String(open));
        navigation.classList.toggle('menu-open', open);
        toggle.querySelector('span').textContent = open ? '−' : '+';
    };

    navigation.classList.add('nav-enhanced');
    toggle.hidden = false;
    toggle.addEventListener('click', () => {
        setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    links.addEventListener('click', (event) => {
        if (event.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
            setMenu(false);
            toggle.focus();
        }
    });
    document.addEventListener('click', (event) => {
        if (!navigation.contains(event.target)) setMenu(false);
    });
    window.matchMedia('(max-width: 768px)').addEventListener('change', () => setMenu(false));
}
