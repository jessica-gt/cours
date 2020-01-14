let nb=Number(prompt('Saisir un nombre entre 10 et 20'));
while (isNaN(nb)){
	nb=Number(prompt('Erreur, saisir un NOMBRE entre 10 et 20'));
}
while (nb<10 || nb>20){
	if (nb>20){
		nb=Number(prompt('Trop grand! Saisir un nombre entre 10 et 20'));
	}else if (nb<10){
		nb=Number(prompt('Trop petit! Saisir un nombre entre 10 et 20'));
	}
	while (isNaN(nb)){
	nb=Number(prompt('Erreur, saisir un NOMBRE entre 10 et 20'));
	}
}
