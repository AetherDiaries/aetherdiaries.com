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

navPriceButton.addEventListener('click', () => pricingChartButton.click());

document.getElementById('closePricingDetails'). onclick = pricingChart.click();

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

const toggleOverlay = (hovered, target, source="", text = "") => {
    target.style.border = hovered ? "none" : "";
    const imgSample = target.querySelector(".overlaySample");
    target.classList.toggle("dimmed", hovered);
    
    imgSample.innerHTML = hovered ? `Sample<div style = "display: block; font-size: 14px;">${text}</div>` : "";
    imgSample.style.width = hovered ? "100%" : "0";
    imgSample.style.height = hovered ? "100%" : "0";
    imgSample.style.transform = hovered ? source==="p1" ? "rotateY(-15deg)" : "rotateY(15deg)" : "";
    imgSample.style.opacity = hovered ? "1" : "0";
};

const panel1 = document.getElementById("panel1");
const panel2 = document.getElementById("panel2");

panel1.addEventListener("mouseenter", () => toggleOverlay(true, panel2, "p1", "(Standard)"));
panel1.addEventListener("mouseleave", () => toggleOverlay(false, panel2));
panel2.addEventListener("mouseenter", () => toggleOverlay(true, panel1, "p2", "(Custom)"));
panel2.addEventListener("mouseleave", () => toggleOverlay(false, panel1));