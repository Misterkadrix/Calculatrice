import {r1Btn1,r1Btn2,r1Btn3,r1Btn4,r2Btn1,r2Btn2,r2Btn3,r2Btn4,r3Btn1,r3Btn2,r3Btn3,r3Btn4,r4Btn1,r4Btn2,r4Btn3,r4Btn4,input1} from "./construction.js"

console.log(input1);
// création des listeners pour chaque buttons ayant un chiffre cela va permettre de créer 
r1Btn1.addEventListener("click",()=>{
    input1.value+=r1Btn1.innerText;
    console.log(input1.innerHTML);
})  
r1Btn2.addEventListener("click",()=>{
    input1.value+=r1Btn2.innerHTML;
    console.log(input1.innerHTML);
}) 
r1Btn3.addEventListener("click",()=>{
    input1.value+=r1Btn3.innerHTML;
    console.log(input1.innerHTML);
}) 
// 2ième rangé
r2Btn1.addEventListener("click",()=>{
    input1.value+=r2Btn1.innerHTML;
    console.log(input1.innerHTML);
})
r2Btn2.addEventListener("click",()=>{
    input1.value+=r2Btn2.innerHTML;
    console.log(input1.innerHTML);
}) 
r2Btn3.addEventListener("click",()=>{
    input1.value+=r2Btn3.innerHTML;
    console.log(input1.innerHTML);
}) 

// 3ième rangé
r3Btn1.addEventListener("click",()=>{
    input1.value+=r3Btn1.innerHTML;
    console.log(input1.innerHTML);
})
r3Btn2.addEventListener("click",()=>{
    input1.value+=r3Btn2.innerHTML;
    console.log(input1.innerHTML);
})
r3Btn3.addEventListener("click",()=>{
    input1.value+=r3Btn3.innerHTML;
    console.log(input1.innerHTML);
})
// le zéro

r4Btn2.addEventListener("click",()=>{
    input1.value+=r4Btn2.innerHTML;
    console.log(input1.innerHTML);
})