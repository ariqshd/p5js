

function Matrix(rows, cols){
	this.rows = rows;
	this.cols = cols;
	this.matrix = [];


	for (var i = 0; i < this.rows; i++){
		this.matrix[i] = [];
		for (var j = 0; j < this.cols; j++){
			this.matrix[i][j] = 0;

		}
	}
}

Matrix.prototype.randomize = function (){
	for (var i = 0; i < this.rows; i++){
		for (var j = 0; j < this.cols; j++){
			this.matrix[i][j] += Math.floor(Math.random()*10);
		}
	}
}

Matrix.prototype.add = function (n){
	if (n instanceof Matrix){
		for (var i = 0; i < this.rows; i++){
			for (var j = 0; j < this.cols; j++){
				this.matrix[i][j] += n.matrix[i][j];
			}
		}
	} else {

		for (var i = 0; i < this.rows; i++){
			for (var j = 0; j < this.cols; j++){
				this.matrix[i][j] += n;
			}
		}
	}
}

Matrix.prototype.transpose = function (){
	let result = new Matrix (this.cols, this.rows);
	for (let = i = 0; i < this.rows; i++){
		for (let j = 0; j < this.cols; j++){
			result.matrix[j][i] = this.matrix[i][j];
		}
	}
	return result;

}

Matrix.prototype.multiply = function (n){
	if (n instanceof Matrix){
		// Dot Product
		if (this.cols !== n.rows){
			console.log('Coulmns of A must match rows of B');
			return undefined;
		}
		let a = this;
		let b = n;
		let result = new Matrix(a.rows, b.cols);
		for (let i = 0; i < result.rows; i++){
			for (let j = 0; j < result.cols; j ++){
				//Dot product of values in col
				let sum = 0;
				for (let k = 0; k < a.cols; k++){
					sum += a[i][k] * b[k][j];
				}
				result.matrix[i][j] = sum;
			}
		}
		return result;
	} else {
		// Cross Product
		for (var i = 0; i < this.rows; i++){
			for (var j = 0; j < this.cols; j++){
				this.matrix[i][j] *= n;
			}
		}
	}
}