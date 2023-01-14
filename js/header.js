const openmenu = document.querySelector('#openmenu');
const headershow = document.querySelector('.headershow');
const navcroix = document.querySelector("#navcroix")
//header
openmenu.addEventListener('click', () => {
    headershow.classList.add('headershow1');
});

navcroix.addEventListener('click', () => {
    headershow.classList.remove('headershow1');
});