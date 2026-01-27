let logoimg = document.getElementById("logo");
logoimg.addEventListener('click', alleraccueil);

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

let classique = document.getElementById("classique");
classique.addEventListener('click', allerclassique);

function allerclassique()
{
	let main = document.getElementById("page");
	let classique = `<div>
				<caption>
					Puissance 4 classique
				</caption>
				<div class="plcjetons">
				</div>
				<div class="grille">`;
	classique += creerGrille();
	classique += `</div>
		</div>`;
	main.innerHTML = classique;
	menu = "jeu"
	jeu()
	
}

function createGrid()
{
	let grille_html="";
	grille_html += '<colgroup><col class="c1"/><col class="c2"/><col class="c3"/><col class="c4"/><col class="c5"/><col class="c6"/><col class="c7"/></colgroup>';
	for (let i=0; i<6; i++)
	{
		grille_html += `<tr class="l` + i.toString() + `">`;
		for (let j=0; j<7; j++)
		{
			grille_html += `<td class="r` + j.toString() + `"></td>`;
		}
		grille_html += '</tr>';
	}
	return grille_html;
	

}


function colGris()
{
	console.log("truc");
	let colonne1 = document.querySelector(".c1");
	colonne1.style.backgroundColor = "grey";
	colonne1.style.outline = "10px solid grey";
	console.log(colonne1);
}


function jeu()
{
	if (menu=="jeu")
	{
		let colonneI = document.getElementById("colonneI");
		let colonneII = document.getElementById("colonneII");
		let colonneIII = document.getElementById("colonneIII");
		let colonneIV = document.getElementById("colonneIV");
		let colonneV = document.getElementById("colonneV");
		let colonneVI = document.getElementById("colonneVI");
		let colonneVII = document.getElementById("colonneVII");
	}
}


function creerGrille()
{
	let grille_html="";
	grille_html+="<table class='colonne' id='colonneI'><tr><td class='r6white'></tr><tr><td class='r5white'></tr><tr><td class='r4white'></tr><tr><td class='r3white'></tr><tr><td class='r2white'></tr><tr><td class='r1white'></tr></table>";
	grille_html+="<table class='colonne' id='colonneII'><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr></table>";
	grille_html+="<table class='colonne' id='colonneIII'><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr></table>";
	grille_html+="<table class='colonne' id='colonneIV'><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr></table>";
	grille_html+="<table class='colonne' id='colonneV'><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr></table>";
	grille_html+="<table class='colonne' id='colonneVI'><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr></table>";
	grille_html+="<table class='colonne' id='colonneVII'><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr><tr><td></tr></table>";
	return grille_html;
}


function supprimerGrille()
{
	let jeu = document.getElementById("jeu");
	jeu.innerHTML ="";
}


