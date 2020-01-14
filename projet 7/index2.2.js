let val=Number(prompt('Veuillez saisir un nombre:'));
while (isNaN(val)){
	val=Number(prompt('Erreur, veuillez saisir un NOMBRE:'));
}
val=val*val;
document.getElementById("test").innerHTML += '<p>val*val = '+val+'</p>';
