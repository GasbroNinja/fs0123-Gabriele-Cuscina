// Attendo caricamento del DOM
document.addEventListener('DOMContentLoaded', (event) => {

//definizione  delle variabili iniziale
let questions = localStorage.results ? JSON.parse(localStorage.results) : [] // Se ci sono dati in localstorage  uso quelli oppure oggetto vuoto
let questionsCount = 0                                                        // contatore progressivo per le domande del quiz
let timer
let main = document.querySelector('#main') //Recupero elemento principale, saranno inserite qui le varie pagine
let rateBtn = true

//se sono presenti dati in local storage ripresenta la pagina results altrimenti si avvia il quiz da welcome
if (questions.length > 0) {
    rateBtn = false                                           //disabilita il pulsante rate us
    refreshPage ('results', renderResults,resultsAnimation)
}else{
  welcome()
}
// Funzione async per il recupero delle domande dall'end point
async function get (url, params) {
  const response = await fetch(url + '?' + new URLSearchParams(params))
  const data = await response.json()

  return data
}
// Questa funzione assegna gli eventi agli elementi checkbox e button della pagina iniziale
function welcome() {
  let proceed = document.querySelector('button')
      proceed.addEventListener('click', (e) =>{
          refreshPage('difficulty', renderdifficulty)  // Carica la pagina di impostazione del quiz
          })

    document.querySelector('#main input[type="checkbox"]').addEventListener('click', (e) =>{
      //e.target.checked ? proceed.disabled = false : proceed.disabled = true         //se checkbox è spuntata abilita il pulsante proceed
      proceed.disabled = e.target.checked ? false : true
    })
}   
//questa funzione prende determinati parametri che successivamente serviranno per
//riassegnare un valore al main, svuotarlo e riaggiornare il template per avere una nuova pagina

function refreshPage(next, render, animation = false){                            //parametri render e animation sono callback
    let template = document.querySelector('#' + next).content.cloneNode(true)     // recupera il template richiesto
        main.className = next
        main.innerHTML = ''
        main.append(render(template))                                             //elabora il template sulla base dei dati

        if( animation ){
            animation()                                                           // applica eventuali animazioni
        }
        
}
/*
 Funzione necessaria ad applicare gli eventi alla form di impostazione del quiz  ha come parametro il template da applicare al main
 */
function renderdifficulty(template) {
  let amount = template.querySelector('input[name="amout"]')
  let difficulty = template.querySelector('select[name="difficulty"]')
  let btn = template.querySelector('button')
  let loader = template.querySelector('.loader')

  amount.addEventListener('keyup',(e) =>{
    typingTimer = setTimeout(()=>{
      e.target.checkValidity() ? btn.disabled = false : btn.disabled = true
    }, 1000);
  })

  btn.addEventListener('click', (e) =>{
    loader.classList.add('active')                                            //attiva il loader in attesa della risposta
    e.target.disabled = true 
    get('https://opentdb.com/api.php', {                                      //recupero i valori di input del form e avvio la fetch al end point specificato
      amount: amount.value,
      category:18,
      difficulty: difficulty.value
    }).then((data) => {                                                       //se la fetch va a buon fine inserisco l'array delle domande nella variabile questions
      if ( data.results ){
        questions = data.results
        loader.classList.remove('active')                                     //Rimuove il loader
        refreshPage('benchmark', renderBenchmark, countDownAnimation)         //Fa iniziare il questionario
      }
    })
  })
  return template
}

/**
Applica gli eventi agli elementi del template feedback e genera gli input radio necessari per il rating
 */
function renderFeedback(template){
    let typingTimer
    let rating = template.querySelector('.rating')
    let input = template.querySelector('input')
    let btn = template.querySelector('button')

    for (let i = 0; i < 10; i++) {
      let radio = createRadio(i, i + 1, {type: 'radio', name: 'rating'})  //richiama la funzione per generare gli input
          rating.append(radio.input, radio.label)
    }
    input.addEventListener('keyup', (e) =>{
      clearTimeout(typingTimer);
      typingTimer = setTimeout(()=>{
        btn.disabled = false
      }, 1000);
    })

    btn.addEventListener('click', (e) =>{
        location.reload()                                                 //se premuto il bottone causa il reload della pagina
    })
    return template
}

/* Questa funzione corrisponde alla pagina dove si potrà visualizzare la percentuale in numeri e in formato riempimento del cerchio 
 centrale delle domande giuste e di quelle sbagliate. Applica gli eventi agli elementi e compila il template results
  */

function renderResults(template){
      let results = buildResults()                           //recupero le statistiche del quiz
      let stats = Object.keys(results)
      let msg = template.querySelectorAll('.testocentro')
      let btn = template.querySelector('button')

      if( !rateBtn ){                                       // serve a disattivare il bottone Rate US nel caso siano presenti dati salvati in local storage
        btn.style.display = 'none'
      }

      if ((100/questions.length)*results.wrong > 40 ){
          msg[0].classList.remove('hideMsg')
          msg[1].classList.add('hideMsg')
      }else{
          msg[0].classList.add('hideMsg')
          msg[1].classList.remove('hideMsg')
      }

      for (const stat of stats) {                          // Compilo gli elementi delle statistiche , WRONG e CORRECT
          let partial = stat == 'correct' ? results.correct : results.wrong
          let el = template.querySelector(`#${stat} p`)
              el.textContent =  Number((100/questions.length) * partial).toFixed(2)  + "%"
          let count = template.querySelectorAll(`#${stat} p:last-child span`)
              count[0].textContent = partial
              count[1].textContent = questions.length
      }

      template.querySelector('button').addEventListener('click', (e) =>{
              refreshPage('feedback', renderFeedback)
      })  

  return template
}

/**
  Funzione che elabora il template benchmnark per ogni singola domanda imposta il timer e assegna gli eventi ai bottoni delle risposte
 */
function renderBenchmark (template){
  
  
  let second = Math.floor(Math.random()*2) ? 60 : 30
  let question = questions[questionsCount]                          // recupero la domanda in base al contatore
  let answers = Array.from(question.incorrect_answers)              // Creo un array con tutte le possibili risposte 
      answers.push(question.correct_answer)  
  
  let countDown = template.querySelector("#countdown")
      countDown.setAttribute("data-seconds", second);
      countDown.textContent = second

  let current = template.querySelector('#current')
      current.textContent = questionsCount + 1

  let total = template.querySelector('#total')
      total.textContent = questions.length

  let fieldset = template.querySelector('fieldset')
      fieldset.innerHTML = ''

  let legend  = document.createElement('legend')
      legend.innerHTML = question.question

      fieldset.append(legend)

      for (let [i, a] of answers.entries()) {                           // eseguo un ciclo sulle risposte, creo gli input e assegno gli eventi
        
        let radio =  createRadio(i,a,{type: 'radio', name: 'answer'})   // Invoco la funzione che crea gli input radio
            radio.input.addEventListener('click',(e) => {               // assegno l'evento click
                    question.answer = e.target.value                    // Crea un nuovo parametro chiamato answer nell oggetto question e assagno il valore selezionato al clik
                    clearInterval(timer)                                // resetto il timer

                    Swal.fire({                                         // Faccio apparire il popUp esito risposta
                      icon: question.correct_answer == question.answer ? 'success' : 'error',
                      confirmButtonText: 'Proceed',
                      confirmButtonColor: '#00FFFF',
                    }).then((result) => {
                      if (result.isConfirmed) {
                        if ( questionsCount < questions.length - 1 ){                     // verifico se le domande sono finite
                          questionsCount = questionsCount + 1                             // incremento il contatore
                          refreshPage('benchmark', renderBenchmark, countDownAnimation)   // Passo alla domanda sucessiva
                        }else{
                          localStorage.setItem('results', JSON.stringify(questions));     // salvo l'oggetto questions in localstorage
                          refreshPage('results', renderResults,resultsAnimation)          // rimando alla pagina results
                        }
                      }
                    })
                })
                fieldset.append(radio.input, radio.label)
      }
 
      return template
}

/*
Inserisce il grafico a torta nella pagina results utilizzando la libreria chart.js
*/
function resultsAnimation() {
  let ctx = document.getElementById('scorePie');
  let results = buildResults()                                                               // richiamo la funzione che elabora le risposte da l'oggetto questions
      results = Object.keys(results).reverse().reduce((a, c) => (a[c] = results[c], a), {}) //  inverte le chiavi dell oggetto
  
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: Object.keys(results),
      datasets: [{
        data: Object.values(results),
        backgroundColor: ["#D20094", "#00FFFF"],
        borderJoinStyle: "#000000",
        borderWidth: 0,
      }]
    },
    options: {
      cutout: '70%',
      plugins: {
        legend: {
            display: false
        },
    }
  }
  });


}
/*Questa funzione mi creerà un timer per dare un tempo limite di rispota alle domande ripartirà da zero ad ogni nuova domanda e si disattiverà una volta finite*/
function countDownAnimation () {

    let timerEl = document.querySelector('#timer .svg-indicator-indication')
    let countDown = document.querySelector("#countdown")
    let second = start  = countDown.dataset.seconds


    if ( questionsCount < questions.length  ) {
      timer = setInterval(() => {
        second--
        countDown.textContent = second
        updateSvgIndicator(timerEl, 40, start, second)                      // aggiorna la grafica a video
        if ( second == 0 ){
          questionsCount = questionsCount + 1
          clearInterval(timer)
          refreshPage('benchmark', renderBenchmark, countDownAnimation)     // allo scadere del timer rimanda alla domanda successiva
        }
      }, 1000)
  }else{
      refreshPage('results', renderResults)
  }
}
//Questa è la funzione che crea il bottone( input + label ) e che viene richiamata all'occorrenza

function createRadio (i, v, p){

  let input =  document.createElement('input')
      input.setAttribute('type', p.type)
      input.setAttribute('id', `${p.name}_${i}`)
      input.setAttribute('name', p.name)
      input.value = v      
  let label =  document.createElement('label')
      label.htmlFor = `${p.name}_${i}`
      label.innerHTML = v

  return { input: input, label: label }
}
/*Questa è la funzione madre che mi calcola il raggio del cerchio e che quindi controllerà la sua colorazione e che verrà richiamata all'occorenza*/ 
function updateSvgIndicator (el, r, start, current){
  let progress = (100/start)*current
  let arcOffset = ( 2*3.14*r ) * ((100 - progress)/100)
      el.style.strokeDashoffset = arcOffset
}
/*
scorre l'array delle risposte e crea un nuovo oggetto con le statistiche
*/
function buildResults() {
  let results = {
    correct: 0,
    wrong: 0
  }
  for (const question of questions) {
      question.correct_answer == question.answer ? results.correct += 1  : results.wrong += 1 // |--> ternario leggendario
  }
  return results
}
})