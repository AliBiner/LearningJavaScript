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


const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("sub");
let currentQuestion = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuestion];

    questionEl.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
    
}

submitBtn.addEventListener('click',()=>{
    currentQuestion++;
    loadQuiz();
})

