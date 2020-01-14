let nb1=Number(prompt('Veuillez saisir le premier nombre:'));
let nb2=Number(prompt('Veuillez saisir le deuxième nombre:'));
while (isNaN(nb1) || isNaN(nb2))
{
	nb1=Number(prompt('Erreur, veuillez saisir le premier NOMBRE:'));
	nb2=Number(prompt('Erreur, veuillez saisir le deuxième NOMBRE:'));
}
if ((nb1>=0 && nb2>=0) || (nb1<=0 && nb2<=0)){
	if (nb1==0 || nb2==0){
		document.getElementById("test").innerHTML += '<p>le produit des deux nombres est nul.</p>';
	}else{
		document.getElementById("test").innerHTML += '<p>le produit des deux nombres est positif.</p>';
	}
}else{
	document.getElementById("test").innerHTML += '<p>Le produit des deux nombres est négatif.</p>';
}
