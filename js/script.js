// Il programma dovrà chiedere all'utente 
// il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
// secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) 
// va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare 
// centesimi sul prezzo).

// Chiedere il numero di chilometri da percorrere ed età passeggero
var chilometri = prompt('Quanti chilometri devi percorrere?');
var eta = prompt('Quanti anni hai?');

//Trasformare stringhe in numeri
var numeroChilometri = parseInt( chilometri );
var numeroEta = parseInt( eta );

// Definire tariffa:
var tariffaBiglietto = 0.21;

//prezzo standard:
var prezzoStandard = tariffaBiglietto * numeroChilometri;

// - sconto 20% per i minorenni
var prezzoMinorenni = prezzoStandard - ( prezzoStandard * 0.2 );

// - sconto 40% per gli over 65
var prezzoOver = prezzoStandard - ( prezzoStandard * 0.4);

// Logica degli sconti
if (numeroEta < 18 ) {
    alert('Il prezzo del biglietto è: ' + prezzoMinorenni.toFixed(2) + '€');
} else if ( numeroEta > 65 ) {
    alert('Il prezzo del biglietto è: ' + prezzoOver.toFixed(2) + '€');
} else {
    alert('Il prezzo del biglietto è: ' + prezzoStandard.toFixed(2) + '€');
}
