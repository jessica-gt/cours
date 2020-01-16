let button=document.getElementById('bouton');
let affichage=document.getElementById('affichage');
let multiplicateur=document.getElementById('multiplicateur');
let autoclick=document.getElementById('autoclick');
let score=0;
let cpt=1;
let cpt2=0;
let cpt3=0;
let prix=50;
let prixMulti=200;
let prixUsine=1000;

document.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    return false;
  }
}, true);

function Affichage(){
	if (score>=1000000){
		affichage.innerHTML='<p>Plants de fraises : '+Math.round(score/1000000)+'M</p><p>Fraises par click : '+cpt+'</p><p>Nombre de fermes : '+cpt2+'</p><p>Nombre d\'usine : '+cpt3+'</p>';
	}else if (score>=1000){
		affichage.innerHTML='<p>Plants de fraises : '+Math.round(score/1000)+'k</p><p>Fraises par click : '+cpt+'</p><p>Nombre de fermes : '+cpt2+'</p><p>Nombre d\'usine : '+cpt3+'</p>';
	}else{
		affichage.innerHTML='<p>Plants de fraises : '+score+'</p><p>Fraises par click : '+cpt+'</p><p>Nombre de fermes : '+cpt2+'</p><p>Nombre d\'usine : '+cpt3+'</p>';
	}
	
}

function click(){
	score=score+cpt;
	Affichage();
	if (cpt>=100 || score<prix){
		multiplicateur.disabled=true;
	}else{
		multiplicateur.disabled=false;	
	}
	if (score<prixMulti || cpt2>=100){
		autoclick.disabled=true;		
	}else{
		autoclick.disabled=false;	
	}
	if (score<prixUsine || cpt3>=100){
		autoclick2.disabled=true;		
	}else{
		autoclick2.disabled=false;	
	}
}

function incrementer(){
	if (cpt>=100){
		multiplicateur.disabled=true;
		multiplicateur.innerHTML='MAXED';		
	}else if (score<prix){
		multiplicateur.disabled=true;
	}else{
		multiplicateur.disabled=false;
		score=score-(prix);
		cpt++;
		Affichage();
		prix=prix+10;
		if (prix>=1000){
			multiplicateur.innerHTML='Plus de fraises x'+cpt+'<br>Prix = '+prix/1000+'k';
		}else{
			multiplicateur.innerHTML='Plus de fraises x'+cpt+'<br>Prix = '+prix;
		}
		if (score<prix){
			multiplicateur.disabled=true;		
		}else if (cpt>=100){
			multiplicateur.disabled=true;
			multiplicateur.innerHTML='MAXED';
		}else{
			multiplicateur.disabled=false;	
		}
	}
}

function autoclicker(){
	if (cpt2>=100){
		autoclick.disabled=true;
		autoclick.innerHTML='MAXED';		
	}else if (score<prixMulti){
		autoclick.disabled=true;
	}else{
		score=score-prixMulti;
		prixMulti=prixMulti+100;
		cpt2++;
		Affichage();
		if (prixMulti>=1000){
			autoclick.innerHTML='Ferme<br>Prix = '+prixMulti/1000+'k';
		}else{
			autoclick.innerHTML='Ferme<br>Prix = '+prixMulti;
		}
		setInterval(click,1000);	
		}
		if (score<prixMulti){
			autoclick.disabled=true;
			if (cpt2>=100){
				autoclick.disabled=true;
				autoclick.innerHTML='MAXED';
			}		
		}else if (cpt2>=100){
			autoclick.disabled=true;
			autoclick.innerHTML='MAXED';
		}else{
			autoclick.disabled=false;	
	}
}

function autoclicker2(){
	if (cpt3>=100){
		autoclick2.disabled=true;
		autoclick2.innerHTML='MAXED';		
	}else if (score<prixUsine){
		autoclick2.disabled=true;
	}else{
		score=score-prixUsine;
		prixUsine=prixUsine+1000;
		cpt3++;
		Affichage();
		autoclick2.innerHTML='Usine<br>Prix = '+prixUsine/1000+'k';
		for (let i=0;i<=10;i++){
			setInterval(click,1000);
		}
		if (score<prixUsine){
			autoclick2.disabled=true;
			if (cpt3>=100){
				autoclick2.disabled=true;
				autoclick2.innerHTML='MAXED';
			}		
		}else if (cpt3>=100){
			autoclick2.disabled=true;
			autoclick2.innerHTML='MAXED';
		}else{
			autoclick2.disabled=false;	
		}
	}
}

bouton.onclick=click;
multiplicateur.onclick=incrementer;
autoclick.onclick=autoclicker;
autoclick2.onclick=autoclicker2;