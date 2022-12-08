const quizData = [
    {
        question:'Türkiyenin başkenti neresidir? ',
        a:'İstanbul',
        b:'Ankara',
        c:'Erzurum',
        d:'Şanlıurfa',
        correct:'b'
    },
    {
        question:'Baklavasıyla ünlü ilimiz hangisidir?',
        a:'Hatay',
        b:'Diyarbakır',
        c:'Gaziantep',
        d:'Isparta',
        correct:'c'
    },
    {
        question:'İstanbul kaç tepeden oluşmaktadır?',
        a:'4',
        b:'5',
        c:'6',
        d:'7',
        correct:'d'
    }
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("sub");
let currentQuestion = 0;
let score =0;
loadQuiz();

function loadQuiz(){
    deselectedAnswers();
    const currentQuizData = quizData[currentQuestion];

    questionEl.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
    
}
function getSelected(){
    let answer=undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer=answerEl.id;
        }
    });
    return answer;
}
function deselectedAnswers(){
    
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    });
}
submitBtn.addEventListener('click',()=>{
    
    const answer = getSelected();
    if(answer){
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if(currentQuestion<quizData.length)
        {
            loadQuiz();
        }
        else{
            
            // quiz.innerHTML = '<h2>You answered correctly at '+score+'/'+quizData.length+' questions. </h2>';
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions. </h2>`;

        }
    }
    
    
})

