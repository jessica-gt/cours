let val=Number(prompt('Veuillez saisir un nombre:'));
while (isNaN(val)){
	val=Number(prompt('Erreur, veuillez saisir un NOMBRE:'));
}
if (val<0){
	document.getElementById("test").innerHTML += '<p>Le nombre saisie est négatif.</p>';
}else{
	document.getElementById("test").innerHTML += '<p>Le nombre saisie est positif.</p>';
}
