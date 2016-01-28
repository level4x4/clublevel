(function(){
	var $mfPopupContainer = $('<div/>', {class: 'mf-popup-container'}),
		$mfPopupWindow = $('<div/>', {class: 'mf-popup-window'});

	var $_mfPopupContainer;

	var renderPopup = function() {
		$mfPopupWindow.append(
			$('<form/>', {action: '', method: 'POST'}).append(
				$('<p/>', {class: 'mf-title-popup', text: 'Написать сообщение'})
			).append(
				$('<input/>', {class: 'mf-popup-input', type: 'text', placeholder: 'Имя', required: true})
			).append(
				$('<input/>', {class: 'mf-popup-input', type: 'text', placeholder: 'Контакт (телефон, e-mail)', required: true})
			).append(
				$('<textarea/>', {class: 'mf-popup-textarea', placeholder: 'Текст сообщения', required: true})
			).append(
				$('<button/>', {class: 'btn btn-big btn-text mf-submit', type: 'submit', text: 'Отправить'})
			).append(
				$('<i/>', {class: 'mf-close'})
			)
		);

		$_mfPopupContainer = $mfPopupContainer.clone();

		$_mfPopupContainer.append($mfPopupWindow);
		$(document.body).append($_mfPopupContainer);
	};


	$(document).on('click', '.send-msg', function(){
		renderPopup();
		return false;
	});

	$(document).on('click', '.mf-close', function(){
		$_mfPopupContainer.remove();
		return false;
	});

	$(document).on('click', '.mf-submit', function(){
		var $mfPopupInput = $('.mf-popup-input'),
			$mfPopupTextarea = $('.mf-popup-textarea');
		var $input1 = $($mfPopupInput[0]);
		var $input2 = $($mfPopupInput[1]);
		if ($input1.val() && $input2.val() && $mfPopupTextarea.text()) {
			$_mfPopupContainer.remove();
		}
	});
})();