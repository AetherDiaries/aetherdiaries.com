const numPortraits = document.getElementById("numPortraits");
const priceBox = document.getElementById("priceBox");

const disabledElementColour = '#969696';
const prices = {
    basic: 199,
    standard: 330,
    framingFees: {
    a4: 120,
    cartridge: 150,
    },
};

function toggleInputLabels(typeName, toggleState){
    document.querySelectorAll(`input[name="${typeName}"]`).forEach(radio => {
        const label = document.querySelector(`label[for="${radio.id}"]`);
        if (toggleState){
            label.style.borderColor = '#000000';
            label.style.color="";
            if (radio.checked) {label.style.backgroundColor = '#000000';}
            else {label.style.backgroundColor = "";}
        } else {
            label.style.borderColor = disabledElementColour;
            if (radio.checked) {label.style.backgroundColor = disabledElementColour;}
            else {
                label.style.backgroundColor = "";
                label.style.color=disabledElementColour;}
        }
    });
}

function checkValues(){
    let po, p, fc;
    document.querySelectorAll('input[name="optionType"]').forEach((radio) => {if (radio.checked) {po = radio.value;}});
    document.querySelectorAll('input[name="paperType"]').forEach((radio) => {if (radio.checked) {p = radio.value;}});
    document.querySelectorAll('input[name="framingDecision"]').forEach((radio) => {if (radio.checked) {fc = radio.value;}});
    const portraits = parseInt(numPortraits.value);
    const ff = Boolean(fc) && Boolean(p) ? prices.framingFees[p] : 0;
    return [po, portraits, ff];
}

function updatePrice() {
    let [portraitOption, portraits, framingFee] = checkValues();
    
    toggleInputLabels("paperType", true);
    toggleInputLabels("framingDecision", true);
    numPortraits.style.color = "";
    numPortraits.disabled = false;
    
    if (portraitOption === "custom") {
        //Freeze All options for Custom
        numPortraits.style.color = disabledElementColour;
        numPortraits.disabled = true;
        toggleInputLabels("paperType", false);
        toggleInputLabels("framingDecision", false);
        
        priceBox.innerHTML = "Custom<br>(Contact Artist/Place the order)";
        return;
    }
    
    
    let price = 0;
    
    if (portraitOption === "basic") {
        document.getElementById('paperA4').checked = true;
        numPortraits.value = "1";
        numPortraits.style.color = disabledElementColour;
        numPortraits.disabled = true;
        toggleInputLabels("paperType", false);
        [, portraits, framingFee] = checkValues();
        price = portraits * prices.basic + framingFee;
    } else if (portraitOption === "standard") {
        price = portraits * prices.standard + framingFee;
    }

    const upfrontPayment = portraitOption === "basic" ? price : Math.floor(price * 0.5);

    priceBox.innerHTML = `
        <div>&#8377;${price}</div>
        <u style = "font-size: 14px;">Upfront: &#8377;${upfrontPayment}</u>
        `;
}

document.querySelectorAll('input[type="radio"]').forEach((radio) => {radio.addEventListener("change", updatePrice);});
numPortraits.addEventListener("input", updatePrice);

updatePrice();