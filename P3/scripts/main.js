document.querySelectorAll('#mainMenu li').forEach(item => {
    item.addEventListener('click', event => {
        let dropdown = item.querySelector('.dropdown-content');
        if (dropdown) {
            let display = dropdown.style.display;
            dropdown.style.display = display === 'block' ? 'none' : 'block';
        }
    });
});
