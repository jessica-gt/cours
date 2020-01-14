let age=Number(prompt('Veuillez saisir l\'age de l\'enfant (à partir de 6 ans):'));
while (isNaN(age) || age<6)
{
	age=Number(prompt('Erreur, veuillez saisir l\'AGE de l\'enfant (à PARTIR DE 6 ans):'));
}
if (age<10 && age>=6){
	if (age<8){
		document.getElementById("test").innerHTML += '<p>l\'enfant est de catégorie Poussin.</p>';
	}else{
		document.getElementById("test").innerHTML += '<p>l\'enfant est de catégorie Pupille.</p>';
	}
}else{
	if (age<12){
		document.getElementById("test").innerHTML += '<p>l\'enfant est de catégorie Minime.</p>';
	}else{
		document.getElementById("test").innerHTML += '<p>l\'enfant est de catégorie Cadet.</p>';
	}
}
