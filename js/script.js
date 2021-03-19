// Il programma dovrà chiedere all'utente 
// il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
// secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) 
// va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare 
// centesimi sul prezzo).

// Chiedere il numero di chilometri da percorrere ed età passeggero
var chilometri = prompt('Quanti chilometri devi percorrere?');
console.log(chilometri);

var numeroChilometri = parseInt( chilometri );
console.log(numeroChilometri);

var eta = prompt('Quanti anni hai?');
console.log(eta);

var numeroEta = parseInt( eta );
console.log(numeroEta);


// Definire prezzi:

// - 0.21€/km prezzo normale
var prezzoBiglietto;

prezzoBiglietto = 0.21 * numeroChilometri;
console.log('prezzo del biglietto: ', prezzoBiglietto);

// - sconto 20% per i minorenni
var prezzoMinorenni


// - sconto 40% per gli over 65

// output con massimo 2 decimali 