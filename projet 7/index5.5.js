let nb=Number(prompt('Saisir un nombre'));
while (isNaN(nb)){
	nb=Number(prompt('Erreur, saisir un NOMBRE'));
}
document.getElementById('test').innerHTML+='<p>Table de multiplication de '+nb+'</p>'
for (let i=1;i<=10;i++){
	document.getElementById('test').innerHTML+='<p>'+nb+' x '+i+' = '+nb*i+'</p>'
}