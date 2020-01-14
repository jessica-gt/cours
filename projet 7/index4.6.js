let C1=Number(prompt('veuillez saisir le score du candidat numéro 1:'));
let C2=Number(prompt('veuillez saisir le score du candidat numéro 2:'));
let C3=Number(prompt('veuillez saisir le score du candidat numéro 3:'));
let C4=Number(prompt('veuillez saisir le score du candidat numéro 4:'));
while (isNaN(C1) || isNaN(C2) || isNaN(C3) || isNaN(C4)){
	if (isNaN(C1)){
		C1=Number(prompt('Erreur, veuillez saisir le SCORE du candidat numéro 1:'));
	}else if (isNaN(C2)){
		C2=Number(prompt('Erreur, veuillez saisir le SCORE du candidat numéro 2:'));
	}else if (isNaN(C3)){
		C3=Number(prompt('Erreur, veuillez saisir le SCORE du candidat numéro 3:'));
	}else{
		C4=Number(prompt('Erreur, veuillez saisir le SCORE du candidat numéro 4:'));
	}
}
if ((C1/(C1+C2+C3+C4))>(50/100)){
	document.getElementById('test').innerHTML+='<p>Candidat 1: élu.</p>';
}else if((C1/(C1+C2+C3+C4))>=(12.5/100)){
	if(C1>=C2 && C1>=C3 && C1>=C4){
	document.getElementById('test').innerHTML+='<p>Candidat 1: ballotage favorable.</p>';
	}else{
	document.getElementById('test').innerHTML+='<p>Candidat 1: ballotage défavorable.</p>';
	}
}else{
	document.getElementById('test').innerHTML+='<p>Candidat 1: battu.</p>';
}
