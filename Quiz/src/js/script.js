const DATA = [
	{
		question: 'Вопрос 1',
		answer: [
			{
				id: '1',
				value: 'Ответ 1',
				correct: true
			},
			{
				id: '2',
				value: 'Ответ 2',
				correct: false
			},
			{
				id: '3',
				value: 'Ответ 3',
				correct: false
			}
		]
	},
	{
		question: 'Вопрос 2',
		answer: [
			{
				id: '4',
				value: 'Ответ 4',
				correct: false
			},
			{
				id: '5',
				value: 'Ответ 5',
				correct: true
			}
		]
	}
];

let localResults = {};

const quiz = document.querySelector('#quiz');
const questions = document.querySelector('#questions');
const indicator = document.querySelector('#indicator');
const result = document.querySelector('#results');
const btnNext = document.querySelector('#btn-next');
const btnRestart = document.querySelector('#btn-restart');

const renderQuestion = (index) => {
	renderIndicator(index + 1);
	questions.dataset.currentStep = index;

	const renderAnswers = () =>
		DATA[index].answer
			.map(
				(answer) =>
					`                    <li>
                        <label>
                            <input class='answer-input' type="radio" name=${index} value=${answer.id}>${answer.value}
                        </label>
                    </li> 
            `
			)
			.join('');

	questions.innerHTML = ` 
            <div class="quiz-question-item">
                <div class="quiz-question-item__question">${DATA[index].question}</div>
                <ul class="quiz-question-item__answer">${renderAnswers()}  
                </ul>
            </div>
    `;
};

const renderResults = () => {
	let content = '';

	const getClassname = (answer, questionIndex) => {
		let classname = '';

		if (!answer.correct && answer.id === localResults[questionIndex]) {
			classname = 'answer--invalid';
		} else if (answer.correct) {
			classname = 'answer--valid';
		}
		return classname;
	};

	const getAnswers = (questionIndex) =>
		DATA[questionIndex].answer
			.map((answer) => `<li class=${getClassname(answer, questionIndex)}>${answer.value}</li>`)
			.join('');
	DATA.forEach((questions, index) => {
		content += `
            <div class="quiz-result-item">
                <div class="quiz-result-item__question">${questions.question}</div>
                <ul class="quiz-result-item__answer">${getAnswers(index)}</ul>
            </div>
        `;
	});
	result.innerHTML = content;
};

const renderIndicator = (currentStep) => {
	indicator.innerHTML = `${currentStep}/${DATA.length}`;
};

quiz.addEventListener('change', (event) => {
	if (event.target.classList.contains('answer-input')) {
		localResults[event.target.name] = event.target.value;
		btnNext.disabled = false;
	}
});

quiz.addEventListener('click', (event) => {
	if (event.target.classList.contains('btn-next')) {
		const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;

		if (DATA.length === nextQuestionIndex) {
			// переход к результатам
			questions.classList.add('question--hidden');
			indicator.classList.add('indicator--hidden');
			result.classList.add('result--visible');
			btnNext.classList.add('btn-next--hidden');
			btnRestart.classList.add('btn-restart--visible');

			renderResults();
		} else {
			// переход к слежующему вопросу
			renderQuestion(nextQuestionIndex);
		}
		btnNext.disabled = true;
	}
	if (event.target.classList.contains('btn-restart')) {
		localResults = {};
		result.innerHTML = '';

		questions.classList.remove('question--hidden');
		indicator.classList.remove('indicator--hidden');
		result.classList.remove('result--visible');
		btnNext.classList.remove('btn-next--hidden');
		btnRestart.classList.remove('btn-restart--visible');

		renderQuestion(0);
	}
});

renderQuestion(0);
