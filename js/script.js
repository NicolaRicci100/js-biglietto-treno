console.log('JS OK');

//chiedi numero di km da percorrere
const userDistance = prompt('inserisci la distanza che vuoi percorrere in km', '100');
console.log('distanza dichiarata ' + userDistance + 'km');

//chiedi età
const userAge = prompt('inserisci la tua età', '20');
console.log('età dichiarata ' + userAge);

//calcola prezzo biglietto basandosi sui km scelti dell'utente tenendo in considerazione il costo di 0.21€ al km
const basePrice = userDistance * 0.21;

//applicazione sconti
if (userAge < 18) {
    const reducedPrice = (basePrice * 20) / 100;
    console.log('costo biglietto applicando sconto del 20% ' + (basePrice - reducedPrice) + '€');
} else if (userAge > 65) {
    const reducedPrice = (basePrice * 40) / 100;
    console.log('costo biglietto applicando sconto del 40% ' + (basePrice - reducedPrice) + '€');
} else {
    console.log('costo biglietto senza sconto ' + basePrice + '€');
}

