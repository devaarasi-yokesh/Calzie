
let dis = document.querySelector(".dis-col"); //display-result
let count = 0;

// To display Numbers
function getInput(value){
    const input = value;
    dis.innerText = dis.innerText + value;
}

// Percentage Operator
const six = document.querySelector('.per').addEventListener("click",() => {
    let inputVal = dis.innerText.split("");
    let input_one,percent;
    console.log(inputVal);
    if(inputVal.includes("*")){
        for(let i=0;i<=inputVal.length;i++){
            if(inputVal[i] == "*"){
                input_one = inputVal.slice(0,i).reduce((accumulator,current) => accumulator+current);
                percent = (inputVal.slice(i+1,inputVal.length-1).reduce((accumulator,current) => accumulator+current))/100;
            }
        }
    }
    else{
        dis.innerText = "0";
    }
    doCalc([input_one,percent],"%");
});


// Addition Operator
const seven = document.querySelector('.add').addEventListener("click",() => {
    dis.innerText = dis.innerText + "+";
    count = count + 1;
    if(count){
    const inputVal = dis.innerText.split("+");
    console.log(inputVal,"One");
    const inputArr = dis.innerText.split("");
    console.log(inputArr,"two");
    const finalVal = inputArr[(inputArr.length)-1];
    let mid;
    let input_one,input_two;
    for(let i = 0;i<=inputArr.length-1;i++){
        if((inputArr[i] == "+") || (inputArr[i] == "-") || (inputArr[i] == "*") || (inputArr[i] == "/") ){
            mid = inputArr[i];
            input_one = inputArr.slice(0,i).reduce((accumulator,current) => accumulator+current);
            console.log(input_one);
            if(inputArr[i+1]){
                input_two = inputArr.slice(i+1,(inputArr.length-1)).reduce((accumulator,current) => accumulator+current);
                
            }
            else{
                input_two = "0";
            }
            console.log(input_two,"input2");
            break;
        }
    }
    dis.innerText = doCalc([input_one,input_two],mid) + finalVal;
   }
   
});

// Subtraction Operator
const eight = document.querySelector('.sub').addEventListener("click",() => {
    dis.innerText = dis.innerText + "-";
    count = count + 1;
    
    if(count){
    const inputVal = dis.innerText.split("-");
    const inputArr = dis.innerText.split("");
    const finalVal = inputArr[(inputArr.length)-1];
    let mid;
    let input_one,input_two;
    for(let i = 0;i<=inputArr.length-1;i++){
        if((inputArr[i] == "+") || (inputArr[i] == "-") || (inputArr[i] == "*") || (inputArr[i] == "/") ){
            mid = inputArr[i];
            input_one = inputArr.slice(0,i).reduce((accumulator,current) => accumulator+current);
            if(inputArr[i+1]){
                input_two = inputArr.slice(i+1,(inputArr.length-1)).reduce((accumulator,current) => accumulator+current);
            }
            else{
                input_two = "0";
            }
            break;
        }
    }
    dis.innerText = doCalc([input_one,input_two],mid) + finalVal;
   }
   
});


// Multiplication Operator
const nine = document.querySelector('.mul').addEventListener("click",() => {
    dis.innerText = dis.innerText + "*";
    count = count + 1;
    if(count){
    const inputVal = dis.innerText.split("*");
    const inputArr = dis.innerText.split("");
    const finalVal = inputArr[(inputArr.length)-1];
    let mid;
    let input_one,input_two;
    for(let i = 0;i<=inputArr.length-1;i++){
        if((inputArr[i] == "+") || (inputArr[i] == "-") || (inputArr[i] == "*") || (inputArr[i] == "/") ){
            mid = inputArr[i];
            input_one = inputArr.slice(0,i).reduce((accumulator,current) => accumulator+current);
            if(inputArr[i+1]){
                input_two = inputArr.slice(i+1,(inputArr.length-1)).reduce((accumulator,current) => accumulator+current);
            }
            else{
                input_two = "1";
            }
            break;
        }
    }
    dis.innerText = doCalc([input_one,input_two],mid) + finalVal;
   }
   
});


// Division Operator
const zero = document.querySelector('.div').addEventListener("click",() => {
    dis.innerText = dis.innerText + "/";
    count = count + 1;
    if(count){
    const inputVal = dis.innerText.split("/");
    const inputArr = dis.innerText.split("");
    const finalVal = inputArr[(inputArr.length)-1];
    let mid;
    let input_one,input_two;
    for(let i = 0;i<=inputArr.length-1;i++){
        if((inputArr[i] == "+") || (inputArr[i] == "-") || (inputArr[i] == "*") || (inputArr[i] == "/") ){
            mid = inputArr[i];
            input_one = inputArr.slice(0,i).reduce((accumulator,current) => accumulator+current);
            if(inputArr[i+1]){
                input_two = inputArr.slice(i+1,(inputArr.length-1)).reduce((accumulator,current) => accumulator+current);
            }
            else{
                input_two = "1";
            }
            break;
        }
    }
    dis.innerText = doCalc([input_one,input_two],mid) + finalVal;
   }
    
});



// Enter Button
function startCalc(){
    const inputArr = dis.innerText.split("");
    const finalVal = inputArr[(inputArr.length)-1];
    let mid;
    let input_one,input_two;
    for(let i = 0;i<=inputArr.length-1;i++){
        if((inputArr[i] == "+") || (inputArr[i] == "-") || (inputArr[i] == "*") || (inputArr[i] == "/") ){
            mid = inputArr[i];
            input_one = inputArr.slice(0,i).reduce((accumulator,current) => accumulator+current);
            if(inputArr[i+1] == inputArr[inputArr.length-1]){
                input_two = inputArr[i+1];
            }
            else{
                input_two = inputArr.slice(i+1,(inputArr.length)).reduce((accumulator,current) => accumulator+current);
                if(input_two.includes("%")){
                    let value = input_two.split("%");
                    value.pop();
                    doCalc([input_one,value],"%")
                }
            }
            break;
        }
    }
    dis.innerText = doCalc([input_one,input_two],mid);
}


//To result
function doCalc(input,operator){
    if(operator == "+"){
        let result = input.reduce((accumulator,current) =>Number(accumulator) + Number(current));
        return result;
    }
    else if(operator == "-"){
        console.log("test",input,operator)
        let result = input.reduce((accumulator,current) =>Number(accumulator) - Number(current));
        return result;
    }
    else if(operator == "*"){
        let result = input.reduce((accumulator,current) =>Number(accumulator) * Number(current));
        return result;
    }
    else if(operator == "/"){
        let result = input.reduce((accumulator,current) =>Number(accumulator) / Number(current));
        return result;
    }
    else if(operator == "%"){
        let result = input[0] * input[1];
        dis.innerText = result;
    }   
}


//To clear display
function getClear(){
    dis.innerText = "0";
}

//To delete
function clearLastChar(){
    const inputVal = dis.innerText.split("");
    inputVal.pop()
    dis.innerText = inputVal.join("");
}

//To power-off
function powerOff(){
    dis.innerText = " ";
}
