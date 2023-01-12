
//recettes
const recette2txt1 = document.querySelector('.recette2-0l1');
const recette2txt2 = document.querySelector('.recette2-0l2');

const recette3txt1 = document.querySelector('.recette3-0l1');
const recette3txt2 = document.querySelector('.recette3-0l2');

const recette4txt1 = document.querySelector('.recette4-0l1');
const recette4txt2 = document.querySelector('.recette4-0l2');

const recette5div = document.querySelector('#recette5txt');
const recette5txt = document.querySelector('#ulrecette5');
const recette5btn = document.querySelector('#recette5fleche');
let isOpen = false;

// recette 2
function recette2btngauche() {
    recette2txt2.style.display = "block";
    recette2txt1.style.display = "none";
};

function recette2btndroite(){
    recette2txt2.style.display = "none";
    recette2txt1.style.display = "block";
}
// fin recette 2

// recette 3

function recette3btngauche() {
    recette3txt2.style.display = "block";
    recette3txt1.style.display = "none";
};

function recette3btndroite(){
    recette3txt2.style.display = "none";
    recette3txt1.style.display = "block";
}
// fin recette 3

// recette 4
function recette4btngauche() {
    recette4txt2.style.display = "block";
    recette4txt1.style.display = "none";
};

function recette4btndroite(){
    recette4txt2.style.display = "none";
    recette4txt1.style.display = "block";
}
// fin recette 4

// recette 5 
recette5btn.addEventListener('click', () => {
    if (!isOpen) {
        recette5div.classList.add('changewidth');
        recette5btn.classList.add('btntranslate');
        recette5div.addEventListener('transitionend', () => {
            recette5txt.classList.add('recette5visible'); 
        },{once:true}
        );
        isOpen = true;
    } else {
        recette5txt.classList.remove('recette5visible');
        recette5div.classList.remove('changewidth');
        recette5btn.classList.remove('btntranslate');
        isOpen = false;
    }
});
// fin recette 5