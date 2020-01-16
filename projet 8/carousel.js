let carousel=document.getElementById('carousel');
let suivant=document.getElementById('suivant');
let precedent=document.getElementById('precedent');

//vous aurez besoin de ce genre de choses: 
//carousel.style.borderColor="#f00";

function color(nb){
	let ok=false;
	let i=0;
	while (i<=3 && !ok){
		if (carousel.children[i].style.display===''){
			ok=true;
			if (i%2===0){
				suivant.style.backgroundColor="#f88";
				suivant.style.border="none";
				precedent.style.backgroundColor="#f88";
				precedent.style.border="none";
			}else{
				suivant.style.backgroundColor="#8f8";
				suivant.style.border="none";
				precedent.style.backgroundColor="#8f8";
				precedent.style.border="none";
			}
		}
		i++;
	}
}

function next(){
	let ok=false;
	let i=0;
	while (i<=3 && !ok){
		if (carousel.children[i].style.display===''){
			ok=true;
			for (let j=0;j<=3;j++){
				if (j===i+1 || j===0 && i===3){
					carousel.children[j].style.display='';
				}else{
					carousel.children[j].style.display='none';
				}
			}
		}
		i++;
		color();
	}
}

function previous(){
	let ok=false;
	let i=0;
	while (i<=3 && !ok){
		if (carousel.children[i].style.display===''){
			ok=true;
			for (let j=0;j<=3;j++){
				if (j===i-1 || j===3 && i===0){
					carousel.children[j].style.display='';
				}else{
					carousel.children[j].style.display='none';
				}
			}
		}
		i++;
		color();
	}
}


/*
function next(){
	if (carousel.children[0].style.display===''){
		carousel.children[0].style.display='none';
		carousel.children[1].style.display='';
		carousel.children[2].style.display='none';
		carousel.children[3].style.display='none';
	} else if (carousel.children[1].style.display===''){
		carousel.children[0].style.display='none';
		carousel.children[1].style.display='none';
		carousel.children[2].style.display='';
		carousel.children[3].style.display='none';
	} else if (carousel.children[2].style.display===''){
		carousel.children[0].style.display='none';
		carousel.children[1].style.display='none';
		carousel.children[2].style.display='none';
		carousel.children[3].style.display='';
	} else if (carousel.children[3].style.display===''){
		carousel.children[0].style.display='';
		carousel.children[1].style.display='none';
		carousel.children[2].style.display='none';
		carousel.children[3].style.display='none';
	}
}

function previous(){
	if (carousel.children[0].style.display===''){
		carousel.children[0].style.display='none';
		carousel.children[1].style.display='none';
		carousel.children[2].style.display='none';
		carousel.children[3].style.display='';
	} else if (carousel.children[1].style.display===''){
		carousel.children[0].style.display='';
		carousel.children[1].style.display='none';
		carousel.children[2].style.display='none';
		carousel.children[3].style.display='none';
	} else if (carousel.children[2].style.display===''){
		carousel.children[0].style.display='none';
		carousel.children[1].style.display='';
		carousel.children[2].style.display='none';
		carousel.children[3].style.display='none';
	} else if (carousel.children[3].style.display===''){
		carousel.children[0].style.display='none';
		carousel.children[1].style.display='none';
		carousel.children[2].style.display='';
		carousel.children[3].style.display='none';
	}
}
*/

suivant.onclick=next;
precedent.onclick=previous;
color();