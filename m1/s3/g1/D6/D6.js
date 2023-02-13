/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/*
const l1 = 5
const l2 = 10

function Area(){
    return console.log(l1 * l2)
}

Area()
*/

/*

function Area(a = 2,b = 8){
    return a * b
    
}
console.log(Area())

*/



/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/*
function crazySum(a,b){

        if(a == b){
            console.log((a + b)*3)
        }else {
            return console.log(a + b)
        }
}

crazySum(4,4)
*/


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/*
function crazyDiff(a,b = 19){
    
    if(!(a === b)){
        console.log((a - b))
        
        if(a > b){
            console.log((a - b)*3)
        }
        
    }
       

}
crazyDiff(30)
*/

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/*
function boundary(n){
    if((n >= 20 && n <= 100) || n === 400){

        return true
    } else{
        return false
    }
    
}

console.log(boundary(20))
*/

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/*

var stringa = ''

function epify(stringa){
         
    if((stringa == '') ){
        console.log('EPICODE')

        if(stringa === 'EPICODE'){
            return stringa
        }
    }
}

epify('')

*/
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/*
function check3and7(a){
    
    if(a > 0){
        if(a %3 == 0 || a %7 == 0){
        return console.log(a)
    }else{
        return console.log(a = 'non è divisibile per 3 o 7')
    }
}
}
check3and7(4)
*/
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let nuovaStringa = reverseString();

function reverseString(a){
    return a.reverse()
   
}



console.log(revString)
reverseString('ciao')


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */




/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */




/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */