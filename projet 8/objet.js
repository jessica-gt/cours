let contacts = [{
	prenom:'Julien',
	nom:'Grillot',
	numero:"0123456789"
},{
	prenom:'John',
	nom:'Smith',
	numero:"0123456789"
}]
let search=document.getElementById('search');


function texteContact(contact){
	return (contact.prenom+' '+contact.nom+' ('+contact.numero+')');
}

function afficherContact(){
	document.getElementById('contact').innerHTML='';
	for(let i=0;i<contacts.length;i++){
		document.getElementById('contact').innerHTML+='<li>'+contacts[i].prenom+' '+contacts[i].nom+' ('+contacts[i].numero+')</li>';
	}
}

function ajouterContact(){
	p=document.getElementById('prenom').value;
	name=document.getElementById('nom').value;
	number=document.getElementById('numero').value;
	if (p===''){
		document.getElementById('erreur').innerHTML='Veuillez entrer un prénom';
	}else if (name===''){
		document.getElementById('erreur').innerHTML='Veuillez entrer un nom';
	}else if (number===''){
		document.getElementById('erreur').innerHTML='Veuillez entrer un numéro';
	}else {
		contacts.push({prenom:p,nom:name,numero:number});
	}
	afficherContact();
}

function rechercher(){
	r=document.getElementById('rechercher').value.toLowerCase();
	let trouver=false;
	let cpt=0;
	let cptSearch=0;
	document.getElementById('resultatRecherche').innerHTML='';
	while (cpt<contacts.length){
		trouver=(r===contacts[cpt].prenom.toLowerCase() || r===contacts[cpt].nom.toLowerCase() || r===contacts[cpt].numero);
		cpt++;
		if (trouver){
			document.getElementById('resultatRecherche').innerHTML+='<p>'+contacts[cpt-1].prenom+' '+contacts[cpt-1].nom+' ('+contacts[cpt-1].numero+')</p>';
			cptSearch++;
		}
	}
	if (cptSearch===0){
		document.getElementById('resultatRecherche').innerHTML='<p>Contact inexistant</p>';
	}
}

//alert(texteContact(contacts[0]));
afficherContact();

