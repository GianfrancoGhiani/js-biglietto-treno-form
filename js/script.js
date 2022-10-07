// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio,
//  secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

'use strict'
// let dist = document.getElementById('km').value;
// let age = document.getElementById('age').value;

// console.log(dist, age);

// if (isNaN(dist) || isNaN(age)){
//     alert('si prega di scrivere i dati in cifre senza utilizzare lettere e di mettere la virgola con il simbolo " . "');
// }
let dist = document.getElementById('km');
let age = document.getElementById('age');


const pickValues = function (){
    dist = dist.value;
    age = age.value;
    if (isNaN(dist) || isNaN(age)){
        alert('Si prega di scrivere i dati in cifre senza utilizzare lettere, di mettere la virgola con il simbolo " . " e ricaricare la pagina');
    }
    // console.log(dist, age);

    let fraseTicket = '';
    const prezzoPieno = parseFloat(dist) * 0.21
    let prezzoFinale = (prezzoPieno).toFixed(2);
    if (parseInt(age) < 18){
        prezzoFinale = (prezzoPieno * 0.8).toFixed(2);
        fraseTicket = 'Dato che sei minorenne, puoi accedere ad uno sconto del 20%. <br> Ti consigliamo di viaggiare con un adulto';
    } else if (parseInt(age) > 65){
        prezzoFinale = (prezzoPieno * 0.6).toFixed(2);
        fraseTicket = 'Dato che sei un over 65, puoi accedere ad uno sconto del 40%';
    }
    // console.log(prezzoFinale);
    document.getElementById("ticket").innerHTML =`
    <h1 class="text-center m-auto">La tua tratta percorre ${dist}km</h1>
    <p class=" mt-3">
    Hai ${age} anni <br>
    ${fraseTicket} <br>
    Il prezzo del tuo biglietto &egrave; di: €${prezzoFinale}
    </p>
    `;

};


const button = document.getElementById('pick-values');
button.addEventListener('click', pickValues);

function show(){
    document.getElementById("ticket").classList.toggle('d-block');
    document.getElementById("ins").classList.toggle('d-none');
}
button.addEventListener('click', show);
