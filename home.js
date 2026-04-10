function registerNow() {
    window.open(
        "https://forms.gle/KTRBHsjNNxzNoGJz7",
        "_blank"
    );
}

function goHome() {
    window.location.href = "index.html";
}
// Highlight "How to Order" section if URL has #how-to-order with blinking effect
window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;
    if (hash === "#how-to-order") {
        const section = document.querySelector(hash);
        if (section) {
            // Scroll smoothly to the section
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Add blinking highlight class
            section.classList.add("highlight-blink");

            // Remove the class after animation ends (3s for 3 blinks)
            setTimeout(() => {
                section.classList.remove("highlight-blink");
            }, 3000);
        }
    }
});
