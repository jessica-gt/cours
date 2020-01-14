const tab=[];
for (let i=0;i<=8;i++){
	tab.push(prompt('veuillez saisir la note numéro '+(Number(i)+1)+' :'))
	while (isNaN(Number(tab[i]))){
		tab.pop();
		tab.push(prompt('Erreur, veuillez saisir la NOTE numéro '+(Number(i)+1)+' :'))
	}
}
tab.forEach(function(tab){document.getElementById('test').innerHTML+='<p>'+tab+'</p>';});