// Get the modal elements
const androidModal = document.getElementById("androidModal");
const windowsChoiceModal = document.getElementById("windowsChoiceModal"); // New
const bedrockModal = document.getElementById("bedrockModal");           // New
const switcherModal = document.getElementById("switcherModal");         // New

// Get the buttons that open the modals
const androidBtn = document.getElementById("androidBtn");
const windowsBtn = document.getElementById("windowsBtn");

// Get buttons inside the Windows choice modal
const selectBedrockBtn = document.getElementById("selectBedrockBtn");   // New
const selectSwitcherBtn = document.getElementById("selectSwitcherBtn"); // New

// Get all elements that close the modals (close buttons)
const closeBtns = document.querySelectorAll(".close-btn");

// Function to open a specific modal
function openModal(modal) {
    if (modal) {
        modal.style.display = "block";
    }
}

// Function to close a specific modal
function closeModal(modal) {
    if (modal) {
        modal.style.display = "none";
    }
}

// --- Event Listeners ---

// When the user clicks the Android button, open the Android modal
androidBtn.onclick = function() {
    openModal(androidModal);
}

// When the user clicks the Windows button, open the NEW Windows CHOICE modal
windowsBtn.onclick = function() {
    openModal(windowsChoiceModal);
}

// When the user clicks the "Minecraft Bedrock" button in the choice modal
selectBedrockBtn.onclick = function() {
    closeModal(windowsChoiceModal); // Close choice modal
    openModal(bedrockModal);        // Open Bedrock modal
}

// When the user clicks the "Version Switcher" button in the choice modal
selectSwitcherBtn.onclick = function() {
    closeModal(windowsChoiceModal); // Close choice modal
    openModal(switcherModal);       // Open Switcher modal
}

// Add event listeners to ALL close buttons (including new modals)
closeBtns.forEach(btn => {
    btn.onclick = function() {
        const modalId = this.getAttribute('data-modal');
        const modalToClose = document.getElementById(modalId);
        closeModal(modalToClose);
    }
});

// When the user clicks anywhere outside of a modal's content, close the corresponding modal
window.onclick = function(event) {
    if (event.target == androidModal) {
        closeModal(androidModal);
    }
    if (event.target == windowsChoiceModal) {
        closeModal(windowsChoiceModal);
    }
    if (event.target == bedrockModal) {
        closeModal(bedrockModal);
    }
    if (event.target == switcherModal) {
        closeModal(switcherModal);
    }
}

// Optional: Close modal with Escape key (updated for new modals)
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        if (androidModal.style.display === 'block') {
            closeModal(androidModal);
        }
        if (windowsChoiceModal.style.display === 'block') {
            closeModal(windowsChoiceModal);
        }
        if (bedrockModal.style.display === 'block') {
            closeModal(bedrockModal);
        }
        if (switcherModal.style.display === 'block') {
            closeModal(switcherModal);
        }
    }
});
