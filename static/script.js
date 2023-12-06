let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let form3 = document.getElementById("form3");
let form4 = document.getElementById("form4");
let form5 = document.getElementById("form5");
let form6 = document.getElementById("form6");
let form7 = document.getElementById("form7");
let form8 = document.getElementById("form8");
let form9 = document.getElementById("form9");
let form10 = document.getElementById("form10");
let form11= document.getElementById("form11");
let summary = document.getElementById("summary");

let next1 = document.getElementById("next1");
let next2 = document.getElementById("next2");
let next3 = document.getElementById("next3");
let next4 = document.getElementById("next4");
let next5 = document.getElementById("next5");
let next6 = document.getElementById("next6");
let next7 = document.getElementById("next7");
let next8 = document.getElementById("next8");
let next9 = document.getElementById("next9");
let next10 = document.getElementById("next10");
let next11 = document.getElementById("next11");

let back1 = document.getElementById("back1");
let back2 = document.getElementById("back2");
let back3 = document.getElementById("back3");
let back4 = document.getElementById("back4");
let back5 = document.getElementById("back5");
let back6 = document.getElementById("back6");
let back7 = document.getElementById("back7");
let back8 = document.getElementById("back8");
let back9 = document.getElementById("back9");
let back10 = document.getElementById("back10");
let back11 = document.getElementById("back11");

let progress = document.getElementById("progress");

next1.onclick = function(){nextQuestion(form1, form2, 2)};
next2.onclick = function(){nextQuestion(form2, form3, 3)};
next3.onclick = function(){nextQuestion(form3, form4, 4)};
next4.onclick = function(){nextQuestion(form4, form5, 5)};
next5.onclick = function(){nextQuestion(form5, form6, 6)};
next6.onclick = function(){nextQuestion(form6, form7, 7)};
next7.onclick = function(){nextQuestion(form7, form8, 8)};
next8.onclick = function(){nextQuestion(form8, form9, 9)};
next9.onclick = function(){nextQuestion(form9, form10, 10)};
next10.onclick = function(){nextQuestion(form10, form11, 11)};
next11.onclick = function(){nextQuestion(form11, summary, 12)};


back1.onclick = function(){previousQuestion(form1, form2)};
back2.onclick = function(){previousQuestion(form2, form3)};
back3.onclick = function(){previousQuestion(form3, form4)};
back4.onclick = function(){previousQuestion(form4, form5)};
back5.onclick = function(){previousQuestion(form5, form6)};
back6.onclick = function(){previousQuestion(form6, form7)};
back7.onclick = function(){previousQuestion(form7, form8)};
back8.onclick = function(){previousQuestion(form8, form9)};
back9.onclick = function(){previousQuestion(form9, form10)};
back10.onclick = function(){previousQuestion(form10, form11)};
back11.onclick = function(){previousQuestion(form11, summary)};

function nextQuestion(firstForm, secondForm, formNumber){
    firstForm.style.left = "-450px";
    secondForm.style.left = "40px";
    progress.style.width = 32.7*formNumber + 'px';
}

function previousQuestion(firstForm, secondForm){
    firstForm.style.left = "40px";
    secondForm.style.left = "450px";
}
