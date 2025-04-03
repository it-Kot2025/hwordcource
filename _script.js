 
// Задача "Угадай число"
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {

    const guess = parseInt(prompt("Введите число от 1 до 100:"));


    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Пожалуйста, введите корректное число от 1 до 100.");
        checkGuess();
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        alert(`Поздравляем! Вы угадали число ${randomNumber} за ${attempts} попыток.`);
    } else if (guess < randomNumber) {
        alert("Загаданное число больше.");
        checkGuess();
    } else {
        alert("Загаданное число меньше.");
        checkGuess();
    }
}



// задача "Арифметические задачи"
const operations = ["+", "-", "*", "/"];


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateTask() {
    const operation = operations[getRandomNumber(0, operations.length - 1)];
    let num1, num2, task;

    switch (operation) {
        case "+":
            num1 = getRandomNumber(1, 100);
            num2 = getRandomNumber(1, 100);
            task = `${num1} + ${num2}`;
            break;
        case "-":
            num1 = getRandomNumber(1, 100);
            num2 = getRandomNumber(1, num1);
            task = `${num1} - ${num2}`;
            break;
        case "*":
            num1 = getRandomNumber(1, 10);
            num2 = getRandomNumber(1, 10);
            task = `${num1} * ${num2}`;
            break;
        case "/":
            num1 = getRandomNumber(1, 100);
            num2 = getRandomNumber(1, 10);
            num1 = num1 * num2;
            task = `${num1} / ${num2}`;
            break;
    }

    return { task, correctAnswer: eval(task) };
}


function checkAnswer() {
    const { task, correctAnswer } = generateTask();
    const userAnswer = prompt(`Решите задачу: ${task}`);

    if (userAnswer === null) {
        alert("Вы отменили ввод.");
        return;
    }

    const userAnswerNumber = parseFloat(userAnswer);

    if (isNaN(userAnswerNumber)) {
        alert("Пожалуйста, введите число.");
        checkAnswer();
        return;
    }

    if (userAnswerNumber === correctAnswer) {
        alert("Правильно!");
    } else {
        alert(`Неправильно. Правильный ответ: ${correctAnswer}`);
    }
    const nextTask = confirm("Хотите решить еще одну задачу?");
    if (nextTask) {
        checkAnswer();
    } else {
        alert("Спасибо за игру!");
    }
}


// игра "Переверни текст"


function reverseText(str) {
    return str.split('').reverse().join('');
}

function startGame() {
    const userInput = prompt("Введите текст для переворота:");
    if (userInput !== null) {
        const reversedText = reverseText(userInput);
        alert(`Перевернутый текст: ${reversedText}`);
    }
}


// игра "Викторина"


const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 // номер правильного ответа
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function startQuiz() {
    let score = 0;

    quiz.forEach((q, index) => {
        const userAnswer = prompt(`Вопрос ${index + 1}: ${q.question}\n${q.options.join('\n')}`);
        if (userAnswer !== null && parseInt(userAnswer) === q.correctAnswer) {
            score++;
        }
    });

    alert(`Викторина завершена!\nВаш результат: ${score} из ${quiz.length}`);
}

// игра "Камень, Ножницы, Бумага"

function getUserChoice() {
    let userChoice;
    do {
        userChoice = prompt('Выберите: камень, ножницы или бумага').toLowerCase();
    } while (!['камень', 'ножницы', 'бумага'].includes(userChoice));
    return userChoice;
}

function getComputerChoice() {
    const choices = ["камень", "ножницы", "бумага"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Ничья';
    }

    const rules = {
        'камень': 'ножницы',
        'ножницы': 'бумага',
        'бумага': 'камень'
    };

    if (rules[userChoice] === computerChoice) {
        return 'Победа';
    } else {
        return 'Поражение';
    }
}

function playGame() {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    alert(`Ваш выбор: ${userChoice}`);
    alert(`Выбор компьютера: ${computerChoice}`);
    alert(`Результат: ${result}`);
}


// игра "Генератор случайных цветов"

function changeBackgroundColor() {
    // Генерируем случайный цвет
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    
    // Меняем фон именно этого элемента игры
    document.querySelector('.minigames').style.backgroundColor = randomColor;
}
