let nb=Number(prompt('veuillez saisir le nombre de photo(s):'));
while (isNaN(nb)){
	nb=Number(prompt('Erreur, veuillez saisir le NOMBRE de photo(s):'));
}
if (nb<=10){
	document.getElementById('test').innerHTML+='<p>La facture est de '+(0.10*nb)+' euros.</p>';
}else if (nb<=20){
	document.getElementById('test').innerHTML+='<p>La facture est de '+(1+0.09*(nb-10))+' euros.</p>';
}else{
	document.getElementById('test').innerHTML+='<p>La facture est de '+(1+0.9+0.08*(nb-20))+' euros.</p>';
}
