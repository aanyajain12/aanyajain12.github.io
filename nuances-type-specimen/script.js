// Get the text element and all columns
const dynamicText = document.getElementById('dynamic-text');
const columns = document.querySelectorAll('.column');

// Add hover events to each column
columns.forEach((column) => {
    // Store the text to display on hover
    const hoverText = column.getAttribute('data-text');

    // On mouse enter: change text and reduce size
    column.addEventListener('mouseenter', () => {
        dynamicText.textContent = hoverText;
        dynamicText.style.fontSize = '150px'; // Reduced size
    });

    // On mouse leave: reset text and size
    column.addEventListener('mouseleave', () => {
        dynamicText.textContent = 'NUANCES';
        dynamicText.style.fontSize = '200px'; // Original size
    });
});
