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
const fotoMainRef = document.getElementById("main-foto");
const fotoDialogRef = document.getElementById("dialog-foto");
const dialogRef = document.getElementById("dialog");
const closeDialogBtnRef = document.getElementById("close-dialog-btn");
const fotoIndexRef = document.getElementById("foto-index");
const fotoNameDisplayRef = document.getElementById("foto-name-display");

// Load all images and add them to fotos-container div

for (let i = 0; i < myImgs.length; i++) {
    fotosContainerRef.innerHTML += getNoteTemplate(i);
}

function getNoteTemplate(index) {
    return `<img id="main-foto" onclick="openDialog(event)" src="./ASSETS/images/${myImgs[index]}">`;
}

// Dialog functions

function openDialog(e) {
    dialogRef.showModal();
    fotoDialogRef.src = e.target.src;
    showFotoName()
    showFotoIndex();
}

function closeDialog() {
    dialogRef.close();
}

function showFotoIndex() {
    fotoIndexRef.innerHTML = `${myImgs.indexOf(fotoDialogRef.src.slice(36))+1}/${myImgs.length}`;
}

function showPreviousFoto() {
    let i = myImgs.indexOf(fotoDialogRef.src.slice(36));
    
    if(i === 0){
        fotoDialogRef.src = "./ASSETS/images/" + myImgs[myImgs.length - 1];
    }
    else{
        fotoDialogRef.src = "./ASSETS/images/" + myImgs[i-1];
    }
    showFotoName()
    showFotoIndex();
}

function showNextFoto() {
    let i = myImgs.indexOf(fotoDialogRef.src.slice(36));
    
    if(i === myImgs.length - 1){
        fotoDialogRef.src = "./ASSETS/images/" + myImgs[0];
    }
    else{
        fotoDialogRef.src = "./ASSETS/images/" + myImgs[i+1];
    }
    showFotoName()
    showFotoIndex();
}
function showFotoName() {
    fotoNameDisplayRef.innerHTML = fotoDialogRef.src.slice(36);
}