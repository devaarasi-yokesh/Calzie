const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.per').addEventListener("click",() => {
    
});
let dis = document.querySelector(".dis-col");
let count = 0;
console.log("+" == "+" |  "+" == "-");

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
            input_two = inputArr.slice(i+1,(inputArr.length-1)).reduce((accumulator,current) => accumulator+current);
            console.log(input_two);
            break;
        }
    }
    console.log(input_one,"jyfh")
    dis.innerText = doCalc([input_one,input_two],mid) + finalVal;
    console.log(inputVal.slice(0,2),"three");
    console.log(doCalc(inputVal.slice(0,2),"+"));

   }
   
});


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
            console.log(input_one);
            input_two = inputArr.slice(i+1,(inputArr.length-1)).reduce((accumulator,current) => accumulator+current);
            console.log(input_two);
            break;
        }
    }
    console.log(input_one,"jyfh",input_two,mid)
    dis.innerText = doCalc([input_one,input_two],mid) + finalVal;
    console.log(dis.innerText);
   }
   
});

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
            console.log(input_one);
            input_two = inputArr.slice(i+1,(inputArr.length-1)).reduce((accumulator,current) => accumulator+current);
            console.log(input_two);
            break;
        }
    }
    console.log(input_one,"jyfh")
    dis.innerText = doCalc([input_one,input_two],mid) + finalVal;

   }
   
});


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
            console.log(input_one);
            input_two = inputArr.slice(i+1,(inputArr.length-1)).reduce((accumulator,current) => accumulator+current);
            console.log(input_two);
            break;
        }
    }
    console.log(input_one,"jyfh")
    dis.innerText = doCalc([input_one,input_two],mid) + finalVal;
   }
    
});

const numbers = ['one','two','three','four','five','six','seven','eight','nine','zero'];




/*
one.addEventListener("click", e => {
    dis.innerText = one.innerText;
});
two.addEventListener("click", e => {
    dis.innerText = two.innerText;
});
three.addEventListener("click",e => {
    dis.innerText = three.innerText;
});
four.addEventListener("click",e => {
    dis.innerText = four.innerText;
});
five.addEventListener("click",e => {
    dis.innerText = five.innerText;
});
six.addEventListener("click",e => {
    dis.innerText = six.innerText;
});
seven.addEventListener("click",e => {
    dis.innerText = seven.innerText;
});
eight.addEventListener("click",e => {
    dis.innerText = eight.innerText;
});
nine.addEventListener("click",e => {
    dis.innerText = nine.innerText;
});
zero.addEventListener("click",e => {
    dis.innerText = two.innerText;
});*/



function getInput(value){
    const input = value;
    dis.innerText = dis.innerText + value;
    console.log(input);
}



function startCalc(){
    console.log("dine")
    const inputArr = dis.innerText.split("");
    const finalVal = inputArr[(inputArr.length)-1];
    let mid;
    let input_one,input_two;
    for(let i = 0;i<=inputArr.length-1;i++){
        if((inputArr[i] == "+") || (inputArr[i] == "-") || (inputArr[i] == "*") || (inputArr[i] == "/") ){
            mid = inputArr[i];
            input_one = inputArr.slice(0,i).reduce((accumulator,current) => accumulator+current);
            console.log(input_one);
            if(i+1 == inputArr.length-1){
                input_two = inputArr[i+1];
            }
            else{
                input_two = inputArr.slice(i+1,(inputArr.length-1)).reduce((accumulator,current) => accumulator+current);
            }
            console.log(input_two,"four");
            break;
        }
    }
    console.log(input_one,"jyfh",mid)
    dis.innerText = doCalc([input_one,input_two],mid);
   
}


function doCalc(input,operator){
    if(operator == "+"){
        let result = input.reduce((accumulator,current) =>Number(accumulator) + Number(current));
        /*dis.innerText = result;*/
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
        dis.innerText = result;
        return result;
    }
    else if(operator == "%"){
        let result = input.reduce((accumulator,current) =>Number(accumulator) % Number(current));
        dis.innerText = result;
    }   
}

function getClear(){
    dis.innerText = "0";
}

function clearLastChar(){
    const inputVal = dis.innerText.split("");
    console.log(inputVal.pop());
    dis.innerText = inputVal.join("");
}

function powerOff(){
    dis.innerText = " ";
}