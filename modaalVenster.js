var objectModalWindow = (function () {

	$modalWindow = $('<div class="modal-window"/>'); //maakt gelijk een class aan genaamd modal-window, opgeslagen in een variabele modalWindow, zo kan ik de css aanpassen 

	$contentsModal = $('<div class="contents-Modal"/>'); //maakt gelijk een class aan genaamd contents-window, voor dit geld hetzelfde als de gene hierboven.

	$buttonClose = $('<span class="button-Close">&%10005;</span>'); //maakt gelijk een class aan genaamd button-close. ook hierbij is het zo dat ik de css kan aanpassen. er zit ook een preset button style inverwerkt. 


	$modalWindow.append($contentsModal); //gooit de contents in het venster.


	//hieronder ga ik 3 methods definieren.

	return {


		center: function () {
			//opdrachten centreren


		},

		open: function (settings) { //functie om er voor te zorgen dat het venster opent. , wanneer het opent is bepaald in modaalstart. 

			$contentsModal.append(settings.inhoud);
			$contentsModal.css('width', settings.breedte+'px'); //geef aan dat je de breedte wilt gebruiken die in modaalstart is aangegeven
			$modalWindow.appendTo('body'); //zet het venster op de body
		},

		sluiten: function () {

			//opdrachten sluiten



		}




	}

}()); //met behulp van de extra haakjes: ( . ) zorg ik ervoor dat de functie zelf opstart opstart.