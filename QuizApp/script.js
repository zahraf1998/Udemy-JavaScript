
const questions = [
      {
        question :'1 + 2 = ?', 
        choices : ['2', '6', '5', '3'],
        key : '4'
      },
      {
        question :'2 &times; 2 = ?', 
        choices : ['5', '4', '6', '7'],
        key : '2'
      },
      {
        question :'6 &divide; 3 = ?', 
        choices : ['2', '3', '4', '1'],
        key : '1'
      },
      {
        question :'( 4 + 3 ) &times; 8 = ?', 
        choices : ['21', '45', '56', '58'],
        key : '3'
      },
];

const displayNum = document.getElementById("number");
const displayQue = document.getElementById('question');
const quizBody = document.querySelector('.body');
const quizElem = document.getElementById("quiz");
const timerElem = document.getElementById('time');

function displayQuestion(questionNumber) {
  let buttonsDiv = document.querySelector('.buttons');

  if (questionNumber < 4) {

    if (buttonsDiv) buttonsDiv.remove();

    displayNum.innerHTML = `Question ${questionNumber+1} of ${questions.length}`;

    displayQue.innerHTML = questions[questionNumber].question;

    btnDiv = document.createElement('div');
    btnDiv.classList.add('buttons');

    let i=1;
    questions[questionNumber].choices.map( choice => {
       btnDiv.innerHTML += 
        `<button class="btn" id="${i}">
          ${i}. <strong>${choice}</strong>
         </button>`
      i++;
    });
    
    quizBody.append(btnDiv);

    answerQuiz();

  } else displayScore();
};

let questionNumber = 0;
displayQuestion(questionNumber);

let score = 0;
function answerQuiz() {
  let btns = document.querySelectorAll('.btn');

  btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if(e.target.id === questions[questionNumber].key) score++;
      questionNumber++;
      displayQuestion(questionNumber);
    })
  })
};

function displayScore() {
  let quizEndHTML =
  `
  <h1>Quiz Ended</h1>
  <p id="time-up"></p>
  <h2 id='score'> Score: ${score} of ${questions.length}</h2>
  <div class="reset">
    <a href="index.html">Try Again</a>
  </div>
  `;

  quizElem.innerHTML = quizEndHTML;
};

let quizTime = 120;
(function timer() {
  let quizTimer = setInterval( () => {
    
    if (quizTime <= 0) {
      clearInterval(quizTimer);
      displayScore();
      let timeUpElem =document.getElementById('time-up');
      timeUpElem.innerHTML = "Time's Up!";
    } else {
      quizTime--;
      let sec = Math.floor(quizTime % 60);
      let min = Math.floor(quizTime / 60) % 60;
      timerElem.innerHTML = `TIME: ${min} : ${sec}`;
    }

  }, 1000)

})();