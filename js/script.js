// CONSEGNA:

// Visualizzare con degli alert 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,
// tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da 
// indovinare sono stati individuati.

// ---------------------------------------------------------------------------------------------------------------

// ANALISI 

// [x] prendere funzione random
// [x] creare un array da inserire 5 numeri random
// [] collegarli al rispettivo alert tramite variabile
// [] mettere timer di 30 secondi
// [] fermare timer di trenta secondi tramite clear
// [] chiedere all'utente tramite 5 prompt di inserire i numeri che si ricorda
// [] confronta i 5 numeri dell'user con quelli dell'array
// [] segnala all'utente tramite un alert quanti e quali numeri ha indovinato

// ---------------------------------------------------------------------------------------------------------------

// SVILUPPO

// creo un array vuoto da inserire valori casuali
const randomNumbersArray = [];

// creo array vuota da mettere valori user
const UserNumberArray = [];
// ritorna un numero random da 1 a 10:
for (let i = 0; i < 5; i++) {
    randomNumbersArray.push(Math.floor(Math.random() * 10))
}

// controllo inserimento valori casuali array
// console.log(randomNumbersArray)

// inizio il gioco con un alert prepapatorio
alert('Regole del gioco: memorizzare 5 numeri e ripeterli dopo 30 secondi')
alert('Memorizza i seguenti 5 numeri');

// per ogni numero dell'array randomNumbersArray faccio un alert
randomNumbersArray.forEach((element) => {
    alert(element);
});

// metto u  timer di 30 secondi
setTimeout(myFunction, 3000)
function myFunction() {

    metto alert che segna la fine dei 0
    alert('sono passati 30 secondi inserisci i numeri')
    
    
    let n = 0;

    while (n !== 5) {
    let UserNumberArray = prompt('immetti numero')
    n++

    // inserisco valori immessi dentro array userNumbersArray
    }

}





 



