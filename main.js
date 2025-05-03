// 🏆 Snack 1
// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri
//  e restituisce la loro somma.
// Poi, definisci la stessa funzione somma 
// ma come funzione anonima assegnata a una variabile
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions. 

function sum(num1, num2) {
    return (num1 + num2)
}

const sum2 = function (num1, num2) {
    return num1 + num2
}

const sum3 = (num1, num2) => (num1 + num2)

// console.log(sum3(1, 2));


// 🏆 Snack 2
// Crea una arrow function che calcola il quadrato di un numero.
// Definisci una funzione chiamata quadrato che accetta un numero
// e restituisce il suo quadrato in una sola riga.


function calcSquare(n) {
    return (n * n)
}

const square = (n) => n * n;

// console.log(square (5))



// 🏆 Snack 3
// Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri:
//  due numeri e una funzione operatore (callback).
// La funzione deve eseguire l'operazione fornita sui due numeri.

// Esempio d’uso:
// const somma = (a, b) => a + b;
// const moltiplica = (a, b) => a * b;

// const eseguiOperazione = (a, b, operazione) => operazione(a, b);

// console.log(eseguiOperazione(3, 4, somma)); // 7
// console.log(eseguiOperazione(3, 4, moltiplica)); // 12

function eseguiOperazione(n1, n2, op) {
    return op(n1, n2)
}

const sum4 = (n1, n2) => (n1 + n2);
const mult = (n1, n2) => (n1 * n2);

console.log(eseguiOperazione(1, 2, sum4))
console.log(eseguiOperazione(3, 3, mult))

// 🏆 Snack 4
// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms)
// e restituisce una nuova funzione che avvia un setTimeout
// per stampare "Tempo scaduto!".





// 🏆 Snack 5
// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio
// e lo stampa ogni secondo.

// Nota: Questa funzione creerà un loop infinito.
// Interrompilo manualmente o usa clearInterval() in un altro script.





// 🏆 Snack 6
// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico
// che accetta un intervallo di tempo e
// restituisce una funzione che avvia un setInterval,
// incrementando un contatore e stampandolo.






// 🏆 Snack 7
// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio,
// un tempo di avvio e un tempo di stop.
//  Il messaggio deve essere stampato a intervalli regolari,
//  ma si deve fermare dopo il tempo di stop.





//  🎯 Snack 8 (Bonus)
// Crea una funzione che simula un conto alla rovescia
// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0,
// con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0,
//  stampa "Tempo scaduto!" e interrompe il timer.
// Esempio di utilizzo:
// contoAllaRovescia(5)

// 5
// 4
// 3
// 2
// 1
// Tempo scaduto!





// 🎯 Snack 9 (Bonus)
// Creare una funzione che esegue una sequenza di operazioni con ritardi
// Scrivi una funzione sequenzaOperazioni
// che accetta un array di operazioni (funzioni) e un tempo di intervallo.

// Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.
// Esempio di utilizzo:

// sequenzaOperazioni([
//     () => console.log("Operazione 1"),
//     () => console.log("Operazione 2"),
//     () => console.log("Operazione 3")
//   ], 2000);

//   Operazione 1
// Operazione 2
// Operazione 3




// 🎯 Snack 10 (Bonus)
// Creare un throttler per limitare l’esecuzione di una funzione
// Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

// Restituisce una nuova funzione che, quando chiamata ripetutamente,
// esegue l'operazione originale al massimo una volta ogni n millisecondi.
// Esempio di utilizzo:

// const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);

// throttledLog(); // ✅ "Eseguito!"
// throttledLog(); // ❌ Ignorato (chiamato troppo presto)
// setTimeout(throttledLog, 2500); // ✅ "Eseguito!" (dopo 2.5 secondi)
