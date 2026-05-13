// Load all images and add them to fotos-container div

let myImgs = [
  "anthony-x-graffiti-643065_1280.jpg",
  "erikstrehl-building-6888533_1280.jpg",
  "hesamhassani-bridge-7728877_1280.jpg",
  "michael_kastelic-woman-7977101_1280.jpg",
  "nicst-road-6975808_1280.jpg",
  "noelsch-city-4468570_1280.jpg",
  "peterdargatz-berlin-wall-50730_1280.jpg",
  "st33lv0ll-berlin-4588073_1280.jpg",
  "st33lv0ll-building-4679964_1280.jpg",
  "st33lv0ll1-berlin-3958573_1280.jpg",
  "wagneranne-berlin-5289802_1280.jpg",
  "wal_172619-bridge-7770337_1280.jpg",
  "wal_172619-city-9599967_1280.jpg",
  "wal_172619-museum-5400973_1280.jpg",
  "wal_172619-river-5887763_1280.jpg",
  "wal_172619-train-7779221_1280.jpg",
  "wal_172619-train-9596810_1280.jpg"
];

const fotosContainerRef = document.getElementById("fotos-container");
const dialogRef = document.getElementById("dialog");
const closeDialogBtnRef = document.getElementById("close-dialog-btn");

for (let i = 0; i < myImgs.length; i++) {
    fotosContainerRef.innerHTML += getNoteTemplate(i);
}

function getNoteTemplate(index) {
    return `<img onclick="openDialog()" src="./ASSETS/images/${myImgs[index]}">`;
}

function openDialog() {
    dialogRef.showModal();
}

function closeDialog() {
    dialogRef.close();
}
