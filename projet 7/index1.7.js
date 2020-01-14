let A=Number(prompt("Entrez le nombre A:"));
let B=Number(prompt("Entrez le nombre B:"));
let C=Number(prompt("Entrez le nombre C:"));
while (isNaN(A) || isNaN(B) || isNaN(C)){
	A=Number(prompt("Erreur, entrez le NOMBRE A:"));
	B=Number(prompt("Erreur, entrez le NOMBRE B:"));
	B=Number(prompt("Erreur, entrez le NOMBRE C:"));
}
let D=A;
A=C;
C=B;
B=D;
console.log("A=",A);
console.log("B=",B);
console.log("C=",C);
