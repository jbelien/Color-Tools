var init = {
	red: 255,
	green: 255,
	blue: 255
};

$(document).ready(function() {
	$('input[type=number]').on('keyup', function() {
		if (parseInt($(this).val()) < $(this).attr('min')) $(this).val($(this).attr('min'));
		else if (parseInt($(this).val()) > $(this).attr('max')) $(this).val($(this).attr('max'));
	});

	$('input[name=r], input[name=g], input[name=b]').on('keyup', function() {
		var r = parseInt($('input[name=r]').val()), g = parseInt($('input[name=g]').val()), b = parseInt($('input[name=b]').val());

		var cmy = rgb2cmy([r, g, b]);
		$('input[name=c]').val(cmy[0]);
		$('input[name=m]').val(cmy[1]);
		$('input[name=y]').val(cmy[2]);

		var cmyk = rgb2cmyk([r, g, b]);
		$('input[name=cc]').val(cmyk[0]);
		$('input[name=mm]').val(cmyk[1]);
		$('input[name=yy]').val(cmyk[2]);
		$('input[name=k]' ).val(cmyk[3]);

		var hsl = rgb2hsl([r, g, b]);
		$('input[name=h]').val(hsl[0]);
		$('input[name=s]').val(hsl[1]);
		$('input[name=l]').val(hsl[2]);

		var hex = rgb2hex([r, g, b]);
		$('input[name=hex]').val(hex); $('#preview').css('background-color', hex);

		var dec = rgb2dec([r, g, b]);
		$('input[name=dec]').val(dec);
	});

	$('input[name=r]').val(init.red);
	$('input[name=g]').val(init.green);
	$('input[name=b]').val(init.blue).trigger('keyup');
});