function setup(){

	let a = new Matrix(2, 3);
	a.randomize();
	let b = a.transpose();
	console.table(a.matrix);
	console.table(b.matrix);
	
	// b.randomize();
	// console.table(a.matrix);
	// console.table(b.matrix);

	// let c = a.mult(b);
	// console.table(c.matrix);
}