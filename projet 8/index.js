let liste=document.getElementById('liste');

function ajouterElement(){
	let val=document.getElementById('texte').value;
	if (val.length<1){
		document.getElementById('erreur').innerHTML='Erreur, veuillez saisir un nom';
		document.getElementById('texte').style='border:solid red';
	}else{
		document.getElementById('erreur').innerHTML='';
		document.getElementById('texte').style='';
		tab.push(val);
		afficherListe();
	}
}

function enleverElement(){
	tab.pop();
	afficherListe();
}

function afficherListe(){
	liste.innerHTML='';
	tab.forEach(function(tab){
	liste.innerHTML+='<li>'+tab+'</li>'
});
}

function selectionne(e){
	e.target.classList.toggle('selected');
}


function supprimerElement(){
	for (let i=liste.children.length-1;i>=0;i--){
		if (liste.children[i].classList.contains('selected')){
			tab.splice(i,1);
		}
	}
	afficherListe();
}

function refresh(){
	tab=['Bob','Julien','Roger'];
	afficherListe();
}


let tab=['Bob','Julien','Roger'];
afficherListe();
liste.onclick=selectionne;