import styles from './app.module.css';
import { useState } from 'react';
import { BUTTON_VALUES } from './data';

export const App = () => {
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [result, setResult] = useState('');

	const setValueOfOperand = (event) => {
		const { target } = event;
		const key = target.textContent;
		if (operator === '') {
			setOperand1((value) => {
				return value + key;
			});
		} else {
			setOperand2((value) => {
				return value + key;
			});
		}
	};

	const setValueOfOperatorToPlus = () => {
		if (operand1 !== '') {
			setOperator('+');
			setResult('');
		}
	};

	const setValueOfOperatorToMinus = () => {
		if (operand1 !== '') {
			setOperator('-');
			setResult('');
		}
	};

	const getResult = () => {
		let calculatingResult;
		switch (operator) {
			case '+':
				calculatingResult = Number(operand1) + Number(operand2);
				break;
			case '-':
				calculatingResult = Number(operand1) - Number(operand2);
				break;
			default:
				break;
		}
		setResult(calculatingResult);
		setOperand1(calculatingResult);
		setOperand2('');
		setOperator('');
	};

	const clearAll = () => {
		setOperand1('');
		setOperand2('');
		setOperator('');
		setResult('');
	};

	const showResult = <p className={styles.result}>{result}</p>;
	const showCalculations = <p>{operand1 + operator + operand2}</p>;

	return (
		<div className={styles.container}>
			<div className={styles.calculate}>
				<div className={styles.display}>
					{result !== '' ? showResult : showCalculations}
				</div>
				<div className={styles.buttons}>
					<div className={styles.numbers}>
						{BUTTON_VALUES.map((button) => {
							return (
								<button
									className={styles.button}
									key={button.id}
									onClick={
										button.id === '004'
											? setValueOfOperatorToPlus
											: button.id === '008'
												? setValueOfOperatorToMinus
												: button.id === '013'
													? getResult
													: button.id === '014'
														? clearAll
														: setValueOfOperand
									}
								>
									{button.value}
								</button>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
