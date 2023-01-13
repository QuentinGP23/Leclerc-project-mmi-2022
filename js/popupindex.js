//index
const biscuit = document.getElementById("biscuit");
const popupbiscuit = document.getElementById("popupsable");

biscuit.addEventListener('click', () => {
    popupbiscuit.style.display="block";
});

// popupbiscuit.addEventListener('mouseleave', () => {
//     popupbiscuit.style.display="none";
// });

const popuptartine = document.getElementById("popuptartine");
const tartine = document.getElementById("tartine");

tartine.addEventListener('click', () => {
    popuptartine.style.display="block";
});

// popuptartine.addEventListener('mouseleave', () => {
//     console.log("ntm");
//     popuptartine.style.display="none";
// });

const popupflocon = document.getElementById("popupflocon");
const flocon = document.getElementById("flocon");

flocon.addEventListener('click', () => {
    popupflocon.style.display="block";
});

// popupflocon.addEventListener('mouseleave', () => {
//     popupflocon.style.display="none";
// });

const popuptruffe = document.getElementById("popuptruffe");
const truffe = document.getElementById("truffe");

truffe.addEventListener('click', () => {
    popuptruffe.style.display="block";
});

// popuptruffe.addEventListener('mouseleave', () => {
//     popuptruffe.style.display="none";
// });
