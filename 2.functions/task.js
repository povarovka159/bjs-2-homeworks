function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		if (min > arr[i]) {
			min = arr[i];
		} else if (max < arr[i]) {
			max = arr[i];
		}
	}
	return {
		min: min,
		max: max,
		avg: Number((sum / arr.length).toFixed(2))
	};
}

function summElementsWorker(...arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		if (arr.length === 0) {
			break;
		}
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	let min = arr[0];
	let max = arr[0];
	let difference = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr.length === 0) {
			break;
		} else if (min > arr[i]) {
			min = arr[i];
		} else if (max < arr[i]) {
			max = arr[i];
		}
		difference = max - min;
	}
	return difference;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	let difference = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr.length === 0) {
			break;
		} else if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
		difference = sumEvenElement - sumOddElement;
	}
	return difference;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	let average = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr.length === 0) {
			break;
		} else if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement += 1;
		}
		average = (sumEvenElement / countEvenElement);
	}
	return average;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i])
		if (maxWorkerResult < result) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}