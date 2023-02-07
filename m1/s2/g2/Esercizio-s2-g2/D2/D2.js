/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
String nomi = "sono tutti quei tipi di dati che contengono anche una singola lettera fino ad una serie di parole, e possono essere gestite attraverso una serie di comandi" 

Number numeri = "si intende tutti quei dati che contengono un numero o più numeri in sequenza senza fare distinzione tra intero e decimale, il decimale si indica con un punto"

Boolean bool = "è un tipo di dato che ha solo due variabili: true => vero & false => falso, viene usato per dare delle condizioni"
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let nome = "Gabriele"
console.log(nome);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a = 12;
let b = 20;
let c = a + b; //oppure 
console.log(a + b); //oppure
console.log(c);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* 

DA SBLOCCARE PER VERICARE L'ERRORE

name = "Cuscinà"

const NAME = "Gabriele" 
NAME = "Cuscinà"
console.log(NAME);
*/


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero = 4

console.log(numero - x);

/* ESERCITAZIONE ALTERNATIVO CON OPERATORI

numero -= x 
console.log(x);


let a = 2
let b = 5
a += 2//a = a+2 => a nuovo 4
a -= 2//a = a
*/



/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
let controllo = (name1 != name2);
console.log(name1 != name2); // oppure
console.log(controllo);

console.log(name1 == name2.toLowerCase());

