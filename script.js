const qData = [{
        question: "sus는?",
        a: "임포스터",
        b: "주포겟",
        c: "천안문",
        d: "릭에슐리",
        answer: "a"
    },
    {
        question: "주포겟 컴퓨터의 단점은?",
        a: "POK8함",
        b: "사용자를 죽임",
        c: "탈모됨",
        d: "전부다",
        answer: "d"
    },
    {
        question: "1984년 천안문에서 일어난 사건은?",
        a: "아무일도 없었음",
        b: "",
        c: "",
        d: "",
        answer: "a"
    },

];
const $rapper = document.getElementById("rapper");
const choices = document.querySelectorAll(".choicebox");
const $question = document.getElementById("question");
const $a_text = document.getElementById("a_text");
const $b_text = document.getElementById("b_text");
const $c_text = document.getElementById("c_text");
const $d_text = document.getElementById("d_text");
const $submit = document.getElementById("submit");
let quizNum = 0;
let score = 0;
load();
//Load Quiz
function load() {
    unSel();
    const currentqData = qData[quizNum];
    console.log(currentqData);
    $question.innerText = currentqData.question;
    $a_text.innerText = currentqData.a;
    $b_text.innerText = currentqData.b;
    $c_text.innerText = currentqData.c;
    $d_text.innerText = currentqData.d;
}

//Unselect All Radio Checks
function unSel() {
    for (let i = 0; i < choices.length; i++)
        choices[i].checked = false;
}

//When you submit answer
$submit.addEventListener("click", () => {
    let userChoice = false;
    for (let i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            userChoice = choices[i].id;
        }
    }
    if (userChoice === qData[quizNum].answer) {
        score++;
    }
    quizNum++;
    if (quizNum < qData.length) {
        load();
    } else {
        $rapper.innerHTML = `<h2>GG!<br></br>Your Social Credit is ${score}!</h2>`
    }
});