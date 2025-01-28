const pricingChart = document.getElementById('pricingDetails');
const pricingChartButton = document.querySelector('#pricing-button>input');
const toggleFadeElements = document.querySelectorAll('.toggle-fade');
const navPriceButton = document.getElementById('nav-price-chart');
const defaultPanelStyle = pricingChart.style;
const shiftValue = "30px";
const pricingChartNewStyles = {
    transform: "translateY(-15vh)",
    borderRadius: "13px",
    backgroundColor: "rgba(0, 0, 0, 0.4)"
};

navPriceButton.addEventListener('click', () => {
    pricingChartButton.click();
});

function pricingDetailsReveal() {
    const pricingChartChild = pricingChart.firstElementChild;

    if (pricingChartButton.checked) {
        Object.assign(pricingChart.style, pricingChartNewStyles);
        if(pricingChartChild){pricingChartChild.style.opacity = '1';}
        
        // Fade out
        toggleFadeElements.forEach(toggleFadeElement => {
            toggleFadeElement.style.opacity = 0;
            toggleFadeElement.style.transform = toggleFadeElement.hasAttribute('data-left') ? `translateX(-${shiftValue})` : `translateX(${shiftValue})`;
        });
        
    } else {
        pricingChart.style = defaultPanelStyle;
        if(pricingChartChild){pricingChartChild.style.opacity = '';}

        // Fade in
        toggleFadeElements.forEach(toggleFadeElement => {
            toggleFadeElement.style.opacity = 1;
            toggleFadeElement.style.transform = `translateX(0)`;
        });
    }
}

pricingChartButton.addEventListener('change', pricingDetailsReveal);
const pricingChartDetails = pricingDetails.innerHTML;

function handleResize() {
    const pricingDetails = document.getElementById("pricingDetails");
    
    if (window.innerWidth < 1400) {
        pricingDetails.innerHTML = `
        <div class="mobile-message">The pricing chart is unavailable for small screens. Please view on a larger device or visit<br><br>------>>> <a href="order.html" target ="_blank" rel = "noopener noreferrer">ORDER<a>
        </div>
        `;
    } else {
        pricingDetails.innerHTML = pricingChartDetails;
    }
}

handleResize();
window.addEventListener("resize", handleResize);