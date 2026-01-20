// Accordion Functionality
const accParams = document.querySelectorAll(".accordion-btn");

accParams.forEach(acc => {
    acc.addEventListener("click", function () {
        // Toggle active class
        this.classList.toggle("active");

        // Toggle panel visibility
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});

// Coach Modal Functionality
const modal = document.getElementById("coach-modal");
const btn = document.getElementById("contact-coach-btn");
const closeBtn = document.querySelector(".close-btn");

if (btn) {
    btn.onclick = function () {
        modal.style.display = "flex";
    }
}

if (closeBtn) {
    closeBtn.onclick = function () {
        modal.style.display = "none";
    }
}

// Close when clicking outside
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
