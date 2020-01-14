let h=Number(prompt('veuillez saisir une heure (entre 0 et 23):'));
let m=Number(prompt('veuillez saisir une minute (entre 0 et 59):'));
let s=Number(prompt('veuillez saisir une seconde (entre 0 et 59):'));
while (isNaN(h) || h<0 || h>23 || isNaN(m) || m<0 || m>59 || isNaN(s) || s<0 || s>59){
	h=Number(prompt('Erreur, veuillez saisir une HEURE (entre 0 et 23):'));
	m=Number(prompt('Erreur, veuillez saisir une MINUTE (entre 0 et 59):'));
	s=Number(prompt('Erreur, veuillez saisir une SECONDE (entre 0 et 59):'));
}
s++;
if (s===60){
	s=0;
	m++;
	if (m===60){
		m=0;
		h++;
		if (h===24){
			h=0;
		}
	}
}
document.getElementById('test').innerHTML+='<p>Dans une seconde, il sera '+h+' heure(s), '+m+' minute(s) et '+s+' seconde(s).</p>'
