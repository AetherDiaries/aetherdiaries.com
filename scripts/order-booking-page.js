const toggleButton = document.getElementById("toggleButton");
const priceCalculatorPanel = document.getElementById("priceCalculatorPanel");

toggleButton.addEventListener("click", () => {priceCalculatorPanel.classList.toggle("open");});

function adjustIframeHeight() {
    const header = document.querySelector('header');
    const iframe = document.getElementById('orderRequestForm');

    iframe.style.height = `calc(100vh - ${header.offsetHeight}px)`;
}

adjustIframeHeight();
window.addEventListener('load', adjustIframeHeight);
window.addEventListener('resize', adjustIframeHeight);