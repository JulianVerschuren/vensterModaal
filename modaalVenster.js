var objectModalWindow = (function () {

	$modalWindow = $('<div class="modal-window"/>');

	$contentsModal = $('<div class="contents-Modal"/>');

	$buttonClose = $('<span class="button-Close">&%10005;</span>');


	$modalWindow.append($contentsModal);


	//hieronder ga ik 3 methods definieren.

	return {


		center: function () {
			//opdrachten centreren


		},

		open: function (settings) {

			console.log('het venster openen met: ' + settings);
			$modalWindow.appendTo('body');

		},

		sluiten: function () {

			//opdrachten sluiten



		}




	}

}()); //met behulp van de extra haakjes: ( . ) zorg ik ervoor dat de functie zelf opstart opstart.