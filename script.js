const photosContainerRef = document.getElementById("photos-container");
const dialogRef = document.getElementById("dialog");
let myImgs = [
    ["anthony-x-graffiti-643065_1280.jpg", "Graffiti wall in Berlin"],
    ["erikstrehl-building-6888533_1280.jpg", "Modern building in Berlin"],
    ["hesamhassani-bridge-7728877_1280.jpg", "Bridge in Berlin"],
    ["michael_kastelic-woman-7977101_1280.jpg", "Portrait of a woman"],
    ["nicst-road-6975808_1280.jpg", "Road in Berlin"],
    ["noelsch-city-4468570_1280.jpg", "Berlin city view"],
    ["peterdargatz-berlin-wall-50730_1280.jpg", "Berlin Wall artwork"],
    ["st33lv0ll-berlin-4588073_1280.jpg", "Berlin street scene"],
    ["st33lv0ll-building-4679964_1280.jpg", "Modern building in Berlin"],
    ["st33lv0ll1-berlin-3958573_1280.jpg", "Berlin architecture"],
    ["wagneranne-berlin-5289802_1280.jpg", "Berlin landmark"],
    ["wal_172619-bridge-7770337_1280.jpg", "Bridge over the river in Berlin"],
    ["wal_172619-city-9599967_1280.jpg", "Berlin skyline"],
    ["wal_172619-museum-5400973_1280.jpg", "Museum in Berlin"],
    ["wal_172619-river-5887763_1280.jpg", "River in Berlin"],
    ["wal_172619-train-7779221_1280.jpg", "Train in Berlin"],
    ["wal_172619-train-9596810_1280.jpg", "Berlin train passing by"]
];
let myInterval;

// Load all images and add them to photos-container div

function init() {
    renderImgs()
}

function renderImgs() {
    for (let i = 0; i < myImgs.length; i++) {
    photosContainerRef.innerHTML += getNoteTemplate(i);
}
}

function getNoteTemplate(index) {

    return `<button class="photo-button" onclick="openDialog(${index})" aria-label="${myImgs[index][1]}">
                <img src="./ASSETS/images/${myImgs[index][0]}" alt="${myImgs[index][1]}">
            </button>`;
}

// Dialog functions

function getDialogHTML(i) {
    return `
     <header>
            <button type="button" onclick="closeDialog()" id="close-dialog-btn" aria-label="Close dialog">
                <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_63_506" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                <rect x="4" y="4" width="24" height="24" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_63_506)">
                <path d="M16 17.4L11.1 22.3C10.9167 22.4833 10.6834 22.575 10.4 22.575C10.1167 22.575 9.88338 22.4833 9.70005 22.3C9.51672 22.1167 9.42505 21.8833 9.42505 21.6C9.42505 21.3167 9.51672 21.0833 9.70005 20.9L14.6 16L9.70005 11.1C9.51672 10.9167 9.42505 10.6833 9.42505 10.4C9.42505 10.1167 9.51672 9.88334 9.70005 9.7C9.88338 9.51667 10.1167 9.425 10.4 9.425C10.6834 9.425 10.9167 9.51667 11.1 9.7L16 14.6L20.9 9.7C21.0834 9.51667 21.3167 9.425 21.6 9.425C21.8834 9.425 22.1167 9.51667 22.3 9.7C22.4834 9.88334 22.575 10.1167 22.575 10.4C22.575 10.6833 22.4834 10.9167 22.3 11.1L17.4 16L22.3 20.9C22.4834 21.0833 22.575 21.3167 22.575 21.6C22.575 21.8833 22.4834 22.1167 22.3 22.3C22.1167 22.4833 21.8834 22.575 21.6 22.575C21.3167 22.575 21.0834 22.4833 20.9 22.3L16 17.4Z" fill="white"/>
                </g>
                </svg>
            </button>
            <h2 id="dialog-title">${myImgs[i][1]}</h2>
        </header>

        <div class="photo-display-dialog" id="section">
            <img id="dialog-photo" src="./ASSETS/images/${myImgs[i][0]}" alt="${myImgs[i][1]}">
        </div>

        <footer class="dialog-footer">

            <div class="controls">
                <button type="button" onclick="playSlideshow(${i})">
                    <img src="./ASSETS/icons/play.svg" alt="Play slideshow">
                </button>

                <button type="button" onclick="pauseSlideshow()">
                    <img src="./ASSETS/icons/pause.svg" alt="Pause slideshow">
                </button>
            </div>

            <div class="arrays-index-container">
            <button type="button" onclick="showPreviousPhoto(${i})" id="previous-btn" aria-label="Previous photo">
                <svg aria-hidden="true" width="24" height="24" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.77824 18.6777C9.16877 19.0682 9.80193 19.0682 10.1925 18.6777C10.583 18.2871 10.583 17.654 10.1925 17.2634L3.41373 10.4847L20.5811 10.4847C21.1333 10.4847 21.5811 10.037 21.5811 9.48471C21.5811 8.93243 21.1333 8.48471 20.5811 8.48471L3.41484 8.48471L10.1925 1.7071C10.583 1.31657 10.583 0.683406 10.1925 0.29288C9.80194 -0.0976439 9.16877 -0.097644 8.77825 0.29288L0.319655 8.75147C0.122815 8.9341 -0.000365356 9.19502 -0.000365382 9.48471C-0.000365398 9.67361 0.0520123 9.85028 0.143037 10.001C0.184148 10.0692 0.234124 10.1335 0.292966 10.1924L8.77824 18.6777Z" fill="#FD5B4F"/>
            </svg>
            </button>
            <p>${i + 1}/${myImgs.length}</p>
            <button type="button" onclick="showNextPhoto(${i})" id="next-btn" aria-label="Next photo">
                <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.0118 2.80754C13.6213 2.41702 12.9881 2.41702 12.5976 2.80754C12.2071 3.19807 12.2071 3.83123 12.5976 4.22176L19.3763 11.0005H2.20898C1.6567 11.0005 1.20898 11.4482 1.20898 12.0005C1.20898 12.5528 1.6567 13.0005 2.20898 13.0005H19.3752L12.5976 19.7781C12.2071 20.1686 12.2071 20.8018 12.5976 21.1923C12.9881 21.5828 13.6213 21.5828 14.0118 21.1923L22.4704 12.7337C22.6672 12.5511 22.7904 12.2902 22.7904 12.0005C22.7904 11.8116 22.738 11.6349 22.647 11.4842C22.6059 11.416 22.5559 11.3517 22.4971 11.2928L14.0118 2.80754Z" fill="#FD5B4F"/>
                </svg>
            </button>
            </div>
        </footer>`;
}

function openDialog(i) {

    dialogRef.innerHTML = getDialogHTML(i);

    dialogRef.showModal();
}

function closeDialog() {
    pauseSlideshow();
    dialogRef.close();
}

function showPreviousPhoto(i) {

    if (i === 0) {
        openDialog(myImgs.length - 1);
    }
    else {
        openDialog(i - 1);
    }
}

function showNextPhoto(i) {

    if (i === myImgs.length - 1) {
        openDialog(0);
    }
    else {
        openDialog(i + 1);
    }
}

function playSlideshow(i) {
    myInterval = setInterval(function () {
        showNextPhoto(i);
        if (i === myImgs.length - 1) {
            i = 0;
        } else {
            i++;
        }     
    }, 1000);
}

function pauseSlideshow() {
    clearInterval(myInterval);
}

dialogRef.addEventListener("close", () => {
  pauseSlideshow();
});



