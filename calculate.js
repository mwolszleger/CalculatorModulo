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
//greatest common divisor
function GCD(a, b) {
		while(b!=0) {
			var temp = b
			b = modulo(a, b)
			a = temp
		}
		return a
}

//function inverseElement(a, n) {
//	for (var i = 1; i < n; i++) {
//		if (modulo(i*a, n)==1) {
//			return i
//		}
//	}
//	return "Brak elementu odwrotnego"
//}

function inverseElement(a, n) {
	N=n
	if(GCD(a,n)==1) {
		var p=1, q=0, r=0, s=1
		var c, quot, new_r, new_s
		while(n!=0) {
			c = modulo(a,n)
			quot = Math.floor(a/n)
			a = n
			n = c
			new_r = p - quot*r
			new_s = q - quot*s
			p=r
			q=s
			r = new_r
			s = new_s
		}
		return modulo(p,N)
	}
	else {
		return "Brak elementu odwrotnego"
	}
}
