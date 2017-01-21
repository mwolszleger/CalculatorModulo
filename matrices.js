
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

