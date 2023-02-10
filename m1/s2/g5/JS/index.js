function aggiungiSimbolo(elemento){
    //let simbolo = elemento.textContent;
    let simbolo = elemento.getAttribute('data-simbolo');
    
    let display = document.querySelector('#display');
    display.value += simbolo;
}

function aggiungiSimbolo1(elemento1){
    let canc = elemento1.getAttribute('data-simbolo1');

    let display = document.querySelector('#display');
    display.value = canc;
}

function totale(){
    let display = document.querySelector('#display');

    display.value = eval(display.value);
}

let bkgr = document.getElementById("bkgr");
    console.dir(bkgr)

let input1 = document.getElementById("diplay");
console.dir(display)

display.style.color = "#fd00b1"
display.style.fontWeight = "bold"
display.style.fontSize = "1.8rem"
display.style.textShadow = "0 0 15px #e48fca"