/*Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/ 


/*HUMAN CODE

Cosa devo fare?
Devo creare un programma che mi stampi dei numeri da 1 a 100 con alcune variabili.

Come posso spiegarlo alla macchina?
Allora:

-Scrivi un programma che stampa dei numeri da 1 a 100.
    SE il numero è multiplo di 3 E 5
        -stampa Fizzbuzz al posto del numero corrispondente
    -SE il numero è multiplo di 3
        -stampo fizz al posto del numero corrispondente
    -ALTRIMENTI SE il numero è multiplo di 5
        -stampo buzz al posto del numero corrispondente
    ALTRIMENTI
    -Stampo il numero corrispondente
        
    

Che dati possono servirci?
-Numeri generati con for
-fizz e buzz, usati come variabili
-% per selezionare il multiplo
-operatore logico per selezionare entrmbi fizz e buzz
-trovare un modo per sostituire il numero con la parola. 
*/ 


//Scrivi un programma che stampa dei numeri da 1 a 100.
for(let numbers = 1; numbers <= 100; numbers++) {
    
//SE il numero è multiplo di 3

     if(numbers % 3 == 0 && numbers % 5 == 0) {
        console.log('Fizzbuzz');  

     }else if(numbers % 3 == 0) {
        console.log('Fizz'); //Stampo fizz al posto del numero corrispondente  

    
//ALTRIMENTI SE il numero è multiplo di 5
    } else if(numbers % 5 == 0) { 
        console.log('Buzz'); //Stampo buzz al posto del numero corrispondente
//ALTRIMENTI           
    } else {
        console.log(numbers); //Stampo il numero corrispondente
        
    }
 

//SE il numero è multiplo di 3 E 5
}
