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

let submitBtn = document.getElementById("submit");

let Sex_F = 0.0;
let Sex_M = 0.0;

let ChestPainType_ASY = 0;
let ChestPainType_ATA = 0;
let ChestPainType_NAP = 0;
let ChestPainType_TA =  0;

let RestingECG_LVH = 0;
let RestingECG_Normal = 0;
let RestingCG_ST = 0;

let ExerciseAngina_N = 0;
let ExerciseAngina_Y = 0;

let ST_Slope_Down = 0;
let ST_Slope_flat = 0;
let ST_Slope_Up = 0;



next1.onclick = function(){nextQuestion(form1, form2, 2, "gender")};
next2.onclick = function(){nextQuestion(form2, form3, 3, "ageInput")};
next3.onclick = function(){nextQuestion(form3, form4, 4, "chestPainType")};
next4.onclick = function(){nextQuestion(form4, form5, 5, "bloodPressure")};
next5.onclick = function(){nextQuestion(form5, form6, 6, "cholesterol")};
next6.onclick = function(){nextQuestion(form6, form7, 7, "bloodSugar")};
next7.onclick = function(){nextQuestion(form7, form8, 8, "restingElectResults")};
next8.onclick = function(){nextQuestion(form8, form9, 9, "heartRate")};
next9.onclick = function(){nextQuestion(form9, form10, 10, "exercise")};
next10.onclick = function(){nextQuestion(form10, form11, 11, "oldpeak")};
next11.onclick = function(){
    summary.style.display = "block";
    //form11.style.display = "none";
    nextQuestion(form11, summary, 11, "slope")
    updateSummary()
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


/*************  MOVE TO NEXT QUESTION  *************/
function nextQuestion(firstForm, secondForm, formNumber, id){

    if(validateCurrentSection(id)){
        firstForm.style.left = "-450px";
        secondForm.style.left = "40px";
        progress.style.width = 32.7*formNumber + 'px';
    }
}

function previousQuestion(firstForm, secondForm, formNumber){
    firstForm.style.left = "40px";
    secondForm.style.left = "450px";
    progress.style.width = 32.7*formNumber + 'px';
}


/*************  SUBMIT FORM AND SEND REQUEST  *************/

submitBtn.addEventListener("click", function(){

    let genderInput = document.getElementById("gender").value; 
    let ageInput = document.getElementById("ageInput").value; 
    let chestPainTypeInput = document.getElementById("chestPainType").value; 
    let bloodPressureInput = document.getElementById("bloodPressure").value; 
    let cholesterolInput = document.getElementById("cholesterol").value; 
    let bloodSugarInput = document.getElementById("bloodSugar").value; 
    let restingElectResultsInput = document.getElementById("restingElectResults").value; 
    let heartRateInput = document.getElementById("heartRate").value; 
    let oldpeakInput = document.getElementById("oldpeak").value; 
    let exerciseInput = document.getElementById("exercise").value; 
    let slopeInput = document.getElementById("slope").value; 
    

    inputGender(genderInput);
    inputChestPain (chestPainTypeInput);
    inputRestingEle(restingElectResultsInput);
    inputExercise(exerciseInput);
    inputSlope(slopeInput);

    const body = {        
        Age: ageInput,
        RestingBP: bloodPressureInput,
        Cholesterol: cholesterolInput,
        FastingBS: bloodSugarInput,
        MaxHR: heartRateInput,
        Oldpeak: oldpeakInput,
        Sex_F: Sex_F,
        Sex_M: Sex_M,
        ChestPainType_ASY: ChestPainType_ASY,
        ChestPainType_ATA: ChestPainType_ATA,
        ChestPainType_NAP: ChestPainType_NAP,
        ChestPainType_TA: ChestPainType_TA,
        RestingECG_LVH: RestingECG_LVH,
        RestingECG_Normal: RestingECG_Normal,
        RestingECG_ST: RestingCG_ST,
        ExerciseAngina_N: ExerciseAngina_N,
        ExerciseAngina_Y: ExerciseAngina_Y,
        ST_Slope_Down: ST_Slope_Down,
        ST_Slope_Flat: ST_Slope_flat,
        ST_Slope_Up: ST_Slope_Up
    }

    SendRequest( body )

    //GetRequest();

    summary.style.left = "-450px";
    results.style.left = "40px";
});


function inputSlope(slopeInput){
    if(slopeInput === "Up"){
        ST_Slope_Down = 0;
        ST_Slope_flat = 0;
        ST_Slope_Up = 1;
    }
    else if(slopeInput === "Flat"){
        ST_Slope_Down = 0;
        ST_Slope_flat = 1;
        ST_Slope_Up = 0;
    }
    else{
        EST_Slope_Down = 1;
        ST_Slope_flat = 0;
        ST_Slope_Up = 0;
    }
}


function inputExercise(exerciseInput){
    if(exerciseInput === "Y"){
        ExerciseAngina_N = 0;
        ExerciseAngina_Y = 1;
    }
    else{
        ExerciseAngina_N = 1;
        ExerciseAngina_Y = 0;
    }
}

function inputRestingEle(restingElectResultsInput){
    if(restingElectResultsInput === "normal"){
        estingECG_LVH = 0;
        RestingECG_Normal = 1;
        RestingCG_ST = 0;
    }
    else if(restingElectResultsInput === "ST"){
        estingECG_LVH = 0;
        RestingECG_Normal = 0;
        RestingCG_ST = 1;
    }
    else{
        estingECG_LVH = 0;
        RestingECG_Normal = 0;
        RestingCG_ST = 1;
    }
}


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

function inputChestPain (chestPainTypeInput){
    if(chestPainTypeInput === "TA"){
        ChestPainType_ASY = 0;
        ChestPainType_ATA = 0;
        ChestPainType_NAP = 0;
        ChestPainType_TA =  1;
    }
    else if (chestPainTypeInput === "ATA"){
        ChestPainType_ASY = 0;
        ChestPainType_ATA = 1;
        ChestPainType_NAP = 0;
        ChestPainType_TA =  0;
    }
    else if (chestPainTypeInput === "NAP"){
        ChestPainType_ASY = 0;
        ChestPainType_ATA = 0;
        ChestPainType_NAP = 1;
        ChestPainType_TA =  0;
    }
    else{
        ChestPainType_ASY = 1;
        ChestPainType_ATA = 0;
        ChestPainType_NAP = 0;
        ChestPainType_TA =  0;
    }
}



async function SendRequest(body){
    let getResult = document.getElementById("getResult");
    let textResult = document.getElementById("textResult");
    
    try{
        const response = await fetch("/result", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json' // Specify the content type as JSON
            },
            body: JSON.stringify(body)
        });
        console.log(response);

        // getResult.textContent = "TEST RESULT"

        // textResult.textContent = "The patient has a low probability of having heart disease"
        if (response.ok) {
            const data = await response.text(); // Get the response as text
            console.log(data); // Log the response data

            getResult.textContent = data; // Set response data as text content

            const dataResult  = Number(data)

            if(dataResult > 0.5){
                textResult.textContent = "The patient has a high probability of having heart disease"
            }
            else{
                textResult.textContent = "The patient has a low probability of having heart disease"
            }
    
        } else {
            // Handle non-successful responses here
            console.error('Error:', response.statusText);
        }
    }
    catch(error){
      console.error(error);
    }
  }


//   async function GetRequest(){

//     let getResult = document.getElementById("getResult");

//     try{
//         const response = await fetch("/result/dataForm");
//         console.log(response);
//         const data = await response.json;
//         getResult.textContent = data;
//     }
//     catch(error){
//         console.error(error);
//       }
//   }

/*************  VALIDATE FORM  *************/

function validateCurrentSection(id) {
   
    let input = document.getElementById(id).value; 

        if (!input) {
            alert("Please answer the question before proceeding.");
            return false;
    }
    return true; 
}


/*************  UPDATE SUMMARY   *************/

function gatherFormData() {
    const formData = {};

    // Loop through each form
    for (let i = 1; i <= 11; i++) {
        const form = document.getElementById(`form${i}`);
        const inputs = form.querySelectorAll('input, select');

        inputs.forEach(input => {
            formData[input.id] = input.value;
        });
    }

    return formData;
}

function updateSummary() {
    const formData = gatherFormData();
    const summaryTable = document.getElementById('summaryTable');

    // Clear previous summary content
    summaryTable.innerHTML = '';

    // Populate the summary table
    Object.keys(formData).forEach(key => {
        const row = document.createElement('tr');
        const labelCell = document.createElement('td');
        const valueCell = document.createElement('td');

        labelCell.textContent = key;
        valueCell.textContent = formData[key];

        row.appendChild(labelCell);
        row.appendChild(valueCell);

        summaryTable.appendChild(row);
    });
}