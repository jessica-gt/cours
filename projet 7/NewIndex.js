let btn1p1 = document.getElementById('btn1.1');
let btn1p2 = document.getElementById('btn1.2');
let btn1p3 = document.getElementById('btn1.3');
let btn1p4 = document.getElementById('btn1.4');
let btn1p5 = document.getElementById('btn1.5');
let btn1p6 = document.getElementById('btn1.6');
let btn1p7 = document.getElementById('btn1.7');
let btn1p8 = document.getElementById('btn1.8');
let btn1p9 = document.getElementById('btn1.9');
let btn2p1 = document.getElementById('btn2.1');
let btn2p2 = document.getElementById('btn2.2');
let btn2p3 = document.getElementById('btn2.3');
let btn3p1 = document.getElementById('btn3.1');
let btn3p2 = document.getElementById('btn3.2');
let btn3p3 = document.getElementById('btn3.3');
let btn3p4 = document.getElementById('btn3.4');
let btn3p5 = document.getElementById('btn3.5');
let btn4p1 = document.getElementById('btn4.1');
let btn4p2 = document.getElementById('btn4.2');
let btn4p3 = document.getElementById('btn4.3');
let btn4p4 = document.getElementById('btn4.4');
let btn4p5 = document.getElementById('btn4.5');
let btn4p6 = document.getElementById('btn4.6');
let btn5p1 = document.getElementById('btn5.1');
let btn5p2 = document.getElementById('btn5.2');
let btn5p3 = document.getElementById('btn5.3');
let btn5p5 = document.getElementById('btn5.5');
let btn5p6 = document.getElementById('btn5.6');
let btn6p1 = document.getElementById('btn6.1');
let btn6p2 = document.getElementById('btn6.2');
let btn6p3 = document.getElementById('btn6.3');
let btn6p4 = document.getElementById('btn6.4');
let btn7p1 = document.getElementById('btn7.1');
let btn7p2 = document.getElementById('btn7.2');

function disabled(btn){
	btn1p1.disabled=false;
	btn1p2.disabled=false;
	btn1p3.disabled=false;
	btn1p4.disabled=false;
	btn1p5.disabled=false;
	btn1p6.disabled=false;
	btn1p7.disabled=false;
	btn1p8.disabled=false;
	btn1p9.disabled=false;
	btn2p1.disabled=false;
	btn2p2.disabled=false;
	btn2p3.disabled=false;
	btn3p1.disabled=false;
	btn3p2.disabled=false;
	btn3p3.disabled=false;
	btn3p4.disabled=false;
	btn3p5.disabled=false;
	btn4p1.disabled=false;
	btn4p2.disabled=false;
	btn4p3.disabled=false;
	btn4p4.disabled=false;
	btn4p5.disabled=false;
	btn4p6.disabled=false;
	btn5p1.disabled=false;
	btn5p2.disabled=false;
	btn5p3.disabled=false;
	btn5p5.disabled=false;
	btn5p6.disabled=false;
	btn6p1.disabled=false;
	btn6p2.disabled=false;
	btn6p3.disabled=false;
	btn6p4.disabled=false;
	btn7p1.disabled=false;
	btn7p2.disabled=false;
	btn.disabled=true;

}

function Exo1p1(){
	let A = 1;
	let B = A+3;
	A = 3;
	document.getElementById('Exo').innerHTML='<p>A='+A+'</p><p>B='+B+'</p>';
	disabled(btn1p1);
};

function Exo1p2(){
	let A = 5;
	let B = 3;
	let C = A+B;
	A = 2;
	C = B-A;
	document.getElementById('Exo').innerHTML='<p>A='+A+'</p><p>B='+B+'</p><p>C='+C+'</p>';
	disabled(btn1p2);
};

function Exo1p3(){
	let A = 5;
	let B = A+4;
	A=A+1;
	B=A-4;
	document.getElementById('Exo').innerHTML="<p>A="+A+"</p><p>B="+B+'</p>';
	disabled(btn1p3);
}

function Exo1p4(){
	let A = 3;
	let B = 10;
	let C=A+B;
	B=A+B;
	A=C;
	document.getElementById('Exo').innerHTML="<p>A="+A+"</p><p>B="+B+"</p><p>C="+C+'</p>';
	disabled(btn1p4);
}

function Exo1p5(){
	let A = 5;
	let B = 2;
	A=B;
	B=A;
	document.getElementById('Exo').innerHTML="<p>A="+A+"</p><p>B="+B+'</p>';
	disabled(btn1p5);
}

function Exo1p6(){
	let A=Number(prompt("Entrez le nombre A:"));
	let B=Number(prompt("Entrez le nombre B:"));
	while (isNaN(A) || isNaN(B)){
		A=Number(prompt("Erreur, entrez le NOMBRE A:"));
		B=Number(prompt("Erreur, entrez le NOMBRE B:"));
	}
	let C=A;
	A=B;
	B=C;
	document.getElementById('Exo').innerHTML="<p>A="+A+"</p><p>B="+B+'</p>';
	disabled(btn1p6);
}

function Exo1p7(){
	let A=Number(prompt("Entrez le nombre A:"));
	let B=Number(prompt("Entrez le nombre B:"));
	let C=Number(prompt("Entrez le nombre C:"));
	while (isNaN(A) || isNaN(B) || isNaN(C)){
		A=Number(prompt("Erreur, entrez le NOMBRE A:"));
		B=Number(prompt("Erreur, entrez le NOMBRE B:"));
		C=Number(prompt("Erreur, entrez le NOMBRE C:"));
	}
	let D=A;
	A=C;
	C=B;
	B=D;
	document.getElementById('Exo').innerHTML="<p>A="+A+"</p><p>B="+B+"</p><p>C="+C+'</p>';
	disabled(btn1p7);
}

function Exo1p8(){
	let A='423';
	let B='12';
	let C=A+B;
	document.getElementById('Exo').innerHTML='<p>C='+C+'</p>';
	disabled(btn1p8);
}

function Exo1p9(){
	let A='423';
	let B='12';
	let C=A&B;
	document.getElementById('Exo').innerHTML='<p>C='+C+'</p>';
	disabled(btn1p9);
}

function Exo2p1(){
	let val=231;
	let double=val*2;
	document.getElementById("Exo").innerHTML = '<p>val = '+val+' et double = '+double+'</p>';
	disabled(btn2p1);
}

function Exo2p2(){
	let val=Number(prompt('Veuillez saisir un nombre:'));
	while (isNaN(val)){
		val=Number(prompt('Erreur, veuillez saisir un NOMBRE:'));
	}
	val=val*val;
	document.getElementById("Exo").innerHTML = '<p>val*val = '+val+'</p>';
	disabled(btn2p2);
}

function Exo2p3(){
	let nbArticles=Number(prompt('Veuillez saisir le nombres d\' articles:'));
	let HT=Number(prompt('Veuillez saisir le prix Hors Taxes:'));
	let TVA=Number(prompt('veuillez saisir la TVA:'));
	while (isNaN(nbArticles) || isNaN(HT) || isNaN(TVA)){
		nbArticles=Number(prompt('Erreur, veuillez saisir le NOMBRE d\' articles:'));
		HT=Number(prompt('Erreur, veuillez saisir le PRIX Hors Taxes:'));
		TVA=Number(prompt('Erreur, veuillez saisir la TVA:'));
	}
	let TTC=HT*nbArticles*(1+(TVA/100));
	document.getElementById("Exo").innerHTML = '<p>La valeur TTC du(des) article(s) est de '+TTC+' euros.</p>';
	disabled(btn2p3);
}

function Exo3p1(){
	let val=Number(prompt('Veuillez saisir un nombre:'));
	while (isNaN(val)){
		val=Number(prompt('Erreur, veuillez saisir un NOMBRE:'));
	}
	if (val<0){
		document.getElementById("Exo").innerHTML = '<p>Le nombre saisie est négatif.</p>';
	}else{
		document.getElementById("Exo").innerHTML = '<p>Le nombre saisie est positif.</p>';
	}
	disabled(btn3p1);
}

function Exo3p2(){
	let val1=Number(prompt('Veuillez saisir le premier nombre:'));
	let val2=Number(prompt('Veuillez saisir le deuxième nombre:'));
	while (isNaN(val1) || isNaN(val2))
	{
		val1=Number(prompt('Erreur, veuillez saisir le premier NOMBRE:'));
		val2=Number(prompt('Erreur, veuillez saisir le deuxième NOMBRE:'));
	}
	if ((val1<0 && val2<0) || (val1>0 && val2>0)){
		document.getElementById("Exo").innerHTML = '<p>Le produit des deux nombres est positif.</p>';
	}else{
		document.getElementById("Exo").innerHTML = '<p>Le produit des deux nombres est négatif.</p>';
	}
	disabled(btn3p2);
}

function Exo3p3(){
	let nom1=prompt('Veuillez saisir le premier nom:');
	let nom2=prompt('Veuillez saisir le deuxième nom:');
	let nom3=prompt('Veuillez saisir le troisième nom:');
	if ((nom1[0]<nom2[0]) && (nom2[0]<nom3[0])){
		document.getElementById("Exo").innerHTML = '<p>les noms sont rangés dans l\'ordre alphabétique.</p>';
	}else{
		document.getElementById("Exo").innerHTML = '<p>Les noms ne sont pas rangés dans l\'ordre alphabétique.</p>';
	}
	disabled(btn3p3);
}

function Exo3p4(){
	let nb1=Number(prompt('Veuillez saisir le premier nombre:'));
	let nb2=Number(prompt('Veuillez saisir le deuxième nombre:'));
	while (isNaN(nb1) || isNaN(nb2))
	{
		nb1=Number(prompt('Erreur, veuillez saisir le premier NOMBRE:'));
		nb2=Number(prompt('Erreur, veuillez saisir le deuxième NOMBRE:'));
	}
	if ((nb1>=0 && nb2>=0) || (nb1<=0 && nb2<=0)){
		if (nb1==0 || nb2==0){
			document.getElementById("Exo").innerHTML = '<p>le produit des deux nombres est nul.</p>';
		}else{
			document.getElementById("Exo").innerHTML = '<p>le produit des deux nombres est positif.</p>';
		}
	}else{
		document.getElementById("Exo").innerHTML = '<p>Le produit des deux nombres est négatif.</p>';
	}
	disabled(btn3p4);
}

function Exo3p5(){
	let age=Number(prompt('Veuillez saisir l\'age de l\'enfant (à partir de 6 ans):'));
	while (isNaN(age) || age<6)
	{
		age=Number(prompt('Erreur, veuillez saisir l\'AGE de l\'enfant (à PARTIR DE 6 ans):'));
	}
	if (age<10 && age>=6){
		if (age<8){
			document.getElementById("Exo").innerHTML = '<p>l\'enfant est de catégorie Poussin.</p>';
		}else{
			document.getElementById("Exo").innerHTML = '<p>l\'enfant est de catégorie Pupille.</p>';
		}
	}else{
		if (age<12){
			document.getElementById("Exo").innerHTML = '<p>l\'enfant est de catégorie Minime.</p>';
		}else{
			document.getElementById("Exo").innerHTML = '<p>l\'enfant est de catégorie Cadet.</p>';
		}
	}
	disabled(btn3p5);
}

function Exo4p1(){
	let tutu=prompt('tutu');
	let toto=prompt('toto');
	let tata=prompt('tata');
	if (tutu>toto+4){
		tutu=tutu+1;
	}else{
		if (tata==='OK'){
			tutu=tutu+1;
		}else{
			tutu=tutu-1;
		}
	}
	document.getElementById("Exo").innerHTML ='<p>tutu = '+tutu+'</p><p>toto = '+toto+'</p><p>tata= '+tata+'</p>';
	disabled(btn4p1);
}

function Exo4p2(){
	let heure=Number(prompt('veuillez saisir une heure (entre 0 et 23):'));
	let min=Number(prompt('veuillez saisir une minutes (entre 0 et 59):'));
	while (isNaN(heure) || heure<0 || heure>23 || isNaN(min) || min<0 || min>59){
		heure=Number(prompt('Erreur, veuillez saisir une HEURE (entre 0 et 23):'));
		min=Number(prompt('Erreur, veuillez saisir une MINUTES (entre 0 et 59):'));
	}
	min++;
	if (min===59){
		heure++;
		min=0;
		if (heure===24){
			heure=0;
		}
	}
	document.getElementById('Exo').innerHTML='<p>Dans une minute, il sera '+heure+' heure(s) et '+min+' minute(s).</p>'
	disabled(btn4p2);
}

function Exo4p3(){
	let h=Number(prompt('veuillez saisir une heure (entre 0 et 23):'));
	let m=Number(prompt('veuillez saisir une minute (entre 0 et 59):'));
	let s=Number(prompt('veuillez saisir une seconde (entre 0 et 59):'));
	while (isNaN(h) || h<0 || h>23 || isNaN(m) || m<0 || m>59 || isNaN(s) || s<0 || s>59){
		h=Number(prompt('Erreur, veuillez saisir une HEURE (entre 0 et 23):'));
		m=Number(prompt('Erreur, veuillez saisir une MINUTE (entre 0 et 59):'));
		s=Number(prompt('Erreur, veuillez saisir une SECONDE (entre 0 et 59):'));
	}
	s++;
	if (s===60){
		s=0;
		m++;
		if (m===60){
			m=0;
			h++;
			if (h===24){
				h=0;
			}
		}
	}
	document.getElementById('Exo').innerHTML='<p>Dans une seconde, il sera '+h+' heure(s), '+m+' minute(s) et '+s+' seconde(s).</p>'
	disabled(btn4p3);
}

function Exo4p4(){
	let nb=Number(prompt('veuillez saisir le nombre de photo(s):'));
	while (isNaN(nb)){
		nb=Number(prompt('Erreur, veuillez saisir le NOMBRE de photo(s):'));
	}
	if (nb<=10){
		document.getElementById('Exo').innerHTML='<p>La facture est de '+(0.10*nb)+' euros.</p>';
	}else if (nb<=20){
		document.getElementById('Exo').innerHTML='<p>La facture est de '+(1+0.09*(nb-10))+' euros.</p>';
	}else{
		document.getElementById('Exo').innerHTML='<p>La facture est de '+(1+0.9+0.08*(nb-20))+' euros.</p>';
	}
	disabled(btn4p4);
}

function Exo4p5(){
	let age=Number(prompt('veuillez saisir l\'age de l\'habitant:'));
	let sexe=prompt('veuillez saisir le sexe de l\'habitant (homme/femme):');
	while (isNaN(age)){
		age=Number(prompt('Erreur, veuillez saisir l\'AGE de l\'habitant:'));
	}
	while (sexe.toLowerCase()!=='femme' && sexe.toLowerCase()!=='homme'){
		sexe=prompt('Erreur, veuillez saisir le sexe de l\'habitant (HOMME/FEMME):');
	}
	if ((age>20 && sexe==='homme') || (age>=18 && age<=35 && sexe==='femme')){
		document.getElementById('Exo').innerHTML='<p>L\'habitant est imposable.</p>';
	}else{
		document.getElementById('Exo').innerHTML='<p>L\'habitant est non-imposable.</p>';
	}
	disabled(btn4p5);
}

function Exo4p6(){
	let C1=Number(prompt('veuillez saisir le score du candidat numéro 1:'));
	let C2=Number(prompt('veuillez saisir le score du candidat numéro 2:'));
	let C3=Number(prompt('veuillez saisir le score du candidat numéro 3:'));
	let C4=Number(prompt('veuillez saisir le score du candidat numéro 4:'));
	while (isNaN(C1) || isNaN(C2) || isNaN(C3) || isNaN(C4)){
		if (isNaN(C1)){
			C1=Number(prompt('Erreur, veuillez saisir le SCORE du candidat numéro 1:'));
		}else if (isNaN(C2)){
			C2=Number(prompt('Erreur, veuillez saisir le SCORE du candidat numéro 2:'));
		}else if (isNaN(C3)){
			C3=Number(prompt('Erreur, veuillez saisir le SCORE du candidat numéro 3:'));
		}else{
			C4=Number(prompt('Erreur, veuillez saisir le SCORE du candidat numéro 4:'));
		}
	}
	if ((C1/(C1+C2+C3+C4))>(50/100)){
		document.getElementById('Exo').innerHTML='<p>Candidat 1: élu.</p>';
	}else if((C1/(C1+C2+C3+C4))>=(12.5/100)){
		if(C1>=C2 && C1>=C3 && C1>=C4){
			document.getElementById('Exo').innerHTML='<p>Candidat 1: ballotage favorable.</p>';
		}else{
			document.getElementById('Exo').innerHTML='<p>Candidat 1: ballotage défavorable.</p>';
		}
	}else{
		document.getElementById('Exo').innerHTML='<p>Candidat 1: battu.</p>';
	}
	disabled(btn4p6);
}

function Exo5p1(){
	let nb=0;
	while (nb<1 || nb>3){
		nb=Number(prompt('Saisir un nombre entre 1 et 3'));
		if (isNaN(nb)){
			nb=Number(prompt('Saisir un NOMBRE entre 1 et 3'));	
		}
	}
	document.getElementById('Exo').innerHTML='<p>nb = '+nb+'</p>';
	disabled(btn5p1);
}

function Exo5p2(){
	let nb=Number(prompt('Saisir un nombre entre 10 et 20'));
	while (isNaN(nb)){
		nb=Number(prompt('Erreur, saisir un NOMBRE entre 10 et 20'));
	}
	while (nb<10 || nb>20){
		if (nb>20){
			nb=Number(prompt('Trop grand! Saisir un nombre entre 10 et 20'));
		}else if (nb<10){
			nb=Number(prompt('Trop petit! Saisir un nombre entre 10 et 20'));
		}
		while (isNaN(nb)){
		nb=Number(prompt('Erreur, saisir un NOMBRE entre 10 et 20'));
		}
	}
	document.getElementById('Exo').innerHTML='<p>nb = '+nb+'</p>';
	disabled(btn5p2);
}

function Exo5p3(){
	let nb=Number(prompt('Saisir un nombre'));
	document.getElementById('Exo').innerHTML='';
	while (isNaN(nb)){
		nb=Number(prompt('Erreur, saisir un NOMBRE'));
	}
	for (let i=nb+1;i<=nb+10;i++){
		document.getElementById('Exo').innerHTML+='<p>'+i+'</p>';
	}
	disabled(btn5p3);
}

function Exo5p5(){
	let nb=Number(prompt('Saisir un nombre'));
	while (isNaN(nb)){
		nb=Number(prompt('Erreur, saisir un NOMBRE'));
	}
	document.getElementById('Exo').innerHTML='<p>Table de multiplication de '+nb+'</p>'
	for (let i=1;i<=10;i++){
		document.getElementById('Exo').innerHTML+='<p>'+nb+' x '+i+' = '+nb*i+'</p>';
	}
	disabled(btn5p5);
}

function Exo5p6(){
	let nb=Number(prompt('Saisir un nombre'));
	while (isNaN(nb)){
		nb=Number(prompt('Erreur, saisir un NOMBRE'));
	}
	let cal=0;
	for (let i=1;i<=nb;i++){
		cal=cal+i;
	}
	document.getElementById('Exo').innerHTML='<p>la somme totale des nombres de 1 à '+nb+' est de : '+cal+'</p>';
	disabled(btn5p6);
}

function Exo6p1(){
	const tab=[0,0,0,0,0,0,0];
	document.getElementById('Exo').innerHTML='';
	tab.forEach(function(tab){document.getElementById('Exo').innerHTML+='<p>'+tab+'</p>';});
	disabled(btn6p1);
}

function Exo6p2(){
	const tab=['a','e','i','o','u','y'];
	document.getElementById('Exo').innerHTML='';
	tab.forEach(function(tab){document.getElementById('Exo').innerHTML+='<p>'+tab+'</p>';});
	disabled(btn6p2);
}

function Exo6p3(){
	const tab=[];
	document.getElementById('Exo').innerHTML='';
	for (let i=0;i<=8;i++){
		tab.push(prompt('veuillez saisir la note numéro '+(Number(i)+1)+' :'))
		while (isNaN(Number(tab[i]))){
			tab.pop();
			tab.push(prompt('Erreur, veuillez saisir la NOTE numéro '+(Number(i)+1)+' :'))
		}
	}
	tab.forEach(function(tab){document.getElementById('Exo').innerHTML+='<p>'+tab+'</p>';});
	disabled(btn6p3);
}

function Exo6p4(){
	let nb=Number(prompt('Veuillez taper le nombre de valeurs souhaité : '));
	while (isNaN(nb) || nb<=0){
		nb=Number(prompt('Erreur, veuillez taper le NOMBRE de valeurs souhaité (SUPERIEUR A 0) : '));
	}
	const tab=[];
	let neg=0;
	let pos=0;
	for (let i=0;i<=(nb-1);i++){
		tab.push(prompt('veuillez saisir la valeur numéro '+(Number(i)+1)+' :'));
		while (isNaN(Number(tab[i]))){
			tab.pop();
			tab.push(prompt('Erreur, veuillez saisir la VALEUR numéro '+(Number(i)+1)+' :'))
		}
		if (tab[i]<0){
			neg++;
		}else if (tab[i]>0){
			pos++;
		}
	}
	document.getElementById('Exo').innerHTML='<p>Il y a '+pos+' nombre(s) positif et '+neg+' nombre(s) négatif.</p>';
	disabled(btn6p4);
}

function Exo7p1(){
	document.getElementById('Exo').innerHTML='';
	let tab = [[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0]];
	for (let i=0; i<6;i++){
		document.getElementById('Exo').innerHTML+='<p id="test'+i+'">'+tab[i]+'</p>';
	}
	disabled(btn7p1);
}

function Exo7p2(){
	document.getElementById('Exo').innerHTML='';
	let val=1;
	let tab = [[],[]];
	for (let i=0; i<1;i++){
		for (let j=0; j<2; j++){
			tab[i][j]=val;
			val=val+1;
		}
		document.getElementById('Exo').innerHTML+='<p id="test'+i+'">'+tab[i]+'</p>';
	}
	disabled(btn7p2);
}

btn1p1.addEventListener("click",Exo1p1,true);
btn1p2.addEventListener("click",Exo1p2,true);
btn1p3.addEventListener("click",Exo1p3,true);
btn1p4.addEventListener("click",Exo1p4,true);
btn1p5.addEventListener("click",Exo1p5,true);
btn1p6.addEventListener("click",Exo1p6,true);
btn1p7.addEventListener("click",Exo1p7,true);
btn1p8.addEventListener("click",Exo1p8,true);
btn1p9.addEventListener("click",Exo1p9,true);
btn2p1.addEventListener("click",Exo2p1,true);
btn2p2.addEventListener("click",Exo2p2,true);
btn2p3.addEventListener("click",Exo2p3,true);
btn3p1.addEventListener("click",Exo3p1,true);
btn3p2.addEventListener("click",Exo3p2,true);
btn3p3.addEventListener("click",Exo3p3,true);
btn3p4.addEventListener("click",Exo3p4,true);
btn3p5.addEventListener("click",Exo3p5,true);
btn4p1.addEventListener("click",Exo4p1,true);
btn4p2.addEventListener("click",Exo4p2,true);
btn4p3.addEventListener("click",Exo4p3,true);
btn4p4.addEventListener("click",Exo4p4,true);
btn4p5.addEventListener("click",Exo4p5,true);
btn4p6.addEventListener("click",Exo4p6,true);
btn5p1.addEventListener("click",Exo5p1,true);
btn5p2.addEventListener("click",Exo5p2,true);
btn5p3.addEventListener("click",Exo5p3,true);
btn5p5.addEventListener("click",Exo5p5,true);
btn5p6.addEventListener("click",Exo5p6,true);
btn6p1.addEventListener("click",Exo6p1,true);
btn6p2.addEventListener("click",Exo6p2,true);
btn6p3.addEventListener("click",Exo6p3,true);
btn6p4.addEventListener("click",Exo6p4,true);
btn7p1.addEventListener("click",Exo7p1,true);
btn7p2.addEventListener("click",Exo7p2,true);