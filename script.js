// Div för att lägga räknaren i
let mainDiv = document.createElement("div");
mainDiv.id = "mainDiv";
document.body.appendChild(mainDiv);

// Span för räknaren
let textSpan = document.createElement("span");
textSpan.id = "textSpan";

// Datumet som ska räknas till
let countToDate = new Date("Sep 23, 2022 17:00:00").getTime();

// Räkna ner en sekund i taget
let countSecond = setInterval(function() {

    // Dagens datum och klockslag
    let countFromNow = new Date().getTime();

    // Skillnad mellan nu och slutdatum
    let fromNowToDate = countToDate - countFromNow;

    // Uträknare
    let days = Math.floor(fromNowToDate / (1000 * 60 * 60 * 24));
    let hours = Math.floor((fromNowToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((fromNowToDate % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((fromNowToDate % (1000 * 60)) / 1000);

    // Skriv ut span
    textSpan.innerHTML = `${days}d  ${hours}h  ${minutes}m  ${seconds}s`;
    mainDiv.appendChild(textSpan);
    
}, 1000);


//Datum för examen 2022-09-23 17:00:00