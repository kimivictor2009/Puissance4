let logoimg = document.getElementById("logo");
logoimg.addEventListener('click', allerAccueil);

allerAccueil()


function repeatStr(str, nb) //regroupe la str entrée nb fois
{
	let output = str
	for (let i=1; i<nb; i++)
	{
		output += str
	}
	return output
}


function allerAccueil()
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


function allerClassique()
{
	let nbColonnes = 7
	let nbLignes = 6
	let longueur = 70 * nbColonnes;
	
	let main = document.getElementById("page");
	let ajout = `<div>
				<caption>
					Puissance 4 classique
				</caption>
				<table class='plcjetons' style='width:`+ longueur.toString() + `px'><tr>` + repeatStr("<td></td>", nbColonnes) + `</tr></table>
				<div class="grille">`;
	ajout += creerGrille(nbColonnes, nbLignes);
	ajout += `</div>
		</div>`;
	main.innerHTML = ajout;

	menu = "jeu";
	jeu();
	
}


function allerVar1()
{
	let nbColonnes = 7
	let nbLignes = 6
	let longueur = 70 * nbColonnes;
	
	let main = document.getElementById("page");
	let ajout = `<div>
				<caption>
					Puissance 4 : Confusion
				</caption>
				<table class='plcjetons' style='width:`+ longueur.toString() + `px'><tr>` + repeatStr("<td></td>", nbColonnes) + `</tr></table>
				<div class="grille">`;
	ajout += creerGrille(nbColonnes, nbLignes);
	ajout += `</div>
		</div>`;
	main.innerHTML = ajout;

	menu = "jeu";
	jeu();
	
}

function allerVar2()
{
	let nbColonnes = 14
	let nbLignes = 12
	let longueur = 70 * nbColonnes;
	
	let main = document.getElementById("page");
	let ajout = `<div>
				<caption>
					Puissance 4 : Maxi fun
				</caption>
				<table class='plcjetons' style='width:`+ longueur.toString() + `px'><tr>` + repeatStr("<td></td>", nbColonnes) + `</tr></table>
				<div class="grille">`;
	ajout += creerGrille(nbColonnes, nbLignes);
	ajout += `</div>
		</div>`;
	main.innerHTML = ajout;

	menu = "jeu";
	jeu();
	
}


function allerVar3()
{
	let nbColonnes = 4
	let nbLignes = 3
	let longueur = 70 * nbColonnes;
	
	let main = document.getElementById("page");
	let ajout = `<div>
				<caption>
					Puissance 4 : Mini mais fun quand même
				</caption>
				<table class='plcjetons' style='width:`+ longueur.toString() + `px'><tr>` + repeatStr("<td></td>", nbColonnes) + `</tr></table>
				<div class="grille">`;
	ajout += creerGrille(nbColonnes, nbLignes);
	ajout += `</div>
		</div>`;
	main.innerHTML = ajout;

	menu = "jeu";
	jeu();
	
}

function allerVar4()
{
	let nbColonnes = 7
	let nbLignes = 6
	let longueur = 70 * nbColonnes;
	
	let main = document.getElementById("page");
	let ajout = `<div>
				<caption>
					Puissance 4 : 3 joueurs
				</caption>
				<table class='plcjetons' style='width:`+ longueur.toString() + `px'><tr>` + repeatStr("<td></td>", nbColonnes) + `</tr></table>
				<div class="grille">`;
	ajout += creerGrille(nbColonnes, nbLignes);
	ajout += `</div>
		</div>`;
	main.innerHTML = ajout;

	menu = "jeu";
	jeu();
	
}



function jeu()
{
	if (menu=="jeu")
	{
		let colonnes = document.querySelectorAll(".colonnes");
	}
}



function creerGrille(nbColonnes, nbLignes)
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

function clickColonnes() {
    let nbLignes = 6
    let nbColonnes = 7
    let plateau = []
    for (let i = 0; i < nbLignes; i++) {
        plateau[i] = []
        for (let j = 0; j < nbColonnes; j++) {
            plateau[i][j] = 0
        }
    }
    let prochaineLigneVide = []
    for (let col = 0; col < nbColonnes; col++) {
        prochaineLigneVide[col] = 0
    }
    let joueurActuel = 1
    let colonnes = document.querySelectorAll(".colonne")
    for (let i = 0; i < colonnes.length; i++) {
        let colonne = colonnes[i]
        colonne.addEventListener('click', function() {
            let numeroColonne = i
            let ligne = prochaineLigneVide[numeroColonne]
            if (ligne < nbLignes) {
                prochaineLigneVide[numeroColonne] += 1
                plateau[ligne][numeroColonne] = joueurActuel
                let cellule = document.getElementById("colonne" + numeroColonne).rows[ligne].cells[0]
                cellule.classList.add("jetonJoueur" + joueurActuel)
                if (joueurActuel == 1) {
					joueurActuel = 2
				} else {
					joueurActuel = 1
				}
            }
        })
    }
}
