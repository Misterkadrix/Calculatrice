let bdy = document.body;
let labigDiv_Caclculatrice = document.createElement("div");
labigDiv_Caclculatrice.setAttribute("class","Calculatrice")
// labigDiv_Caclculatrice.style="background-color:rgb(52, 52, 117);width: 600px;height: 800px;"
bdy.appendChild(labigDiv_Caclculatrice);
// CONSTRUCTION DES ROWS 
let Row1 = document.createElement("div");
let Row1_5 = document.createElement("div");
let Row2 = document.createElement("div");
let Row3 = document.createElement("div");
let Row4 = document.createElement("div");
let Row5 = document.createElement("div");
Row1.setAttribute("class","row1");
Row1_5.setAttribute("class","row1bis")
Row2.setAttribute("class","row");
Row3.setAttribute("class","row");
Row4.setAttribute("class","row");
Row5.setAttribute("class","row");
labigDiv_Caclculatrice.appendChild(Row1);
labigDiv_Caclculatrice.appendChild(Row1_5);
labigDiv_Caclculatrice.appendChild(Row2);
labigDiv_Caclculatrice.appendChild(Row3);
labigDiv_Caclculatrice.appendChild(Row4);
labigDiv_Caclculatrice.appendChild(Row5);
// CREATION DE DOUBLE PARAGRAPHE/DIV A LA ROW 1 POUR INTRODUIRE ET LE SECOND ON UTILISE COMME HISTORIQUE OU COMME
let p = document.createElement("div");
export let input1 = document.createElement("input");
p.setAttribute("class","premierP");
input1.setAttribute("class","secondP");
input1.setAttribute("disabled","disabled");
p.textContent='HELLO'
Row1.appendChild(p);
Row1_5.appendChild(input1);

// CREATION DES COLS DANS LES ROWS 4 POUR CHAQUE ROWS

let r1Col1 = document.createElement("div");
let r1Col2 = document.createElement("div");
let r1Col3 = document.createElement("div");
let r1Col4 = document.createElement("div");

let r2Col1 = document.createElement("div");
let r2Col2 = document.createElement("div");
let r2Col3 = document.createElement("div");
let r2Col4 = document.createElement("div");

let r3Col1 = document.createElement("div");
let r3Col2 = document.createElement("div");
let r3Col3 = document.createElement("div");
let r3Col4 = document.createElement("div");

let r4Col1 = document.createElement("div");
let r4Col2 = document.createElement("div");
let r4Col3 = document.createElement("div");
let r4Col4 = document.createElement("div");

// ON ATTRIBUT UNE CLASSE A CHAQUE COL.. NOM DE LA CLASSE = COL

r1Col1.setAttribute("class","col");
r1Col2.setAttribute("class","col");
r1Col3.setAttribute("class","col");
r1Col4.setAttribute("class","col");

r2Col1.setAttribute("class","col");
r2Col2.setAttribute("class","col");
r2Col3.setAttribute("class","col");
r2Col4.setAttribute("class","col");

r3Col1.setAttribute("class","col");
r3Col2.setAttribute("class","col");
r3Col3.setAttribute("class","col");
r3Col4.setAttribute("class","col");

r4Col1.setAttribute("class","col");
r4Col2.setAttribute("class","col");
r4Col3.setAttribute("class","col");
r4Col4.setAttribute("class","col");

// MNT ON VA L INSERER DANS NOTRE HTML.

Row2.appendChild(r1Col1)
Row2.appendChild(r1Col2)
Row2.appendChild(r1Col3)
Row2.appendChild(r1Col4)

Row3.appendChild(r2Col1)
Row3.appendChild(r2Col2)
Row3.appendChild(r2Col3)
Row3.appendChild(r2Col4)

Row4.appendChild(r3Col1)
Row4.appendChild(r3Col2)
Row4.appendChild(r3Col3)
Row4.appendChild(r3Col4)

Row5.appendChild(r4Col1)
Row5.appendChild(r4Col2)
Row5.appendChild(r4Col3)
Row5.appendChild(r4Col4)

// Création de mes boutons

export let r1Btn1 = document.createElement("button");
export let r1Btn2 = document.createElement("button");
export let r1Btn3 = document.createElement("button");
export let r1Btn4 = document.createElement("button");

export let r2Btn1 = document.createElement("button");
export let r2Btn2 = document.createElement("button");
export let r2Btn3 = document.createElement("button");
export let r2Btn4 = document.createElement("button");

export let r3Btn1 = document.createElement("button");
export let r3Btn2 = document.createElement("button");
export let r3Btn3 = document.createElement("button");
export let r3Btn4 = document.createElement("button");

export let r4Btn1 = document.createElement("button");
export let r4Btn2 = document.createElement("button");
export let r4Btn3 = document.createElement("button");
export let r4Btn4 = document.createElement("button");

// Ici on va lui insérer qq Elements

r1Btn1.innerText="1"
r1Btn2.innerText="2"
r1Btn3.innerText="3"
r1Btn4.innerText="+"

r2Btn1.innerText="4"
r2Btn2.innerText="5"
r2Btn3.innerText="6"
r2Btn4.innerText="-"

r3Btn1.innerText="7"
r3Btn2.innerText="8"
r3Btn3.innerText="9"
r3Btn4.innerText="*"

r4Btn1.innerText="C"
r4Btn2.innerText="0"
r4Btn3.innerText="="
r4Btn4.innerText="/"


// On les places Inside les cols.

r1Col1.appendChild(r1Btn1)
r1Col2.appendChild(r1Btn2)
r1Col3.appendChild(r1Btn3)
r1Col4.appendChild(r1Btn4)

r2Col1.appendChild(r2Btn1)
r2Col2.appendChild(r2Btn2)
r2Col3.appendChild(r2Btn3)
r2Col4.appendChild(r2Btn4)

r3Col1.appendChild(r3Btn1)
r3Col2.appendChild(r3Btn2)
r3Col3.appendChild(r3Btn3)
r3Col4.appendChild(r3Btn4)

r4Col1.appendChild(r4Btn1)
r4Col2.appendChild(r4Btn2)
r4Col3.appendChild(r4Btn3)
r4Col4.appendChild(r4Btn4)
