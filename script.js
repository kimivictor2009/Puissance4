let logoimg = document.getElementById("logo");
logoimg.addEventListener('click', alleraccueil);

function alleraccueil()
{
	let main = document.getElementById("page");
	let accueil = '<div class="text_accueil"><h1>Puissance 4</h1><h2>Règles du jeu</h2><p>Le puissance 4 est un jeu de stratégie impliquant 2 joueurs l’un contre l’autre.<br>Cela se joue dans une grille de 7 colonnes de 6 cases et à l’aide de jetons de couleurs différentes.<br>Chacun leur tour, les joueurs doivent déposer un jeton de leur couleur dans une colonne, et celui-ci se dépose en bas de la grille.<br> Le premier joueur à aligner 4 jetons, verticalement, horizontalement ou en diagonale, remporte la partie.</p></div>'
	main.innerHTML = accueil;
}

let classique = document.getElementById("classique");
classique.addEventListener('click', allerclassique);

function allerclassique()
{
	let main = document.getElementById("page");
	let classique = '<br>'
	main.innerHTML = classique;
}

// WIP
// 0 pour rien, 1 pour les rouges et 2 pour les jaunes
// variante 2 : 3 = couleur neutre
let position = [[0, 0, 0, 0, 0, 0], 
				[0, 0, 0, 0, 0, 0], 
				[0, 0, 0, 0, 0, 0], 
				[0, 0, 0, 0, 0, 0], 
				[0, 0, 0, 0, 0, 0], 
				[0, 0, 0, 0, 0, 0], 
				[0, 0, 0, 0, 0, 0]];

function detecter_victoire(position, variante) {
	let gagnant = 0;
	if (variante == 3) {
		let nb_aligne = 3;
	} else {
		let nb_aligne = 4;
	}
	return(gagnant);
}

let gagnant = detecter_victoire(position);
console.log(gagnant);
