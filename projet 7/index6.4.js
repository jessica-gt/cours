let nb=Number(prompt('Veuillez taper le nombre de valeurs souhaité : '));
while (isNaN(nb) || nb<=0){
	nb=Number(prompt('Erreur, veuillez taper le NOMBRE de valeurs souhaité (SUPERIEUR A 0) : '));
}
const tab=[];
let neg=0;
let pos=0;
for (let i=0;i<=(nb-1);i++){
	tab.push(prompt('veuillez saisir la valeur numéro '+(Number(i)+1)+' :'));
	while (isNaN(Number(tab[i]))){
		tab.pop();
		tab.push(prompt('Erreur, veuillez saisir la VALEUR numéro '+(Number(i)+1)+' :'))
	}
	if (tab[i]<0){
		neg++;
	}else if (tab[i]>0){
		pos++;
	}
}
document.getElementById('test').innerHTML+='<p>Il y a '+pos+' nombre(s) positif et '+neg+' nombre(s) négatif.</p>';