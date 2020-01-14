let heure=Number(prompt('veuillez saisir une heure (entre 0 et 23):'));
let min=Number(prompt('veuillez saisir une minutes (entre 0 et 59):'));
while (isNaN(heure) || heure<0 || heure>23 || isNaN(min) || min<0 || min>59){
	heure=Number(prompt('Erreur, veuillez saisir une HEURE (entre 0 et 23):'));
	min=Number(prompt('Erreur, veuillez saisir une MINUTES (entre 0 et 59):'));
}
min++;
if (min>59){
	heure++;
	min=0;
	if (heure===24){
		heure=0;
	}
}
document.getElementById('test').innerHTML+='<p>Dans une minute, il sera '+heure+' heure(s) et '+min+' minute(s).</p>'
