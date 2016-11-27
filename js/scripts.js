// plik scripts.js

var a = 0,
	h = 0;


function getTriagleArea(a, h) {
	if (a > 0 && h > 0) {
		triagleArea = a * h / 2;
	}
	alert('Pole trójkąta o podstawie a = ' + a + ' i wysokości h = ' + h + ' wynosi: ' + triagleArea);
	console.log(triagleArea);
	return triagleArea;
}

var triagle1Area = getTriagleArea(10, 6);
var triagle2Area = getTriagleArea(15, 10);
var triagle3Area = getTriagleArea(10000, 65463);