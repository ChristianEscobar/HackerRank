let currentExpression = '';
let currentNumber = '';

(function setupButtonActions() {
	const btns = document.getElementsByClassName('buttonClass');
	for (let i = 0; i < btns.length; i++) {
		document.getElementById(btns[i].id).onclick = buttonAction;
	}
})();

function buttonAction(e) {
	let btn = e.target || e.srcElement;

	if (btn.id === 'btnClr') {
		clearHandler();
	} else if (btn.id === 'btnEql') {
		equalsHandler();
	} else {
		if (isOperator(btn.id)) {
			operatorHandler(btn);
		} else {
			numberHandler(btn);
		}
	}
}

function clearHandler() {
	setDisplay('');
	currentNumber = '';
	currentExpression = '';
}

function setDisplay(value, append = false) {
	if (!append) {
		document.getElementById('res').innerHTML = value;
	} else {
		document.getElementById('res').innerHTML += value;
	}
}

function evaluate() {
	let result = Math.floor(parseInt(eval(currentExpression), 10));
	let resultBase2 = result.toString(2);
	// set the currentNumber to the result in case user decides to chain
	currentNumber = resultBase2;
	setDisplay('');
	setDisplay(resultBase2);
	currentExpression = '';
}

function isOperator(btnId) {
	// We can change this to not use the button ids
	const operatorIds = ['btnSum', 'btnSub', 'btnMul', 'btnDiv'];
	let result = false;
	if (operatorIds.includes(btnId)) {
		result = true;
	}

	return result;
}

function operatorHandler(btn) {
	// convert current number to base 10 and store in expression
	convertAndAddToExpression(currentNumber, 2);
	// add the operator to the expression
	currentExpression = `${currentExpression} ${btn.innerHTML}`;
	currentNumber = '';

	setDisplay(btn.innerHTML, true);
}

function numberHandler(btn) {
	currentNumber = `${currentNumber}${btn.innerHTML}`;

	setDisplay(btn.innerHTML, true);
}

function convertAndAddToExpression(number, base) {
	let currentNumberConverted = parseInt(number, base);
	currentExpression = `${currentExpression} ${currentNumberConverted}`;
}

function equalsHandler() {
	convertAndAddToExpression(currentNumber, 2);
	evaluate();
}
