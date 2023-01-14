const openmenu = document.querySelector('#openmenu');
const headershow = document.querySelector('.headershow');
const navcroix = document.querySelector("#navcroix")
const body = document.body;
//header
console.log("gello");
openmenu.addEventListener('click', () => {
    console.log("wtf");
    headershow.classList.add('headershow1');
    body.style.overflow="hidden";
});

navcroix.addEventListener('click', () => {
    headershow.classList.remove('headershow1');
    body.style.overflow="visible";
});