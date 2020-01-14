let nb=0;
while (nb<1 || nb>3){
	nb=Number(prompt('Saisir un nombre entre 1 et 3'));
	if (isNaN(nb)){
		nb=Number(prompt('Saisir un NOMBRE entre 1 et 3'));	
	}
}
