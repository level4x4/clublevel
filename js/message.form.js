(function(){
	var $mfPopupContainer = $('<div/>', {class: 'mf-popup-container'}),
		$mfPopupWindow = $('<div/>', {class: 'mf-popup-window'});

	var $_mfPopupContainer;

	var renderPopup = function() {
		$mfPopupWindow.append(
			$('<form/>').append(
				$('<p/>', {class: 'mf-title-popup', text: 'Написать сообщение'})
			).append(
				$('<input/>', {class: 'mf-popup-input', placeholder: 'Имя'})
			).append(
				$('<input/>', {class: 'mf-popup-input', placeholder: 'Контакт (телефон, e-mail)'})
			).append(
				$('<textarea/>', {class: 'mf-popup-textarea', placeholder: 'Текст сообщения'})
			).append(
				$('<button/>', {class: 'btn btn-big btn-text', text: 'Отправить'})
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
})();