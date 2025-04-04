// Get the main container (home page)
const mainContainer = document.querySelector('.main-container');

// Get the modal elements
const androidModal = document.getElementById("androidModal");
const windowsChoiceModal = document.getElementById("windowsChoiceModal");
const bedrockModal = document.getElementById("bedrockModal");
const switcherModal = document.getElementById("switcherModal");

// Get the buttons that open the modals
const androidBtn = document.getElementById("androidBtn");
const windowsBtn = document.getElementById("windowsBtn");

// Get buttons inside the Windows choice modal
const selectBedrockBtn = document.getElementById("selectBedrockBtn");
const selectSwitcherBtn = document.getElementById("selectSwitcherBtn");

// Get all elements that close the modals (close buttons)
const closeBtns = document.querySelectorAll(".close-btn");

// Function to update the home page visibility based on open modals
function updateHomeVisibility() {
  const modals = document.querySelectorAll('.modal');
  let anyOpen = false;
  modals.forEach(modal => {
    if(modal.style.display === "block") {
      anyOpen = true;
    }
  });
  mainContainer.style.display = anyOpen ? "none" : "block";
}

// Function to open a specific modal and hide the home page
function openModal(modal) {
  if (modal) {
    modal.style.display = "block";
    updateHomeVisibility();
  }
}

// Function to close a specific modal and show the home page if no modal is open
function closeModal(modal) {
  if (modal) {
    modal.style.display = "none";
    updateHomeVisibility();
  }
}

// --- Event Listeners ---

// When the user clicks the Android button, open the Android modal
androidBtn.onclick = function() {
  openModal(androidModal);
}

// When the user clicks the Windows button, open the Windows Choice modal
windowsBtn.onclick = function() {
  openModal(windowsChoiceModal);
}

// When the user clicks the "Minecraft Bedrock" button in the choice modal
selectBedrockBtn.onclick = function() {
  closeModal(windowsChoiceModal); // Close choice modal
  openModal(bedrockModal);         // Open Bedrock modal
}

// When the user clicks the "Version Switcher" button in the choice modal
selectSwitcherBtn.onclick = function() {
  closeModal(windowsChoiceModal); // Close choice modal
  openModal(switcherModal);        // Open Switcher modal
}

// Add event listeners to all close buttons
closeBtns.forEach(btn => {
  btn.onclick = function() {
    const modalId = this.getAttribute('data-modal');
    const modalToClose = document.getElementById(modalId);
    closeModal(modalToClose);
  }
});

// When the user clicks anywhere outside of a modal's content, close that modal
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
