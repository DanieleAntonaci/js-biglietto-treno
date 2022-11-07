// chiedere all'utente il numero di km da percorrere
let kmDaPercorrere = parseInt(prompt('Salve, quanti km devi percorrere?'));


// chiedere l'etá
let etaPasseggero = parseInt(prompt('Salve, quanti anni hai?'));


console.log(kmDaPercorrere, etaPasseggero);

// calcolare il prezzo 0,21 € 
let prezzoViaggio = kmDaPercorrere * 0.21;
let prezzoScontatoViaggio;

// se hanno un eta differente cambia il prezzo e stampa il risultato
if (etaPasseggero < 18) {
    prezzoScontatoViaggio = (prezzoViaggio - (prezzoViaggio * 20 / 100)).toFixed(2);

} else if (etaPasseggero > 65) {
    prezzoScontatoViaggio = (prezzoViaggio - (prezzoViaggio * 40 / 100)).toFixed(2);

} else {
};

// messaggio di risposta alla richiesta
document.getElementById('prezzo_viaggio').innerHTML = `Salve, per percorrere ${kmDaPercorrere}km, coniderata la sua et&aacute; di ${etaPasseggero} anni, il prezzo del biglietto sar&aacute; di ${prezzoScontatoViaggio || prezzoViaggio}&euro;`;

