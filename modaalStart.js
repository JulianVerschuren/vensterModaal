$(document).ready(function(){
//dit gedeelte verwijderd de 3 divs waar de grote afbeeldingen, en de tekst inzitten uit de dom. de kleine afbeeldingen staan voor de divs, dus die vallen er buiten
//Alles wat in de div staat word dus uit de dom verwijderd. Dom staat voor: document object model.


var hendrixContents = $('#hendrix').detach(); // hier maak ik dus een veriable aangenaamd hendrixContents, de waarde die er in opgeslagen staat is de div #hendrix waar mijn grote afbeelding en tekst in zit. Door detach te gebruiken verwijder ik hem dus als het ware uit de DOM. 

var morissonContents = $('#morisson').detach(); //voor deze geldt hetzelfde alleen is het hier de div morrisson

var cobainContents = $('#cobain').detach(); //hierbij ook weer hetzelfde verhaal.

//plaatsen van het modale venster

objectModalWindow.open(hendrixContents);
})