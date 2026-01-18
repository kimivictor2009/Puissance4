let logoimg = document.getElementById("logo");
logoimg.addEventListener('click', alleraccueil);

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
			<table>
				<caption>
					Puissance 4 classique
				</caption>`;
	classique += createGrid();
	classique += `</table>
		</div>`;
	main.innerHTML = classique;
}

function createGrid()
{
	let grille_html="";
	for (let i=0; i<6; i++)
	{
		grille_html += `<tr class="l` + i.toString() + `">`;
		for (let j=0; j<7; i++)
		{
			grille_html += `<td class="r` + j.toString() + `"></td>`;
		}
		grille_html += '</tr>';
	}
	return grille_html;
}