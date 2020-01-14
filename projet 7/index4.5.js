let age=Number(prompt('veuillez saisir l\'age de l\'habitant:'));
let sexe=prompt('veuillez saisir le sexe de l\'habitant (homme/femme):');
while (isNaN(age)){
	age=Number(prompt('Erreur, veuillez saisir l\'AGE de l\'habitant:'));
}
while (sexe.toLowerCase()!=='femme' && sexe.toLowerCase()!=='homme'){
	sexe=prompt('Erreur, veuillez saisir le sexe de l\'habitant (HOMME/FEMME):');
}
if ((age>20 && sexe==='homme') || (age>=18 && age<=35 && sexe==='femme')){
	document.getElementById('test').innerHTML+='<p>L\'habitant est imposable.</p>';
}else{
	document.getElementById('test').innerHTML+='<p>L\'habitant est non-imposable.</p>';
}
