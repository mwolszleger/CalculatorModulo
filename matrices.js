function calculateDetInv()
{
	var matrix=new Array(matrix_size);
	for(var i=0;i<matrix_size;i++){
		matrix[i]=new Array(matrix_size);
	}
	var n=parseInt($('#n').val());
	var inputs=document.getElementsByClassName('matrix-input');
	for(var i=0;i<matrix_size;i++)
		for(var j=0;j<matrix_size;j++){
			matrix[i][j]=parseInt(inputs[matrix_size*i+j].value);
		}
	var det=determinant(matrix,n);
	$('#matrixText').text(det);
	if(GCD(det,n)>1)
	{
		$('#inverse').text("Macierz odwrotna nie istnieje");
		return;
	}
	
	
	var inverse=inverseMatrix(matrix, n);
	var matrixText="\\(\\begin{pmatrix}";
	for(var i=0;i<matrix_size;i++){
		for(var j=0;j<matrix_size;j++){
			matrixText+=inverse[i][j];
			if(j!=matrix_size-1)
				matrixText+="&";
		}
		if(i!=matrix_size-1)
				matrixText+="\\\\";
	}
	matrixText+="\\end{pmatrix}\\)";
	
	$('#inverse').text(matrixText);
	MathJax.Hub.Queue(["Typeset",MathJax.Hub,"inverse"]);
	
}
function determinant(matrix, n) {

    if (matrix.length == 2) {
        res = subtraction(multiplication(matrix[0][0], matrix[1][1], n), multiplication(matrix[0][1], matrix[1][0], n), n);
        return res;
    }
    else if (matrix.length > 2) {
        var det = 0;
        var tempMat = new Array(matrix.length - 1);

        for (var i = 0; i < matrix.length - 1; i++) {
            tempMat[i] = new Array(matrix.length - 1);

        }
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix.length - 1; j++) {
                for (var k = 0; k < matrix.length - 1; k++) {
                    if (k < i)
                        tempMat[j][k] = matrix[j + 1][k];
                    else
                        tempMat[j][k] = matrix[j + 1][k + 1];
                }
            }
            var temDet = multiplication(matrix[0][i], determinant(tempMat, n), n);
            

            if (i % 2 == 0)
                det = addition(det, temDet, n);
			
            else
                det = subtraction(det, temDet, n);

        }
        return det;

    }

}
function inverseMatrix(matrix, n) {
    var inverseDet = inverseElement(determinant(matrix, n), n);
    var inverse = new Array(matrix.length);
    for (var i = 0; i < matrix.length; i++) {
        inverse[i] = new Array(matrix.length);

    }
    var tempMat = new Array(matrix.length - 1);

    for (var i = 0; i < matrix.length - 1; i++) {
        tempMat[i] = new Array(matrix.length - 1);

    }
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix.length; j++) {
            for (var k = 0; k < matrix.length - 1; k++) {
                for (var l = 0; l < matrix.length - 1; l++) {
                    var x, y;
                    if (k < i)
                        x = k;
                    else
                        x = k + 1;
                    if (l < j)
                        y = l;
                    else
                        y = l + 1;
                    tempMat[k][l] = matrix[x][y];
                }
            }
            inverse[j][i] = determinant(tempMat, n);
            if (i + j % 2 == 1)
                inverse[j][i] *= -1;
            inverse[j][i] = multiplication(inverseDet, inverse[j][i], n);
        }

    }
    return inverse;
}

