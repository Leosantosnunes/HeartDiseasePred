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
next11.onclick = function(){
    summary.style.display = "block";
    form11.style.display = "none";
    nextQuestion(form11, summary, 11)
};


back1.onclick = function(){previousQuestion(form1, form2, 1)};
back2.onclick = function(){previousQuestion(form2, form3, 2)};
back3.onclick = function(){previousQuestion(form3, form4, 3)};
back4.onclick = function(){previousQuestion(form4, form5, 4)};
back5.onclick = function(){previousQuestion(form5, form6, 5)};
back6.onclick = function(){previousQuestion(form6, form7, 6)};
back7.onclick = function(){previousQuestion(form7, form8, 7)};
back8.onclick = function(){previousQuestion(form8, form9, 8)};
back9.onclick = function(){previousQuestion(form9, form10, 9)};
back10.onclick = function(){previousQuestion(form10, form11, 10)};
back11.onclick = function(){previousQuestion(form11, summary, 11)};

function nextQuestion(firstForm, secondForm, formNumber){
    
    firstForm.style.left = "-450px";
    secondForm.style.left = "40px";
    progress.style.width = 32.7*formNumber + 'px';
}

function previousQuestion(firstForm, secondForm, formNumber){
    firstForm.style.left = "40px";
    secondForm.style.left = "450px";
    progress.style.width = 32.7*formNumber + 'px';
}

let submitBtn = document.getElementById("submit");

let Sex_F = 0.0;
let Sex_M = 0.0;
let ageInput;


const body = {
    Sex_F: Sex_F,
    Sex_F: Sex_M
}

submitBtn.addEventListener("click", function(){
    let genderInput = document.getElementById("gender").value; 
    let ageInput = document.getElementById("gender").value; 
    inputGender(genderInput);


    const body = {
        Sex_F: Sex_F,
        Sex_M: Sex_M
        

    }

    console.log(genderInput);
    console.log(Sex_F);
    console.log(Sex_M);

    SendRequest( body )
});

function inputGender(genderInput){
    if(genderInput === "female"){
        Sex_F = 1.0;
        Sex_M = 0.0;
    }
    else{
        Sex_F = 0.0;
        Sex_M = 1.0;
    }
}

function inputAge (ageInput){
    if(genderInput === "female"){
        Sex_F = 1.0;
        Sex_M = 0.0;
    }
    else{
        Sex_F = 0.0;
        Sex_M = 1.0;
    }
}



async function SendRequest(body){
    try{
        const response = await fetch("/dataForm", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json' // Specify the content type as JSON
            },
            body: JSON.stringify(body)
        });
        console.log(response);
    }
    catch(error){
      console.error(error);
    }
  }







