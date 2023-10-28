// Keep track of the current open dropdown
let currentDropdown = null;

document.querySelectorAll('#mainMenu li').forEach(item => {
    item.addEventListener('click', event => {
        // Hide all dropdowns first
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            dropdown.style.display = 'none';
        });

        let dropdown = item.querySelector('.dropdown-content');
        if (dropdown) {
            if (currentDropdown === dropdown) {
                // If clicked on the same dropdown, hide it and set currentDropdown to null
                dropdown.style.display = 'none';
                currentDropdown = null;
            } else {
                // Otherwise, show clicked dropdown and update currentDropdown
                dropdown.style.display = 'block';
                currentDropdown = dropdown;
            }
        }
        event.stopPropagation();  // Stop event from reaching the document level
    });
});

// Hide dropdown if clicked anywhere else on the document
document.addEventListener('click', () => {
    if (currentDropdown) {
        currentDropdown.style.display = 'none';
        currentDropdown = null;
    }
});