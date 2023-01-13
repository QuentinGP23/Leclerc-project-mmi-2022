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