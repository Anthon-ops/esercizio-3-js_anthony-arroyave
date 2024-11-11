
//Esercizio 1
//  Scrivi una Funzione che dato un numero stampi la tabellina corrispondente. 
// function tab(number) {
// for (let i = 0; i <= 10 ; i++) {
//     R= i * number
//     let risultati= `${i} per ${number} = ${R}`;
//     console.log(risultati);
// }
// }
// tab(7);
//tab(2)


//Esercizio 2 
//Scrivere una funzione che converta una temperatura passata come dato, con una delle seguenti descrizioni:
// se temperatura e’ minore di 20, stampare “non ci sono piu’ le mezze stagioni”
// se temperatura e’ maggiore uguale a 30, stampare “andiamo al mare!?”
// se temperatura e’ minore di 30, stampare “mi dia una birra sudata”
// se temperatura e’ minore di 0, stampare “non e’ tanto il freddo quanto l’umidità’”
// se temperatura e’ minore di -10, stampare “uomini forti, destini forti. Uomini deboli, destini deboli.”
function temperatura(Gradi) {
    if(Gradi < -10 ){
        console.log("uomini forti, destini forti. Uomini deboli, destini deboli.");
    } else if(Gradi < 0){
        console.log("non e’ tanto il freddo quanto l’umidità");
    } else if(Gradi < 20){
        console.log("non ci sono piu’ le mezze stagioni");
    } else if(Gradi >= 30){
        console.log("andiamo al mare!?");
    } else{
        console.log("non hai messo una temperatura");
    }
}
temperatura(-8);
temperatura(30)

//Esercizio 3
// Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,
//   FALSE altrimenti.
//   Esempi:func
//     Input: n = 2, m = 3
//     Output: FALSE
//     Input: n = 2, m = '2'
//     output: FALSE
//     Input: n = 2, m = 2
//     Output: TRUE



//Esercizio 4
// Scrivere una funzione che prenda come input un numero e generi un array composto da n numeri casuali compresi tra 1 e 10.
// Esempio: Input= 5    Output= [5, 9, 1, 6, 10] 
//Ricodatevi i metodi degli array ! 





///Esercizio EXTRA : 
// in autonomia create degli array e applicate i metodi visti a lezione cosi' da prendere confidenza con la loro funzionalita'
