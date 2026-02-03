let logoimg = document.getElementById("logo");
logoimg.addEventListener('click', allerAccueil);

allerAccueil()


function repeatStr(str, nb) //regroupe la str entrée nb fois, par victor
{
	let output = str
	for (let i=1; i<nb; i++)
	{
		output += str
	}
	return output
}


function allerAccueil() //par kimi
{
	let menu = "accueil";

	let classique = document.getElementById("btnClass");
	classique.addEventListener('click', allerClassique);

	let var1 = document.getElementById("btnV1");
	var1.addEventListener('click', allerVar1);

	let var2 = document.getElementById("btnV2");
	var2.addEventListener('click', allerVar2);

	let var3 = document.getElementById("btnV3");
	var3.addEventListener('click', allerVar3);

	let var4 = document.getElementById("btnV4");
	var4.addEventListener('click', allerVar4);


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


function allerClassique() // par victor
{
	let nbColonnes = 7
	let nbLignes = 6
	let longueur = 70 * nbColonnes;
	
	let main = document.getElementById("page");
	let ajout = `<div>
				<h2>
					Puissance 4 classique
				</h2>
				<table class='plcjetons' style='width:`+ longueur.toString() + `px'><tr>` + repeatStr("<td></td>", nbColonnes) + `</tr></table>
				<div class="grille">`;
	ajout += creerGrille(nbColonnes, nbLignes);
	ajout += `</div>
		</div>`;
	main.innerHTML = ajout;

	menu = "jeu";
	jeu(nbLignes, nbColonnes);
	
}


function allerVar1() // par victor (copié-collé)
{
	let nbColonnes = 7
	let nbLignes = 6
	let longueur = 70 * nbColonnes;
	
	let main = document.getElementById("page");
	let ajout = `<div>
				<h2>
					Puissance 4 : Confusion
				</h2>
				<table class='plcjetons' style='width:`+ longueur.toString() + `px'><tr>` + repeatStr("<td></td>", nbColonnes) + `</tr></table>
				<div class="grille">`;
	ajout += creerGrilleConfusion(nbColonnes, nbLignes);
	ajout += `</div>
		</div>`;
	main.innerHTML = ajout;

	menu = "jeu";
	jeu(nbLignes, nbColonnes);
	
}

function allerVar2() // par victor (copié-collé)
{
	let nbColonnes = 12
	let nbLignes = 10
	let longueur = 70 * nbColonnes;
	
	let main = document.getElementById("page");
	let ajout = `<div>
				<h2>
					Puissance 4 : Maxi fun
				</h2>
				<table class='plcjetons' style='width:`+ longueur.toString() + `px'><tr>` + repeatStr("<td></td>", nbColonnes) + `</tr></table>
				<div class="grille">`;
	ajout += creerGrille(nbColonnes, nbLignes);
	ajout += `</div>
		</div>`;
	main.innerHTML = ajout;

	menu = "jeu";
	jeu(nbLignes, nbColonnes);
	
}


function allerVar3() // par victor (copié-collé)
{
	let nbColonnes = 5
	let nbLignes = 4
	let longueur = 70 * nbColonnes;
	
	let main = document.getElementById("page");
	let ajout = `<div>
				<h2>
					Puissance 4 : Mini mais fun quand même
				</h2>
				<table class='plcjetons' style='width:`+ longueur.toString() + `px'><tr>` + repeatStr("<td></td>", nbColonnes) + `</tr></table>
				<div class="grille">`;
	ajout += creerGrille(nbColonnes, nbLignes);
	ajout += `</div>
		</div>`;
	main.innerHTML = ajout;

	menu = "jeu";
	jeu(nbLignes, nbColonnes);
	
}

function allerVar4() // par victor (copié-collé)
{
	let nbColonnes = 7
	let nbLignes = 6
	let longueur = 70 * nbColonnes;
	
	let main = document.getElementById("page");
	let ajout = `<div>
				<h2>
					Puissance 4 : 3 joueurs mais en fait y'a que 2 joueurs
				</h2>
				<table class='plcjetons' style='width:`+ longueur.toString() + `px'><tr>` + repeatStr("<td></td>", nbColonnes) + `</tr></table>
				<div class="grille">`;
	ajout += creerGrille(nbColonnes, nbLignes);
	ajout += `</div>
		</div>`;
	main.innerHTML = ajout;

	menu = "jeu";
	jeu(nbLignes, nbColonnes);
	
}



function jeu(nbLignes, nbColonnes) //par victor
{
	if (menu=="jeu") {
		console.log("jeu lancé");
		jetonclick(nbLignes, nbColonnes);
		let colonnes = document.querySelectorAll(".colonnes");
	}
}



function creerGrille(nbColonnes, nbLignes) //par victor (optimisation du code de kimi)
{
	let grille_html="";
	let hauteur = 70 * nbLignes;
	for (let i=0; i < nbColonnes; i++)
	{
		grille_html += "<table class='colonne' id='colonne" + i.toString() + "' style='height:" + hauteur.toString() + "px'>";
		
		for (let j=0; j < nbLignes; j++)
		{
			grille_html += "<tr><td></tr>";
		}
		grille_html += '</table>';
	}
	return grille_html;
}

function creerGrilleConfusion(nbColonnes, nbLignes) //par kimi(reprise de la fonction de victor afin de l'adapter à la variante confusion)
{
	let grille_html="";
	let hauteur = 70 * nbLignes;
	for (let i=0; i < nbColonnes; i++)
	{
		grille_html += "<table class='colonne confusion' id='colonne" + i.toString() + "' style='height:" + hauteur.toString() + "px'>";
		
		for (let j=0; j < nbLignes; j++)
		{
			grille_html += "<tr><td></tr>";
		}
		grille_html += '</table>';
	}
	return grille_html;
}



function creerGrilleAncien() //par kimi
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


function supprimerGrille() // par kimi, pour des tests
{
	let jeu = document.getElementById("jeu");
	jeu.innerHTML ="";
}

function jetonclick(nbLignes, nbColonnes) {
    let lagrille = [];
    for (let i = 0; i < nbLignes; i++) {
        lagrille[i] = [];
        for (let j = 0; j < nbColonnes; j++) {
            lagrille[i][j] = 0;
        }
    }
    let prochaineLigneVide = [];
    for (let col = 0; col < nbColonnes; col++) {
        prochaineLigneVide[col] = 0;
    }
    let joueurActuel = 1;
    let colonnes = document.querySelectorAll(".colonne");
	console.log("colonnes trouvées :", colonnes.length);
    for (let i = 0; i < colonnes.length; i++) {
        let colonne = colonnes[i];
        colonne.addEventListener('click', function() {
			console.log("colonne cliquée :", i);
            let numeroColonne = i;
            let ligne = prochaineLigneVide[numeroColonne];
			console.log("ligne choisie :", ligne);
            if (ligne < nbLignes) {
                prochaineLigneVide[numeroColonne] += 1;
                lagrille[ligne][numeroColonne] = joueurActuel;
                let cellule = document.getElementById("colonne" + numeroColonne).rows[(nbLignes-1) - ligne];
				console.log(cellule);
                cellule.classList.add("jetonJoueur" + joueurActuel);
				console.log("classe ajoutée :", cellule.className);
                if (joueurActuel == 1) {
					lagrille[ligne, numeroColonne] = [1]
					joueurActuel = 2;
				} else {
					lagrille[ligne, numeroColonne] = [2]
					joueurActuel = 1;
				console.log("joueur suivant :", joueurActuel);
				}
            }
        })
    }
}


function detectVictCoup(position, posLast) // par victor
{
	

}