let nbArticles=Number(prompt('Veuillez saisir le nombres d\' articles:'));
let HT=Number(prompt('Veuillez saisir le prix Hors Taxes:'));
let TVA=Number(prompt('veuillez saisir la TVA:'));
while (isNaN(nbArticles) || isNaN(HT) || isNaN(TVA)){
	nbArticles=Number(prompt('Erreur, veuillez saisir le NOMBRE d\' articles:'));
	HT=Number(prompt('Erreur, veuillez saisir le PRIX Hors Taxes:'));
	TVA=Number(prompt('Erreur, veuillez saisir la TVA:'));
}
let TTC=HT*nbArticles*(1+(TVA/100));
document.getElementById("test").innerHTML += '<p>La valeur TTC du(des) article(s) est de '+TTC+' euros.</p>';
