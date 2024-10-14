
const questions = [
    {
        question: "Which is the most popular programming language for 'WEB' ?",
        answers: ["Python", "Django", "JavaScript", "PHP"],
        correct: 2
    },
    {
        question: "Which company developed JavaScript?",
        answers: ["Microsoft", "Mozilla", "Netscape", "Google"],
        correct: 2
    },
    {
        question: "Which keyword is used to define a constant in JavaScript?",
        answers: ["let", "const", "var", "constant"],
        correct: 1
    },
    {
        question: "What is the actual use of JavaScript??",
        answers: ["Structuring of the website", "Styling of the website", "Functionality of the website", "All of the above"],
        correct: 2
    },
    {
        question: "Who Developed JavaScript?",
        answers: ["Guido van Rossum", "Brendan Eich", " Dennis Ritchie", " Rasmus Lerdorf"],
        correct: 1
    },
    {
        question: "If i want to display my output on the temporary window not on the actual webpage where i can able to display?",
        answers: ["Console", "Alert", "document.write", "All of the above"],
        correct: 3
    },
    {
        question: "What are the JavaScript Display Possibilities",
        answers: ["innerHTML", "window.alert()", "console.log()", "document.write()", "All of the above"],
        correct: 4
    },
    {
        question: "How does JavaScript Statements looks like ?",
        answers: [":", ";", ".", "none of them"],
        correct: 1
    },
    {
        question: "What is the use of Comments in any programming language?",
        answers: ["To hide the output","to delete the output","to use it as an object","None Of them"],
        correct: 0
    },
    {
        question: "What is the actual use of variables in JavaScript?",
        answers: ["to store the values", "to check the values","to allign the values","None of the above"],
        correct: 0
    },
    {
        question: "In 'Let' variable what are the features we get?",
        answers: ["Reassign & Redeclare", "Only Reassign" , "Only Redeclare","All Of the above"],
        correct: 1
    },
    {
        question: "Which is the most useless Variable in JavaScript",
        answers: ["Var","let","Const","None of the Above"],
        correct: 0
    },
    {
        question: "Does camelCase is the most preferred Case in JavaScript",
        answers: ["True","False"],
        correct: 0
    },
    {
        question: "What Does Arithmetic Operator use ?",
        answers: ["Addition" , "Subtraction","Division","Modulus","All Of the Above"],
        correct: 4
    },
    {
        question: "With the help of Arithmetic Operator can we able to create simple and complex programming",
        answers: ["True","False"],
        correct: 0
    },
    {
        question: "Is String , Number , Boolean are the Datatype of the JavaScript",
        answers: ["True","False"],
        correct: 0
    },
    {
        question: "Does Functions In JavaScript are the most useless thing in the JavaScript Programming",
        answers: ["True","False"],
        correct: 1
    },
    {
        question: "Variables defined with const cannot be Redeclared & Reassigned",
        answers: ["True","False"],
        correct: 0
    },
    {
        question: "If the Datatype is Undefined then :",
        answers: ["It is possible we can define anything afterwards","It is possible we can't define anything afterwards","It will gonna considered as a string","None of the above"],
        correct: 0
    },
    {
        question: "Object is .....",
        answers: ["the advance form of Array","a Datatype","Objects are variables too","All of the above"],
        correct: 3
    },
    {
        question: "What is the first name of JavaScript",
        answers: ["LiveScript","Moca","none of the above","all of the above"],
        correct: 1
    },
    {
        question: "In the String.lenght() does the lenght property count the value from index?",
        answers: ["True","False"],
        correct: 1
    },
    {
        question: "What is the correct way to declare a variable using 'let'?",
        answers: ["let varName;", "var letName;", "const varName;", "declare letName;"],
        correct: 0
    },
    {
        question: "What will the following code output: console.log(typeof NaN)?",
        answers: ["number", "undefined", "NaN", "object"],
        correct: 0
    },
    {
        question: "What does the 'const' keyword do in JavaScript?",
        answers: ["Creates a variable that can be reassigned", "Creates a variable that cannot be redeclared", "Creates a variable that cannot be reassigned even redeclared", "Creates a variable that can be modified"],
        correct: 2
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: ["=", "==", "===", "=>"],
        correct: 0
    },
    {
        question: "What is the output of: console.log(5 + '5')?",
        answers: ["55", "10", "Error", "undefined"],
        correct: 0
    },
    {
        question: "What data type is returned by the expression '10' + 5?",
        answers: ["String", "Number", "Boolean", "Object"],
        correct: 0
    },
    {
        question: "Which of the following is a valid way to create an object?",
        answers: ["var obj = {};", "obj = let();", "var = var();", "All of the above"],
        correct: 0
    },
    {
        question: "What will 'delete obj.property' do?",
        answers: ["Remove the property from the object", "Set the property to undefined", "Return an error", "None of the above"],
        correct: 0
    },
    {
        question: "What is the output of: console.log('hello'.length)?",
        answers: ["5", "4", "hello", "undefined"],
        correct: 0
    },
    {
        question: "Which method can be used to convert a string to uppercase?",
        answers: ["toUpperCase()", "upperCase()", "toUpper()", "capitalize()"],
        correct: 0
    },
    {
        question: "What does the 'Math.random()' function return?",
        answers: ["A random integer", "A random number between 0 and 1", "A random number between 1 and 10", "None of the above"],
        correct: 1
    },
    {
        question: "Which of the following methods can convert a number to a string?",
        answers: ["Array(value)", "value.toString()", "All of the Above", "None of the above"],
        correct: 1
    },
    {
        question: "Which operator can be used to compare both value and type?",
        answers: ["==", "===", "!=", "!=="],
        correct: 1
    },
    {
        question: "What is the main use of an object constructor in JavaScript?",
        answers: ["To create new objects", "To store variables", "To define functions", "To convert data types"],
        correct: 0
    },
    {
        question: "What is the output of: console.log(5 == '5')?",
        answers: ["true", "false", "undefined", "Error"],
        correct: 0
    },
    {
        question: "Which method is used to find the index of a substring in a string?",
        answers: ["indexOf()", "findIndex()", "substrIndex()", "getIndex()"],
        correct: 0
    },
    {
        question: "What is the output of: console.log('Hello'.charAt(0))?",
        answers: ["H", "e", "o", "Error"],
        correct: 0
    },
    {
        question: "What year was JavaScript created?",
        answers: ["1990", "1995", "2000", "2005"],
        correct: 1
    },
    {
        question: "Which of the following is a JavaScript framework?",
        answers: ["React", "Django", "Flask", "Ruby on Rails"],
        correct: 0
    },
    {
        question: "Which of the following is true about JavaScript?",
        answers: ["It is a compiled language", "It is a strongly typed language", "It is an interpreted language", "It is a backend language"],
        correct: 2
    },
    {
        question: "Which of the following is a way to declare a variable in JavaScript?",
        answers: ["var", "let", "const", "All of the above"],
        correct: 3
    },
    {
        question: "What does the 'toLowerCase()' method do?",
        answers: ["Converts a string to uppercase", "Converts a string to lowercase", "Reverses the string", "Trims whitespace"],
        correct: 1
    },
    {
        question: "What will the following code output: console.log('Hello'.substring(1, 4))?",
        answers: ["Hel", "ell", "llo", "Hello"],
        correct: 1
    },
    {
        question: "Which method is used to split a string into an array of substrings?",
        answers: ["split()", "slice()", "join()", "trim()"],
        correct: 0
    },
    {
        question: "What does the 'indexOf()' method return if the substring is not found?",
        answers: ["0", "null", "-1", "undefined"],
        correct: 2
    },
    {
        question: "What will the type of 42 be when checked using typeof in JavaScript?",
        answers: ["String", "Number", "Boolean", "Object"],
        correct: 1
    },
    {
        question: "Which data type represents a true or false value in JavaScript?",
        answers: ["String", "Number", "Boolean", "Undefined"],
        correct: 2
    },
    {
        question: "Imagine you're writing a script to check the age of a user. If the user is under 18, you want to display 'You are a minor.' If they are 18 or older but less than 65, you display 'You are an adult.' If the user is 65 or older, you display 'You are a senior.' Which of the following code snippets correctly implements this logic?",
        answers: [
            "if (age < 18) { console.log('You are a minor.'); } else if (age >= 18 && age < 65) { console.log('You are an adult.'); } else { console.log('You are a senior.'); }",
            "if (age < 18) console.log('You are an adult.'); else if (age >= 65) console.log('You are a minor.'); else console.log('You are a senior.');",
            "if (age < 18) { console.log('You are a senior.'); } else if (age < 65) { console.log('You are a minor.'); } else { console.log('You are an adult.'); }",
            "if (age >= 18) { console.log('You are a minor.'); } else { console.log('You are an adult.'); }"
        ],
        correct: 0
    }
    
    
    
    
    
    // Add more questions here
];

let currentQuestion = 0;
const answersState = Array(questions.length).fill(null); // null = not attempted

let timeLeft = 30 * 60; // 30 minutes in seconds
const timerElement = document.getElementById('timer');
const countdown = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerElement.textContent = `Time left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeLeft--;
    if (timeLeft < 0) {
        clearInterval(countdown);
        submitQuiz(); // Automatically submit the quiz when time's up
    }
}, 1000);

const questionBox = document.getElementById('question-box');
for (let i = 0; i < questions.length; i++) {
    const questionDiv = document.createElement('div');
    questionDiv.textContent = i + 1;
    questionDiv.classList.add('question-status');
    questionDiv.onclick = () => goToQuestion(i);
    questionBox.appendChild(questionDiv);
}

function updateQuestionBox() {
    const questionStatus = document.querySelectorAll('.question-status');
    questionStatus.forEach((box, index) => {
        box.classList.remove('current', 'answered', 'skipped');
        if (answersState[index] === null) {
            if (index === currentQuestion) {
                box.classList.add('current');
            }
        } else if (answersState[index] === false) {
            box.classList.add('skipped');
        } else {
            box.classList.add('answered');
        }
    });
}

function displayQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question').textContent = question.question;
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = index;
        input.checked = answersState[currentQuestion] === index;
        label.appendChild(input);
        label.appendChild(document.createTextNode(answer));
        answersDiv.appendChild(label);
    });

    document.getElementById('next').style.display = currentQuestion === questions.length - 1 ? 'none' : 'inline-block';
    document.getElementById('submit').style.display = currentQuestion === questions.length - 1 ? 'inline-block' : 'none';
}

function goToQuestion(index) {
    saveAnswer();
    currentQuestion = index;
    displayQuestion();
    updateQuestionBox();
}

function saveAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        answersState[currentQuestion] = parseInt(selectedAnswer.value);
    } else {
        answersState[currentQuestion] = false; // Mark as skipped if no answer selected
    }
}

function nextQuestion() {
    saveAnswer();
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
    }
    displayQuestion();
    updateQuestionBox();
}

function prevQuestion() {
    saveAnswer();
    if (currentQuestion > 0) {
        currentQuestion--;
    }
    displayQuestion();
    updateQuestionBox();
}

// Score calculation and submission
function submitQuiz() {
    saveAnswer(); // Save last answer
    let score = 0;
    let attempted = 0;
    let skipped = 0;

    questions.forEach((question, index) => {
        if (answersState[index] !== null) {
            attempted++;
            if (answersState[index] === question.correct) {
                score++;
            }
        } else {
            skipped++;
        }
    });

    document.getElementById('attempted').textContent = attempted;
    document.getElementById('skipped').textContent = skipped;
    document.getElementById('correct').textContent = score;
    document.getElementById('final-score').textContent = `You have scored ${score} out of ${questions.length}.`;

    showModal();
}

// Show modal
function showModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Initialize the first question
displayQuestion();
updateQuestionBox();