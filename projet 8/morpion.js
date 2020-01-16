let jeu=document.getElementById('jeu');
let cpt=0;
let l1c1=document.getElementById('l1c1');
let l1c2=document.getElementById('l1c2');
let l1c3=document.getElementById('l1c3');
let l2c1=document.getElementById('l2c1');
let l2c2=document.getElementById('l2c2');
let l2c3=document.getElementById('l2c3');
let l3c1=document.getElementById('l3c1');
let l3c2=document.getElementById('l3c2');
let l3c3=document.getElementById('l3c3');

function test(e){
	let id=e.target.id;
	alert(id);
}

function player(e){
	if (cpt%2===0){
		if (e.target.getAttribute('class')!=='player1' && e.target.getAttribute('class')!=='player2'){
			e.target.setAttribute('class','player1');
			e.target.innerHTML='X';
			cpt++;
		}
	}else{
		if (e.target.getAttribute('class')!=='player1' && e.target.getAttribute('class')!=='player2'){
			e.target.setAttribute('class','player2');
			e.target.innerHTML='O';
			cpt++;
		}	
	}
	win();
}

function reset(){
	for (let l=1;l<=3;l++){
		for (let c=1;c<=3;c++){
			document.getElementById('l'+l+'c'+c).setAttribute('class','');
			document.getElementById('l'+l+'c'+c).innerHTML='';
		}
	}
	cpt=0;
}

function win(){
	let l=1;
	let c=1;
	let winner=false;
	while (l<=3 && !winner){
		while (c<=3 && !winner){
			if (l1c1.getAttribute('class')!==null && l1c1.getAttribute('class')!=='' && l1c1.getAttribute('class')===l1c2.getAttribute('class') && l1c1.getAttribute('class')===l1c3.getAttribute('class')){
				setTimeout(function(){alert(l1c1.getAttribute('class')+' a gagner');reset();},10);
				winner=true;	
			}else if (l2c1.getAttribute('class')!==null && l2c1.getAttribute('class')!=='' && l2c1.getAttribute('class')===l2c2.getAttribute('class') && l2c1.getAttribute('class')===l2c3.getAttribute('class')){
				setTimeout(function(){alert(l2c1.getAttribute('class')+' a gagner');reset();},10);
				winner=true;
			}else if (l3c1.getAttribute('class')!==null && l3c1.getAttribute('class')!=='' && l3c1.getAttribute('class')===l3c2.getAttribute('class') && l3c1.getAttribute('class')===l3c3.getAttribute('class')){
				setTimeout(function(){alert(l3c1.getAttribute('class')+' a gagner');reset();},10);
				winner=true;
			}else if (l1c1.getAttribute('class')!==null && l1c1.getAttribute('class')!=='' && l1c1.getAttribute('class')===l2c1.getAttribute('class') && l1c1.getAttribute('class')===l3c1.getAttribute('class')){
				setTimeout(function(){alert(l1c1.getAttribute('class')+' a gagner');reset();},10);
				winner=true;
			}else if (l1c2.getAttribute('class')!==null && l1c2.getAttribute('class')!=='' && l1c2.getAttribute('class')===l2c2.getAttribute('class') && l1c2.getAttribute('class')===l3c2.getAttribute('class')){
				setTimeout(function(){alert(l1c2.getAttribute('class')+' a gagner');reset();},10);
				winner=true;
			}else if (l1c3.getAttribute('class')!==null && l1c3.getAttribute('class')!=='' && l1c3.getAttribute('class')===l2c3.getAttribute('class') && l1c3.getAttribute('class')===l3c3.getAttribute('class')){
				setTimeout(function(){alert(l1c3.getAttribute('class')+' a gagner');reset();},10);
				winner=true;
			}else if (l1c1.getAttribute('class')!==null && l1c1.getAttribute('class')!=='' && l1c1.getAttribute('class')===l2c2.getAttribute('class') && l1c1.getAttribute('class')===l3c3.getAttribute('class')){
				setTimeout(function(){alert(l1c1.getAttribute('class')+' a gagner');reset();},10);
				winner=true;
			}else if (l1c3.getAttribute('class')!==null && l1c3.getAttribute('class')!=='' && l1c3.getAttribute('class')===l2c2.getAttribute('class') && l1c3.getAttribute('class')===l3c1.getAttribute('class')){
				setTimeout(function(){alert(l1c3.getAttribute('class')+' a gagner');reset();},10);
				winner=true;
			}
			c++;
		}
		l++;
	}
}

jeu.onclick=player;
reset.onclick=reset;