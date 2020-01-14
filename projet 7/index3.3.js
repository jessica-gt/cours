let nom1=prompt('Veuillez saisir le premier nom:');
let nom2=prompt('Veuillez saisir le deuxième nom:');
let nom3=prompt('Veuillez saisir le troisième nom:');
if ((nom1[0]<nom2[0]) && (nom2[0]<nom3[0])){
	document.getElementById("test").innerHTML += '<p>les noms sont rangés dans l\'ordre alphabétique.</p>';
}else{
	document.getElementById("test").innerHTML += '<p>Les noms ne sont pas rangés dans l\'ordre alphabétique.</p>';
}
