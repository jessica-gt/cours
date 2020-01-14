let nb=Number(prompt('Saisir un nombre'));
while (isNaN(nb)){
	nb=Number(prompt('Erreur, saisir un NOMBRE'));
}
for (let i=nb+1;i<=nb+10;i++){
	document.getElementById('test').innerHTML+='<p>'+i+'</p>';
}
