$(document).ready(function(){
//dit gedeelte verwijderd de 3 divs waar de grote afbeeldingen, en de tekst inzitten uit de dom. de kleine afbeeldingen staan voor de divs, dus die vallen er buiten
//Alles wat in de div staat word dus uit de dom verwijderd. Dom staat voor: document object model.


var hendrixContents = $('#hendrix').detach(); // hier maak ik dus een veriable aangenaamd hendrixContents, de waarde die er in opgeslagen staat is de div #hendrix waar mijn grote afbeelding en tekst in zit. Door detach te gebruiken verwijder ik hem dus als het ware uit de DOM. 

var morissonContents = $('#morisson').detach(); //voor deze geldt hetzelfde alleen is het hier de div morrisson

var cobainContents = $('#cobain').detach(); //hierbij ook weer hetzelfde verhaal.

//plaatsen van het modale venster

//objectModalWindow.open(hendrixContents);


//events met thumbnail, dus het klikken op het plaatje komt hieronder:



$('#jimiThumb').on('click', function(){

objectModalWindow.open({inhoud: hendrixContents, breedte: 600});


}); //dit zorgt ervoor dat op het moment dat ik op de thumbnail/foto klik van jimi hendrix,  de content opent die ik in de eerste instantie gedetached had.

$('#morriThumb').on('click', function(){

objectModalWindow.open({inhoud: morissonContents, breedte: 600});


}); //hierin heb ik ook de breedte aangegeven. de breedte heb ik op 600 gelaten, vind het mooier om het even groot te houden.

$('#kurtThumb').on('click', function(){

objectModalWindow.open({inhoud: cobainContents, breedte: 600});

//objectmodalwindow is een functie die ik gemaakt heb in modaalvenster ik heb onderandere div classes toegevoegd aan een aantal nieuw gemaakte variabelen zoals:
//modalwindow, buttonclose, en contentsmodel. de functie heb ik nodig voor het openen, sluiten en centeren van het venster, met verschillende inhouden. hier roep ik objectmodalwindow dus aan en zeg dat ie de method open moet gebruiken met de inhoud van de verschillende contents met breedte. 
});


});


