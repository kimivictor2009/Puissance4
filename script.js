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
	varianteActuelle = 0;
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
	varianteActuelle = 1;
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
	varianteActuelle = 2;
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
	varianteActuelle = 3;
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
	varianteActuelle = 4;
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



function jeu(nbLignes, nbColonnes) //par victor et retouché par kimi pour la fin du jeu
{
	let main = document.getElementById("page");
	if (menu=="jeu") {
		console.log("jeu lancé");
		jetonclick(nbLignes, nbColonnes);
		let colonnes = document.querySelectorAll(".colonnes");
	}
	if (menu=="fin1")
	{
		main.innerHTML +="<h1>Fin du ^4! Victoire j1!</h1>"
	}
	if (menu=="fin2")
	{
		main.innerHTML +="<h1>Fin du ^4! Victoire j2!</h1>"
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



function creerGrilleAncien() //par kimi obsolète
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
	let page = document.getElementById("page");
	page.innerHTML ="";
}

function jetonclick(nbLignes, nbColonnes)
{
	plateau = [];
	for (let i = 0; i < nbLignes; i++) {
		plateau[i] = [];
		for (let j = 0; j < nbColonnes; j++) {
			plateau[i][j] = 0;
		}
	}

	let prochaineLigneVide = [];
	for (let col = 0; col < nbColonnes; col++) {
		prochaineLigneVide[col] = 0;
	}

	let joueurActuel = 1;
	let compteurTours = 0;
	let colonnes = document.querySelectorAll(".colonne");
	console.log("colonnes trouvées :", colonnes.length);
	
	for (let i = 0; i < colonnes.length; i++)
	{
		let colonne = colonnes[i];
		colonne.addEventListener('click', function ()
		{
			console.log("colonne cliquée :", i);
			let numeroColonne = i;
			let ligneJoueur = prochaineLigneVide[numeroColonne];
			console.log("ligne choisie :", ligneJoueur);

			if (ligneJoueur < nbLignes)
			{
				compteurTours += 1;

				if (varianteActuelle == 4 && compteurTours == 2)
				{
					console.log("2 coups");
					let colonnesValides = [];
					let k = 0;
					for (let j = 0; j < nbColonnes; j++)
					{
						if (prochaineLigneVide[j] < nbLignes)
						{
							colonnesValides[k] = j;
							k += 1;
						}
					}

					if (colonnesValides.length > 0)
					{
						let indexRandom = Math.floor(Math.random() * colonnesValides.length);
						let col = colonnesValides[indexRandom];
						let ligneNeutre = prochaineLigneVide[col];
						plateau[ligneNeutre][col] = 3;
						let cellule = document.getElementById("colonne" + col).rows[nbLignes - ligneNeutre - 1];
						cellule.classList.add("jetonNeutre");
						prochaineLigneVide[col]++;
						compteurTours = 0;
						console.log(plateau);
					}
				}

				prochaineLigneVide[numeroColonne] += 1;
				plateau[ligneJoueur][numeroColonne] = joueurActuel;
				detectVictoireHorizontale(nbLignes, nbColonnes, ligneJoueur, joueurActuel);
				detectVictoireVerticale(nbLignes, nbColonnes, numeroColonne, joueurActuel);
				detectVictoireDiagonales(nbLignes, nbColonnes, ligneJoueur, numeroColonne, joueurActuel);
				let cellule = document.getElementById("colonne" + numeroColonne).rows[nbLignes - ligneJoueur - 1];
				console.log("cellule :", cellule);
				cellule.classList.add("jetonJoueur" + joueurActuel);
				console.log("classe ajoutée :", cellule.className);
				joueurActuel = ((joueurActuel-2)*-1)+1;
			}
		})
	}
} 

//console.log("Vérification : x =", x, "y =", y); pour des test par kimi à mettre entre le while et le if dans les detections
//HD:haut à droite, HG:haut à gauche, BD: bas à droite, BG:bas à gauche
function detectVictoireDiagonales(nbLignes, nbColonnes, ligne, numeroColonne, joueurActuel)//kimi
{
	let HD = detectVictoireDiagonaleHD(nbLignes, nbColonnes, ligne, numeroColonne, joueurActuel);
	let HG = detectVictoireDiagonaleHG(nbLignes, nbColonnes, ligne, numeroColonne, joueurActuel);
	let BD = detectVictoireDiagonaleBD(nbLignes, nbColonnes, ligne, numeroColonne, joueurActuel);
	let BG = detectVictoireDiagonaleBG(nbLignes, nbColonnes, ligne, numeroColonne, joueurActuel);
	let diago1=HD+BG;
	let diago2=HG+BD;
	if(diago1>=5||diago2>=5)
		{
				console.log("WIN joueur "+joueurActuel);
				menu="fin"+joueurActuel;
				jeu(nbLignes, nbColonnes);
		}
}
	
	
function detectVictoireDiagonaleHD(nbLignes, nbColonnes, ligne, numeroColonne, joueurActuel)//kimi
{
	let compteDiagonalHD = 0
	let y = ligne
	let x = numeroColonne
	let diago = true
	//console.log(ligne, numeroColonne);
	//console.log(nbColonnes,nbLignes);
	while(y<nbLignes && x<nbColonnes && diago==true)
	{
		//console.log("Vérification : x =", x, "y =", y);
		if(plateau[y][x]==joueurActuel)
		{
			compteDiagonalHD+=1
		}
		else if(plateau[y][x]!=joueurActuel)
		{
			diago=false;
		}
		y+=1;
		x+=1;
	}
	console.log("returnHD :",compteDiagonalHD);
	return compteDiagonalHD;
}
function detectVictoireDiagonaleHG(nbLignes, nbColonnes, ligne, numeroColonne, joueurActuel)//kimi
{
	let compteDiagonalHG = 0
	let y = ligne
	let x = numeroColonne
	let diago = true
	while(y<nbLignes && x>=0 && diago==true)
	{
		if(plateau[y][x]==joueurActuel)
		{
			compteDiagonalHG+=1
		}
		else if(plateau[y][x]!=joueurActuel)
		{
			diago=false;
		}
		y+=1
		x-=1
	}
	console.log("returnHG :",compteDiagonalHG);
	return compteDiagonalHG;
}
function detectVictoireDiagonaleBG(nbLignes, nbColonnes, ligne, numeroColonne, joueurActuel)//kimi
{
	let compteDiagonalBG = 0
	let y = ligne
	let x = numeroColonne
	let diago = true
	while(y>=0 && x>=0 && diago==true)
	{
		if(plateau[y][x]==joueurActuel)
		{
			compteDiagonalBG+=1;
		}
		if(plateau[y][x]!=joueurActuel)
		{
			diago=false;
		}
		y-=1
		x-=1
	}
	console.log("returnBG :",compteDiagonalBG);
	return compteDiagonalBG;
}
function detectVictoireDiagonaleBD(nbLignes, nbColonnes, ligne, numeroColonne, joueurActuel)//kimi
{
	let compteDiagonalBD = 0
	let y = ligne
	let x = numeroColonne
	let diago = true
	//console.log(ligne, numeroColonne);
	//console.log(nbColonnes,nbLignes);
	while(y>=0 && x<nbColonnes && diago == true)
	{
		if(plateau[y][x]==joueurActuel)
		{
			compteDiagonalBD+=1
		}
		else if(plateau[y][x]!=joueurActuel)
		{
			diago=false;
		}
		y-=1
		x+=1
	}
	console.log("returnBD :",compteDiagonalBD);
	return compteDiagonalBD;
}




function detectVictoireHorizontale(nbLignes, nbColonnes, ligne, joueurActuel)//kimi
{
	let compteHorizontal = 0
	for(let j = 0; j < nbColonnes; j++)
	{
		if(plateau[ligne][j]==joueurActuel)
		{
			compteHorizontal+=1
			console.log("Horizontal :",compteHorizontal)
			if(compteHorizontal==4)
				{
					console.log("WIN joueur "+joueurActuel);
					menu="fin"+joueurActuel;
					jeu(nbLignes, nbColonnes);
				}
		}
		else if(plateau[ligne][j]!=joueurActuel)
		{
			compteHorizontal=0;
		}
	}
}
function detectVictoireVerticale(nbLignes, nbColonnes, numeroColonne, joueurActuel)//kimi
{
	let compteVertical = 0
	for(let i = 0; i < nbLignes; i++)
	{
		if(plateau[i][numeroColonne]==joueurActuel)
		{
			compteVertical+=1
			console.log("Vertical :",compteVertical)
			if(compteVertical==4)
				{
					console.log("WIN joueur "+joueurActuel);
					menu="fin"+joueurActuel;
					jeu(nbLignes, nbColonnes);
				}
		}
		else if(plateau[i][numeroColonne]!=joueurActuel)
		{
			compteVertical=0;
		}
	}
}
