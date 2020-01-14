let nb=Number(prompt('Saisir un nombre'));
while (isNaN(nb)){
	nb=Number(prompt('Erreur, saisir un NOMBRE'));
}
let cal=0;
for (let i=1;i<=nb;i++){
	cal=cal+i;
}
document.getElementById('test').innerHTML+='<p>la somme totale des nombres de 1 à '+nb+' est de : '+cal+'</p>';