/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
function confronto(a,b){
  if(a<b){
    a = b;
  }
  
  return "il maggiore è " + a;
} 
let es1 = confronto(10,14);
console.log(es1);
*/
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let numero = 5;
if (numero == 6) {
  console.log('not equal!');
}
*/
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let num1 = 25
if(num1 % 5 == 0){
  console.log('è divisibile per 5')
} else {
  console.log('non è divisibile per 5');
}
*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let num1 = 14
let num2 = 6

if (num1 == 8 || num2 == 8 || num1 + num2 == 8 || num1 - num2 == 8) {
  console.log('true');
}
*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let totalShoppingCart = 20;

if (totalShoppingCart <= 50 ) {
  console.log(totalShoppingCart + 10);
} else {
  console.log(totalShoppingCart);
}

let totalShoppingCart1 = 51;

if (totalShoppingCart1 <= 50 ) {
  console.log(totalShoppingCart1 + 10);
} else {
  console.log(totalShoppingCart1);
}
*/
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let totalShoppingCart = 20;
function sconto(totalShoppingCart) {
  totalShoppingCart + (totalShoppingCart / 5);

  if (totalShoppingCart <= 50) {
    console.log(totalShoppingCart + 10);
  } else {
    console.log(totalShoppingCart);
  }
}
*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let numeri = [9,15,7,48,2]
console.log(numeri.sort)
numeri.sort(function(a,b){
  return a - b;
})
console.log(numeri.reverse())
*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA 

let g = 'ciao'
let f = 8
  console.log(typeof(f))
  console.log(typeof(g))
*/



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
function divisibile5(a){
  if((a/2)%1==0){
    return "è divisibile per 2";
  }else{
    return "Non è divisibile per 2";
  }
}
let es9 = divisibile5(16);
console.log(es9);
*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
function vallo(val){
  if (val < 10) {
      return "Meno di 10";
    } else if (val < 5) {
      return "Meno di 5";
    } else {
      return "Uguale a 10 o maggiore";
    }
  }
  let es10 = vallo(16);
  console.log(es10);
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
/*
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: `toronto`,
}
*/

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
