let val1=Number(prompt('Veuillez saisir le premier nombre:'));
let val2=Number(prompt('Veuillez saisir le deuxième nombre:'));
while (isNaN(val1) || isNaN(val2))
{
	val1=Number(prompt('Erreur, veuillez saisir le premier NOMBRE:'));
	val2=Number(prompt('Erreur, veuillez saisir le deuxième NOMBRE:'));
}
if ((val1<0 && val2<0) || (val1>0 && val2>0)){
	document.getElementById("test").innerHTML += '<p>Le produit des deux nombres est positif.</p>';
}else{
	document.getElementById("test").innerHTML += '<p>Le produit des deux nombres est négatif.</p>';
}
