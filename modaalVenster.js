var objectModalWindow = (function () {


	var $window = $(window); // variabele window word vaak zo genoemd in jquery. Is een jquery object. het browser venster. 

	var $modalWindow = $('<div class="modal-window"/>'); //maakt gelijk een class aan genaamd modal-window, opgeslagen in een variabele modalWindow, zo kan ik de css aanpassen 

	 var $contentsModal = $('<div class="contents-Modal"/>'); //maakt gelijk een class aan genaamd contents-window, voor dit geld hetzelfde als de gene hierboven.

	var $buttonClose = $('<span class="button-Close">&#10005;</span>'); //maakt gelijk een class aan genaamd button-close. ook hierbij is het zo dat ik de css kan aanpassen. er zit ook een preset button style inverwerkt. 


	$modalWindow.append($contentsModal); //gooit de contents in het venster.


	//hieronder ga ik 3 methods definieren.

	return {


		center: function () {
			//opdrachten centreren

			var links = Math.max($window.width()-$contentsModal.outerWidth(), 0) / 2;  //zorgt ervoor dat de content centreert in de breedte
			var boven = Math.max($window.height()-$contentsModal.outerHeight(), 0)/2;  //zorgt ervoor dat de content centreert in de hoogte
			$contentsModal.css({left: links, top: boven});

		},

		open: function (settings) { //functie om er voor te zorgen dat het venster opent. , wanneer het opent is bepaald in modaalstart. 
				//opdrachten openen
			$contentsModal.append(settings.inhoud, $buttonClose);
			$contentsModal.css({width: settings.breedte+'px' ||'auto', 
							   height: settings.hoogte+'px' || 'auto'})
								.on('click', function(e){
									e.stopPropagation(); 

					}); //geef aan dat je de breedte wilt gebruiken die in modaalstart is aangegeven



			$modalWindow.appendTo('body').on('click', objectModalWindow.sluiten); //zet het venster op de body
			objectModalWindow.center();
			$buttonClose.on('click', objectModalWindow.sluiten); //click event nodig voor het sluiten van de venster op de knop.
			$window.on('resize', objectModalWindow.center); //resised en centered als het scherm verkleint wordt.
		},

		sluiten: function () {

			//opdrachten sluiten
			console.log('Closing window'); //logt het feit dat het venster gesloten is
			$modalWindow.detach(); //haalt het complet venster weg
			$contentsModal.empty().off('click', objectModalWindow.sluiten); //leegt de inhoud van het venster
			$window.off('resize', objectModalWindow.center);
		}




	}

}()); //met behulp van de extra haakjes: ( . ) zorg ik ervoor dat de functie zelf opstart opstart.