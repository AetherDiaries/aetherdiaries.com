const pricingChart = document.getElementById('pricingDetails');
const pricingChartButton = document.querySelector('#pricing-button>input');
const toggleFadeElements = document.querySelectorAll('.toggle-fade');
const navPriceButton = document.getElementById('nav-price-chart');
const defaultPanelStyle = pricingChart.style;
const shiftValue = "30px";

navPriceButton.addEventListener('click', () => {
    pricingChartButton.click();
});

pricingChartButton.addEventListener('change', () => {
    if (pricingChartButton.checked) {
        pricingChart.style.transform = "translateY(-15vh)";
        pricingChart.style.borderRadius = "13px";
        pricingChart.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
        // Fade out
        toggleFadeElements.forEach(toggleFadeElement => {
            toggleFadeElement.style.opacity = 0;
            if (toggleFadeElement.hasAttribute('data-left')) {
                toggleFadeElement.style.transform = `translateX(-${shiftValue})`;
            } else {
                toggleFadeElement.style.transform = `translateX(${shiftValue})`;
            }
        });
        
    } else {
        pricingChart.style = defaultPanelStyle;
        // Fade in
        toggleFadeElements.forEach(toggleFadeElement => {
            toggleFadeElement.style.opacity = 1;
            toggleFadeElement.style.transform = `translateX(0)`;
        });
    }
});