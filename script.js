let logoimg = document.getElementById("logo");
logoimg.addEventListener('click', alleraccueil);

let classique = document.getElementById("classique");
classique.addEventListener('click', allerclassique);

let menu = "accueil";

function alleraccueil()
{
	let main = document.getElementById("page");
	let accueil = `<div class="text_accueil">
	<h1>Puissance 4</h1>
	<h2>Règles du jeu</h2>
	<p>Le puissance 4 est un jeu de stratégie impliquant 2 joueurs l’un contre l’autre.<br>
	Cela se joue dans une grille de 7 colonnes de 6 cases et à l’aide de jetons de couleurs différentes.<br>
	Chacun leur tour, les joueurs doivent déposer un jeton de leur couleur dans une colonne, et celui-ci se dépose en bas de la grille.<br>
	Le premier joueur à aligner 4 jetons, verticalement, horizontalement ou en diagonale, remporte la partie.</p>
	</div>`;
	main.innerHTML = accueil;
}


function allerclassique()
{
	let nbColonnes = 7
	let nbLignes = 6
	
	let main = document.getElementById("page");
	let classique = `<div>
				<caption>
					Puissance 4 classique
				</caption>
				<table class='plcjetons'><tr><td><td><td><td><td><td><td></tr></table>
				<div class="grille">`;
	classique += creerGrille(nbColonnes, nbLignes);
	classique += `</div>
		</div>`;
	main.innerHTML = classique;

	menu = "jeu";
	let colonnes = document.querySelectorAll(".colonnes");
	jeu();
	
}



function jeu()
{
	if (menu=="jeu")
	{
		getColonnes()
	}
}


function creerGrille(nbColonnes, nbLignes)
{
	let grille_html="";
	for (let i=0; i < nbColonnes; i++)
	{
		grille_html += "<table class='colonne' id='colonne" + i.toString() + "'>";
		for (let j=0; j < nbLignes; j++)
		{
			grille_html += "<tr><td></tr>";
		}
		grille_html += '</table>';
	}
	return grille_html;
}


function creerGrilleAncien()
{
	let grille_html="";
	grille_html+="<table class='colonne' id='colonne1'><tr><td class='r6white'></tr><tr><td class='r5white'></tr><tr><td class='r4white'></tr><tr><td class='r3white'></tr><tr><td class='r2white'></tr><tr><td class='r1white'></tr></table>";
	grille_html+="<table class='colonne' id='colonne2'><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr></table>";
	grille_html+="<table class='colonne' id='colonne3'><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr></table>";
	grille_html+="<table class='colonne' id='colonne4'><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr></table>";
	grille_html+="<table class='colonne' id='colonne5'><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr></table>";
	grille_html+="<table class='colonne' id='colonne6'><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr></table>";
	grille_html+="<table class='colonne' id='colonne7'><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr></table>";
	return grille_html;
}


function supprimerGrille()
{
	let jeu = document.getElementById("jeu");
	jeu.innerHTML ="";
}


