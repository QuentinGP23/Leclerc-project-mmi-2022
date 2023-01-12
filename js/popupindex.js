//index
const biscuit = document.getElementById("biscuit");
const popupbiscuit = document.getElementById("popupsable");

biscuit.addEventListener('mouseenter', () => {
    popupbiscuit.style.opacity="1";
});

popupbiscuit.addEventListener('mouseleave', () => {
    popupbiscuit.style.opacity="0";
});

const popuptartine = document.getElementById("popuptartine");
const tartine = document.getElementById("tartine");

tartine.addEventListener('mouseenter', () => {
    popuptartine.style.opacity="1";
});

popuptartine.addEventListener('mouseleave', () => {
    console.log("ntm");
    popuptartine.style.opacity="0";
});

const popupflocon = document.getElementById("popupflocon");
const flocon = document.getElementById("flocon");

flocon.addEventListener('mouseenter', () => {
    popupflocon.style.opacity="1";
});

popupflocon.addEventListener('mouseleave', () => {
    popupflocon.style.opacity="0";
});

const popuptruffe = document.getElementById("popuptruffe");
const truffe = document.getElementById("truffe");

truffe.addEventListener('mouseenter', () => {
    popuptruffe.style.opacity="1";
});

popuptruffe.addEventListener('mouseleave', () => {
    popuptruffe.style.opacity="0";
});
