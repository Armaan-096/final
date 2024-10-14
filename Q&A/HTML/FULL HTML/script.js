
const questions = [
        {
            question: "The <html> tag is the root element of an HTML page.",
            answers: ["True", "False"],
            correct: 0
        },
        {
            question: "Which of the following tags is used to create a paragraph in HTML?",
            answers: ["<p>", "<para>", "<paragraph>", "<pr>"],
            correct: 0
        },
        {
            question: "What attribute is used to specify the URL of a link?",
            answers: ["src", "href", "link", "url"],
            correct: 1
        },
        {
            question: "The <head> section of an HTML document contains the content displayed on the webpage.",
            answers: ["True", "False"],
            correct: 1
        },
        {
            question: "Which element is used to create a dropdown list in HTML?",
            answers: ["<input>", "<select>", "<dropdown>", "<list>"],
            correct: 1
        },
        {
            question: "What is the correct HTML for adding a background color to a page?",
            answers: ["<body background-color='blue'>", "<body style='background-color:blue;'>", "<body bg='blue'>", "<body color='blue'>"],
            correct: 1
        },
        {
            question: "Which HTML element is used to define an unordered list?",
            answers: ["<ul>", "<ol>", "<list>", "<item>"],
            correct: 0
        },
        {
            question: "The <form> element can be used to collect user input.",
            answers: ["True", "False"],
            correct: 0
        },
        {
            question: "Which input type is used for a password field?",
            answers: ["text", "password", "hidden", "secure"],
            correct: 1
        },
        {
            question: "What does the 'method' attribute in a form specify?",
            answers: ["The type of data to collect", "The HTTP method to submit the form", "The location to submit the form", "The design of the form"],
            correct: 1
        },
        {
            question: "What is the purpose of the 'action' attribute in a form?",
            answers: ["To specify the script to handle form submission", "To specify the method of submission", "To define the data type", "To indicate the user interaction"],
            correct: 0
        },
        {
            question: "The <label> tag is associated with a form input to improve accessibility.",
            answers: ["True", "False"],
            correct: 0
        },
        {
            question: "Which of the following is a valid way to create a checkbox in a form?",
            answers: ["<input type='check'>", "<checkbox>", "<input type='checkbox'>", "<check>"],
            correct: 2
        },
        {
            question: "What is the difference between <ol> and <ul>?",
            answers: ["<ol> is for ordered lists, <ul> is for unordered lists", "<ol> can have images, <ul> cannot", "<ol> is used for links, <ul> for text", "No difference"],
            correct: 0
        },
        {
            question: "What attribute do you use to specify an email address input?",
            answers: ["type='text'", "type='email'", "type='mail'", "type='url'"],
            correct: 1
        },
        {
            question: "What is the correct way to add an image in HTML?",
            answers: ["<image src='url'>", "<img src='url'>", "<picture src='url'>", "<photo src='url'>"],
            correct: 1
        },
        {
            question: "The <meta> tag can be used to specify character set and viewport settings.",
            answers: ["True", "False"],
            correct: 0
        },
        {
            question: "Which tag is used to create a line break in HTML?",
            answers: ["<break>", "<br>", "<lb>", "<line>"],
            correct: 1
        },
        {
            question: "Which attribute specifies the relationship between the current document and the linked document?",
            answers: ["rel", "link", "href", "src"],
            correct: 0
        },
        {
            question: "HTML comments are displayed in the browser.",
            answers: ["True", "False"],
            correct: 1
        },
        {
            question: "Which tag is used to define an inline frame?",
            answers: ["<iframe>", "<frame>", "<inline>", "<ifram>"],
            correct: 0
        },
        {
            question: "What is the correct HTML for creating a text input?",
            answers: ["<input type='text'>", "<textinput>", "<input text>", "<input type='string'>"],
            correct: 0
        },
        {
            question: "Which tag is used for the main heading of an HTML document?",
            answers: ["<h1>", "<heading>", "<h>", "<main>"],
            correct: 0
        },
        {
            question: "The <table> tag is used to create a table in HTML.",
            answers: ["True", "False"],
            correct: 0
        },
        {
            question: "What attribute is used to specify the width of a table?",
            answers: ["width", "size", "table-width", "table-size"],
            correct: 0
        },
        {
            question: "Which HTML tag is used to define an audio file?",
            answers: ["<audio>", "<sound>", "<music>", "<media>"],
            correct: 0
        },
        {
            question: "Which input type is used for a file upload?",
            answers: ["file", "upload", "input", "image"],
            correct: 0
        },
        {
            question: "The <footer> tag is used to define the footer of a document.",
            answers: ["True", "False"],
            correct: 0
        },
        {
            question: "What is the purpose of the 'target' attribute in links?",
            answers: ["To open a link in a new tab/window", "To specify the link color", "To define the URL", "To style the link"],
            correct: 0
        },
        {
            question: "What does the <strong> tag do?",
            answers: ["Makes text bold", "Makes text italic", "Creates a hyperlink", "Defines a strong element"],
            correct: 0
        },
        {
            question: "Which attribute is required for the <img> tag?",
            answers: ["src", "alt", "width", "height"],
            correct: 0
        },
        {
            question: "What is the default value of the 'type' attribute in <button>?",
            answers: ["button", "submit", "reset", "input"],
            correct: 1
        },
        {
            question: "Which of the following is not a valid form element?",
            answers: ["<input>", "<textarea>", "<button>", "<label>"],
            correct: 3
        },
        {
            question: "The <link> tag is used to link external stylesheets.",
            answers: ["True", "False"],
            correct: 0
        },
        {
            question: "What does the <blockquote> tag represent?",
            answers: ["A section that is quoted from another source", "A code block", "A quoted text", "A section of a webpage"],
            correct: 0
        },
        {
            question: "Which attribute is used to specify the text direction in an HTML document?",
            answers: ["dir", "direction", "text-direction", "align"],
            correct: 0
        },
        {
            question: "What is the purpose of the <meta charset='UTF-8'> tag?",
            answers: ["To specify the character encoding for the HTML document", "To define the document type", "To link CSS files", "To set the viewport"],
            correct: 0
        },
        {
            question: "The <nav> tag is used for navigation links.",
            answers: ["True", "False"],
            correct: 0
        },
        {
            question: "Which of the following is the correct way to create a radio button in HTML?",
            answers: ["<input type='radio'>", "<radio>", "<input type='button'>", "<button type='radio'>"],
            correct: 0
        },
        {
            question: "What is the output of the following code: <p>Hello <strong>World</strong></p>?",
            answers: ["Hello World", "Hello <strong>World</strong>", "Hello", "World"],
            correct: 0
        },
        {
            question: "What is the purpose of the 'disabled' attribute in form elements?",
            answers: ["To disable the form element", "To make the element read-only", "To hide the element", "To style the element"],
            correct: 0
        },
        {
            question: "The <style> tag is used to add CSS to an HTML document.",
            answers: ["True", "False"],
            correct: 0
        },
        {
            question: "Which tag is used to define a section in an HTML document?",
            answers: ["<section>", "<div>", "<part>", "<area>"],
            correct: 0
        },
        {
            question: "What is the purpose of the <DOCTYPE> declaration in HTML?",
            answers: ["To specify the HTML version", "To link CSS files", "To define the character set", "To create a footer"],
            correct: 0
        },
        {
            question: "What is the significance of the <meta> tag in the <head> section?",
            answers: ["To provide metadata about the HTML document", "To create a navigation menu", "To style the document", "To define the document title"],
            correct: 0
        },
        {
            question: "What was the first version of HTML released?",
            answers: ["HTML 1.0", "HTML 2.0", "HTML 3.2", "HTML 4.01"],
            correct: 0
        },
        {
            question: "What does HTML stand for?",
            answers: ["HyperText Markup Language", "HighText Markup Language", "HyperLink and Text Markup Language", "None of the above"],
            correct: 0
        },
        {
            question: "Which HTML element is used to define an unordered list?",
            answers: ["<ol>", "<ul>", "<list>", "<li>"],
            correct: 1
        },
        {
            question: "What attribute is used to specify the destination of a link in the <a> tag?",
            answers: ["src", "href", "link", "destination"],
            correct: 1
        },
        {
            question: "True or False: The <br> tag is a self-closing tag.",
            answers: ["True", "False"],
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