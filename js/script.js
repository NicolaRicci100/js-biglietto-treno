console.log('JS OK');

//chiedi numero di km da percorrere
const userDistance = prompt('inserisci la distanza che vuoi percorrere in km', '20');
console.log('distanza dichiarata ' + userDistance + 'km');

//chiedi età
const userAge = prompt('inserisci la tua età', '20');
console.log('età dichiarata ' + userAge);

//calcola prezzo biglietto basandosi sui km scelti dell'utente tenendo in considerazione il costo di 0.21€ al km
let basePrice = userDistance * 0.21;
console.log('costo biglietto senza sconti ' + basePrice + '€');

//applicazione sconti
if (userAge < 18) {
    let basePrice = (basePrice * 20) / 100;
} else if (userAge > 65) {
    let basePrice = (basePrice * 40) / 100;
}
console.log('costo biglietto applicando eventuali sconti ' + basePrice);
