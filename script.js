'use strict';
// Fist GAME
const lutins = document.querySelectorAll('.lutin');
const lutinsRestants = document.querySelector('.lutins-restants');
const popupWinFirstGame = document.querySelector('.popup-win');
// SECOND GAME
const cadeaux = document.querySelectorAll('.container-cadeau');
const cadeauxRestants = document.querySelector('.lutins-restants-jeu-2');
const popupWinSecondGame = document.querySelector('.popup-container-jeu-2');
// THIRD GAME
const lutinVicieu = document.querySelector('.container-lutin-vicieux');
const popupWinThirdGame = document.querySelector('.popup-container-jeu-3');

const next = [...document.querySelectorAll('.suivant')];

const texteContainer = document.querySelector('.texte-container');
const pereNoel = document.querySelector('.pere-noel-bulle');
const submitBtn = document.querySelector('.submit-btn');
const clochettes = document.createElement('audio');
clochettes.src = './sounds/clochettes.wav';

const textes = [
	"Avant d'accéder au jeu, j'aimerais que tu réponde à quelques questions s'il te plait ...",
	'Pourrais-tu remplir un petit formulaire ?',
	`Bonjour ${localStorage.getItem('name')} ${localStorage.getItem(
		'lastName',
	)} ! J'ai besoin de votre aide c'est urgent !`,
	"J'ai perdu quelques cadeaux pendant mes précédentes livraisons, pense tu pouvoir m'aider à les retrouver ?",
	"Clique sur les cadeaux que tu aperçois sur l'image derrière moi, je pense avoir fait tomber 5 cadeaux si je me rappelle bien…",
	// 'Tu as trouvé le Cadeau de ${nom du boug} Cherche encore un peu ! Il reste encore un cadeau de tes amis sur cette image !',
	// "Tu as trouvé le cadeau de ${nom du boug} ! c'était le dernier cadeau de tes amis ! Grâce à toi ils pourront ouvrir leurs cadeaux à l'heure",
	"Merci beaucoup ! tu m'as bien aidé !",
	"Serait-il possible que tu m'aides encore un peu ?",
	"Certains de mes lutins se sont perdus... pourrais-tu m'aider à les retrouver ?",
	"Clique sur un Lutin sur l'image derrière moi, pour les faire rentrer à la maison !",
	"Merci beaucoup ! J'ai retrouvé mes fidèles acolytes grâce à toi !",
	"Un de mes lutins s'amuse à voler mes cadeaux, pourrais-tu m'aider à l'arrêter ?",
	"Attention à ne pas te tromper ! Il y'a beaucoup de monde chez la famille PainDépice en ce moment",
	"Merci énormément ! je tiens enfin ce petit garnement ! Ton aide elle m'a été très précieuse !",
];
// colectItems(lutins, lutinsRestants, popupWinFirstGame);

next.forEach((button) => {
	button.addEventListener('click', (e) => {
		const textOfPreviousElement = e.currentTarget.previousElementSibling.innerText;
		const index = textes.indexOf(textOfPreviousElement);
		const contenu = textes.find((element) => element === textOfPreviousElement);
		if (index + 1 < textes.length) {
			switch (contenu) {
				case textes[0]:
					break;
				case textes[1]:
					document.querySelector('.form-container').style.display = 'block';
					document.querySelector('.container-intro').style.display = 'none';
					texteContainer.style.display = 'none';
					submitBtn.addEventListener('click', (e) => {
						e.preventDefault();
						const inputName = document.querySelector('.input-name').value;
						const inputLastName = document.querySelector('.input-last-name').value;
						const inputTextarea = document.querySelector('.input-textarea').value;
						const inputBestFriend = document.querySelector('.input-best-friend').value;
						const inputFavoriteColor = document.querySelector('.input-favorite-color').value;

						if (
							inputName &&
							inputLastName &&
							inputTextarea &&
							inputBestFriend &&
							inputFavoriteColor
						) {
							localStorage.setItem('name', inputName);
							localStorage.setItem('lastName', inputLastName);
							localStorage.setItem('textarea', inputTextarea);
							localStorage.setItem('bestFriend', inputBestFriend);
							localStorage.setItem('favoriteColor', inputFavoriteColor);
							document.querySelector('.form-container').style.display = 'none';
							texteContainer.style.display = 'block';
							document.querySelector('.container-jeu-2').style.display = 'block';
							pereNoel.style.display = 'block';
							texteContainer.style.top = '38%';
							texteContainer.style.left = '44%';
							const addToTextes = `Bonjour ${localStorage.getItem('name')} ${localStorage.getItem(
								'lastName',
							)} ! J'ai besoin de votre aide c'est urgent !`;
							textes.splice(1, 0, addToTextes);
						} else {
							const errorMessage = document.querySelector('.error-message');
							errorMessage.textContent = 'Veuillez remplir tous les champs';
						}
					});

					break;
				// case textes[2]:
				// 	break;
				case textes[2]:
					texteContainer.style.top = '36%';
					break;
				case textes[3]:
					texteContainer.lastElementChild.style.position = 'relative';
					texteContainer.lastElementChild.style.top = '-30px';
					break;
				case textes[4]:
					pereNoel.style.display = 'none';
					texteContainer.style.display = 'none';
					document.querySelector('.container-jeu-2-img').style.filter = 'grayScale(0)';
					cadeaux.forEach((cadeau) => {
						cadeau.addEventListener(
							'click',
							(e) => {
								if (cadeauxRestants.innerText > 1) {
									e.currentTarget.style.display = 'none';
									cadeauxRestants.innerText = cadeauxRestants.innerText - 1;
								} else {
									popupWinSecondGame.style.transform = 'translate(-50%, -50%) scale(1)';
									pereNoel.style.display = 'block';
									texteContainer.style.display = 'block';
									texteContainer.firstElementChild.style.display = 'inline';
									texteContainer.lastElementChild.style.display = 'inline';
									texteContainer.lastElementChild.style.position = 'static';
									// texteContainer.lastElementChild.style.display = 'inline';
								}
							},
							{ once: true },
						);
					});
					break;
				case textes[5]:
					break;
				case textes[6]:
					document.querySelector('.container-jeu-2').style.display = 'none';
					document.querySelector('.cointainer-jeu-1').style.display = 'block';
					break;
				case textes[7]:
					break;
				case textes[8]:
					document.querySelector('.cointainer-jeu-1').style.filter = 'grayScale(0)';
					pereNoel.style.display = 'none';
					texteContainer.style.display = 'none';
					lutins.forEach((item, index) => {
						item.addEventListener('click', () => {
							if (lutinsRestants.innerText > 1) {
								item.style.display = 'none';
								lutins[index + 1].style.display = 'block';
								lutinsRestants.textContent = lutinsRestants.innerText - 1;
								lutins[index + 1].style.transform = 'translate(0,0)';
								lutins[index + 1].style.transform = 'translate(0,0)';
								clochettes.play();
							} else {
								popupWinFirstGame.style.transform = 'translate(-50%, -50%) scale(1)';
								pereNoel.style.display = 'block';
								texteContainer.style.display = 'block';
							}
						});
					});
					break;
				case textes[9]:
					document.querySelector('.popup-jeu-1').style.display = 'none';
					document.querySelector('.cointainer-jeu-3').style.display = 'block';
				case textes[10]:
					document.querySelector('.cointainer-jeu-1').style.display = 'none';
					break;
				case textes[11]:
					document.querySelector('.cointainer-jeu-3-img').style.filter = 'grayScale(0)';
					pereNoel.style.display = 'none';
					texteContainer.style.display = 'none';
					lutinVicieu.addEventListener('click', (e) => {
						e.currentTarget.style.display = 'none';
						popupWinThirdGame.style.transform = 'translate(-50%, -50%) scale(1)';
						pereNoel.style.display = 'block';
						texteContainer.style.display = 'block';
						texteContainer.lastElementChild.innerHTML = "retourner à l'accueil";
						texteContainer.lastElementChild.addEventListener('click', () => {
							document.location.href="/index.html"; 
						});
					});

					break;
				// case textes[12]:
				// 	console.log('12');

				// 	break;
				// case textes[13]:
				// 	console.log('13');

				// 	break;
				// case textes[14]:
				// 	console.log('14');

				// 	break;
				default:
					break;
			}
			e.currentTarget.previousElementSibling.innerText = textes[index + 1];
		} else {
			console.log('zz');
		}
	});
});
