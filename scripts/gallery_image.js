const galleryGrid = document.getElementById("gallery-grid");
const p1 = document.getElementById('page1');
const p2 = document.getElementById('page2');
const theBlanks = document.getElementById('transitionSheet');
const displayImage = p2.querySelector('img');
const bodyStyle = document.querySelector('body').style;
const defaultBodyPaddingTop = bodyStyle.paddingTop;

fetch('images.json').then(response => response.json()).then(data => {
    const { basePath, images } = data;

    Object.entries(images).forEach(([fileName, altText]) => {
        //Grid-Items
        const div = document.createElement("div");

        const img = document.createElement("img");
        img.src = basePath + fileName;
        img.alt = altText;

        const overlayDiv = document.createElement("div");
        const span = document.createElement("span");
        span.textContent = img.alt;

        div.appendChild(img);
        div.appendChild(overlayDiv);
        div.appendChild(span);

        //Image Display Transitions
        div.addEventListener('click', () => {
            p2.querySelector('span').textContent = img.alt;
            displayImage.src = img.src;

            theBlanks.style.transform = 'translateX(0)';
            theBlanks.style.background = "black";
            setTimeout(() => {
                p1.classList.add('onActive');
                p2.classList.remove('onActive');
                bodyStyle.paddingTop = 0;
            }, 400);
        });

        galleryGrid.appendChild(div);
    });
}).catch(error => console.error("Error loading images:", error));

const returnButton = p2.querySelector('button');

returnButton.onclick = () =>{
    p1.classList.remove('onActive');
    p2.classList.add('onActive');
    setTimeout(() => {
        theBlanks.style.background = 'var(--baseColor)';
        theBlanks.style.transform = 'translateX(100%)';
        bodyStyle.paddingTop = defaultBodyPaddingTop;
    }, 400);
};