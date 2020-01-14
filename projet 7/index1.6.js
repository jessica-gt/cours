let A=Number(prompt("Entrez le nombre A:"));
let B=Number(prompt("Entrez le nombre B:"));
while (isNaN(A) || isNaN(B)){
	A=Number(prompt("Erreur, entrez le NOMBRE A:"));
	B=Number(prompt("Erreur, entrez le NOMBRE B:"));
}
let C=A;
A=B;
B=C;
console.log("A=",A);
console.log("B=",B);
