let button=document.getElementById('bouton');
let affichage=document.getElementById('affichage');
let multiplicateur=document.getElementById('multiplicateur');
let autoclick=document.getElementById('autoclick');
let score=0;
let cpt=1;
let prix=50;
let prixMulti=200;

function click(){
	score=score+cpt;
	affichage.innerHTML='<p>'+score+'</p>';
	if (score<prix){
		multiplicateur.disabled=true;		
	}else{
		multiplicateur.disabled=false;	
	}
	if (score<prixMulti){
		autoclick.disabled=true;		
	}else{
		autoclick.disabled=false;	
	}
}

function incrementer(){
	if (score<prix){
		multiplicateur.disabled=true;		
	}else{
		multiplicateur.disabled=false;
		score=score-(prix);
		affichage.innerHTML='<p>'+score+'</p>';
		cpt++;
		prix=prix*2;
		multiplicateur.innerHTML='Multiplicateur x'+cpt+'<br>Prix = '+prix;
		if (score<prix){
			multiplicateur.disabled=true;		
		}else{
			multiplicateur.disabled=false;	
		}
	}
}

function autoclicker(){
	if (score<prixMulti){
		autoclick.disabled=true;
	}else{
		score=score-prixMulti;
		if (score<prixMulti){
			autoclick.disabled=true;		
		}else{
			autoclick.disabled=false;	
		}
		prixMulti=prixMulti*2;
		affichage.innerHTML='<p>'+score+'</p>';
		autoclick.innerHTML='Autoclicker<br>Prix = '+prixMulti;
		setInterval(click,1000);
	}
}

bouton.onclick=click;
multiplicateur.onclick=incrementer;
autoclick.onclick=autoclicker;