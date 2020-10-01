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

// les operators
// Ici on va créer un Stock 1 ET 2 permettant "d'additionner" une fois cliqué sur Egale.
let stock1 = 0;
let stock2 = 0;

//plus
r1Btn4.addEventListener("click",()=>{
    stock1 = input1.value;
    input1.value+=r1Btn4.innerHTML;
    console.log(input1.innerHTML);
    console.log(stock1);
});

//moins
r2Btn4.addEventListener("click",()=>{
    stock1 = input1.value;
    input1.value+=r2Btn4.innerHTML;
    console.log(input1.innerHTML);  
});

//fois
r3Btn4.addEventListener("click",()=>{
    stock1 = input1.value;
    input1.value+=r3Btn4.innerHTML;
    console.log(input1.innerHTML);
});

//diviser
r4Btn4.addEventListener("click",()=>{
    stock1 = input1.value;
    input1.value+=r4Btn4.innerHTML;
    console.log(input1.innerHTML);
});

// le = et le C.

r4Btn1.addEventListener("click",()=>{
    input1.value=""
})
r4Btn3.addEventListener("click",()=>{
    
    let plus = input1.value.indexOf("+");
    let moins = input1.value.indexOf("-");
    let fois = input1.value.indexOf("*");
    let diviser = input1.value.indexOf("/");
    console.log(plus);
    if (plus>0) {
        stock2 = input1.value.slice(plus+1,input1.value.length);        
        input1.value+=r4Btn3.innerHTML;
        input1.value += parseInt(stock1)+parseInt(stock2);
    }else if (moins>0) {
        stock2 = input1.value.slice(moins+1,input1.value.length);        
        input1.value+=r4Btn3.innerHTML;
        input1.value += parseInt(stock1)-parseInt(stock2);
    } else if (fois>0) {
        stock2 = input1.value.slice(fois+1,input1.value.length);        
        input1.value+=r4Btn3.innerHTML;
        input1.value += parseInt(stock1)*parseInt(stock2);
    } else if (diviser>0) {
        stock2 = input1.value.slice(diviser+1,input1.value.length);        
        input1.value+=r4Btn3.innerHTML;
        input1.value += parseInt(stock1)/parseInt(stock2);
    }
    console.log(stock2);
    console.log(input1.innerHTML);

    // une fois qu'on clique sur égale un nombre apparait après 
    
});