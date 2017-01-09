function modulo(a, n) {
	if(a>=0)
	{
		return a%n
	}
	else
	{
		return a%n+n
	}
}

function addition(a, b, n) {
	return modulo(a+b, n)
}

function subtraction(a, b, n) {
	return addition(a, (-1)*b, n)
}

function multiplication(a, b, n) {
	return modulo(a*b, n)
}

function power(a, k, n) {
	var temp = a
	if(k==0)
		return 1;
	for (var i = 1; i < k; i++) {
		temp = multiplication(a, temp, n)
	}
	return temp
}

function oppositeElement(a, n) {
	return n-modulo(a,n)
}

function inverseElement(a, n) {
	for (var i = 1; i < n; i++) {
		if (modulo(i*a, n)==1) {
			return i
		}
	}
	return "Brak elementu odwrotnego"
}
