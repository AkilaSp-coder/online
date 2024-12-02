// Select elements
const buttons = document.querySelectorAll('.btn'); // Filter buttons
const boxes = document.querySelectorAll('.box'); // Items (fruits and vegetables)
const searchBox = document.querySelector('#search'); // Search input box

// Search functionality for the search box
searchBox.addEventListener('keyup', (e) => {
    const searchText = e.target.value.toLowerCase().trim();

    // Filter items based on the search text
    boxes.forEach((box) => {
        const altText = box.querySelector('img').alt.toLowerCase(); // Get the image's alt text
        const itemType = box.dataset.item.toLowerCase(); // Get the box's data-item attribute

        // Check if the search text matches the alt text or category (fruit/veg)
        if (altText.includes(searchText) || itemType.includes(searchText)) {
            box.style.display = 'block'; // Show matching items
            box.classList.add('search-highlight'); // Add highlight class
        } else {
            box.style.display = 'none'; // Hide non-matching items
            box.classList.remove('search-highlight'); // Remove highlight class
        }
    });

    // Reset button highlights when searching
    buttons.forEach((button) => button.classList.remove('btn-clicked'));
    buttons[0].classList.add('btn-clicked'); // Highlight the "ALL" button
});

// Button click event to filter items
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default behavior
        setActiveBtn(e); // Highlight the active button

        const filter = e.target.dataset.filter; // Get the filter type from the button

        // Filter items based on the button's filter type
        boxes.forEach((box) => {
            const item = box.dataset.item; // Get the box's data-item attribute
            if (filter === 'all' || item === filter) {
                box.style.display = 'block'; // Show matching items
                box.classList.remove('search-highlight'); // Remove search highlight
            } else {
                box.style.display = 'none'; // Hide non-matching items
            }
        });

        // Clear the search box when filtering by buttons
        searchBox.value = '';
    });
});

// Function to set the active button
function setActiveBtn(e) {
    buttons.forEach((button) => button.classList.remove('btn-clicked')); // Remove highlight from all buttons
    e.target.classList.add('btn-clicked'); // Highlight the clicked button
}
