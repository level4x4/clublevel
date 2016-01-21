(function(){
	$(function(){
		$('img.cl-icon-svg').each(function(){
			var $img = $(this);
			if ($img.hasClass('cl-icon-set-color')) {
				var imgURL = $img.attr('src');
				var imgWidth = $img.attr('width');
				var imgHeight = $img.attr('height');
				var imgColor = $img.attr('data-replace-color');

				$.get(imgURL, function (data) {
					var $svg = $(data).find('svg');
					var $style = $svg.find('style');
					var style = $style.text();

					style = style.replace(/#....../gi, '#'+imgColor);
					$style.text(style);
					$svg.removeAttr('xmlns:a').attr({width: imgWidth, height: imgHeight});

					$img.replaceWith($svg);
				}, 'xml');
			}
		});
	});
})();