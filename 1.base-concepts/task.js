"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;

	if (d === 0) {
		arr = [-b / (2 * a)];
	} else if (d > 0) {
		arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let P = percent / 100 / 12;
	let S = amount - contribution;
	let payment = S * (P + (P / (((1 + P) ** countMonths) - 1)));
	return (parseFloat(((payment) * countMonths).toFixed(2)));
}