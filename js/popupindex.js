//index
const biscuit = document.getElementById("biscuit");
const popupbiscuit = document.getElementById("popupsable");
const popuptartine = document.getElementById("popuptartine");
const tartine = document.getElementById("tartine");
const popupflocon = document.getElementById("popupflocon");
const flocon = document.getElementById("flocon");
const popuptruffe = document.getElementById("popuptruffe");
const truffe = document.getElementById("truffe");
const fenetre = document.getElementById("close");
const livre = document.getElementById("livre");
const popuplivre = document.getElementById("popuplivre");
const nounours = document.getElementById("nounours");
const popupnounours = document.getElementById("popuprecette3");
const croixours = document.getElementById("croix");
const fenetre1 = document.getElementById("close1");
const fusee = document.getElementById("fusee");
const popuprecette3fusee = document.getElementById("popuprecette3fusee");
const croixfusee = document.getElementById("croixfusee");
const canard = document.getElementById("canard");
const popuprecette3canard = document.getElementById("popuprecette3canard");
const croixcanard = document.getElementById("croixcanard");


biscuit.addEventListener('click', function(event){
    popupbiscuit.style.display="block";
    fenetre.style.display="block";
});

fenetre.addEventListener('click', function(event){
    popupbiscuit.style.display="none";
    fenetre.style.display="none";
});

tartine.addEventListener('click', function(event){
    popuptartine.style.display="block";
    fenetre.style.display="block";
});

fenetre.addEventListener('click', function(event){
    popuptartine.style.display="none";
    fenetre.style.display="none";
});

flocon.addEventListener('click', function(event){
    popupflocon.style.display="block";
    fenetre.style.display="block";
});

fenetre.addEventListener('click', function(event){
    popupflocon.style.display="none";
    fenetre.style.display="none";
});

truffe.addEventListener('click', function(event){
    popuptruffe.style.display="block";
    fenetre.style.display="block";
});

fenetre.addEventListener('click', function(event){
    popuptruffe.style.display="none";
    fenetre.style.display="none";
});

livre.addEventListener('mouseenter', function(event){
    livre.setAttribute('src', '/img/livreeffect.svg');
});
livre.addEventListener('mouseleave', function(event){
    livre.setAttribute('src', '/img/livre.svg');
});

livre.addEventListener('click', function(event){
    popuplivre.style.display="block";
    fenetre.style.display="block";
});

fenetre.addEventListener('click', function(event){
    popuplivre.style.display="none";
    fenetre.style.display="none";
});

nounours.addEventListener('click', function(event){
    popupnounours.style.display="block";
    fenetre1.style.display="block";
});

fenetre1.addEventListener('click', function(event){
    popupnounours.style.display="none";
    fenetre1.style.display="none";
});

croixours.addEventListener('click', function(event){
    popupnounours.style.display="none";
    fenetre1.style.display="none";
});

fusee.addEventListener('click', function(event){
    popuprecette3fusee.style.display="block";
    fenetre1.style.display="block";
});

fenetre1.addEventListener('click', function(event){
    popuprecette3fusee.style.display="none";
    fenetre1.style.display="none";
});

croixfusee.addEventListener('click', function(event){
    popuprecette3fusee.style.display="none";
    fenetre1.style.display="none";
});

canard.addEventListener('click', function(event){
    popuprecette3canard.style.display="block";
    fenetre1.style.display="block";
});

fenetre1.addEventListener('click', function(event){
    popuprecette3canard.style.display="none";
    fenetre1.style.display="none";
});

croixcanard.addEventListener('click', function(event){
    popuprecette3canard.style.display="none";
    fenetre1.style.display="none";
});