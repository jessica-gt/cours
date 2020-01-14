let val=1;
let tab = [[],[]];
for (let i=0; i<1;i++){
	for (let j=0; j<2; j++){
		tab[i][j]=val;
		val=val+1;
	}
	document.getElementById('test').innerHTML+='<p id="test'+i+'">'+tab[i]+'</p>';
}