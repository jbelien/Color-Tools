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

	$('input[name=r], input[name=g], input[name=b]').on('keyup', function(event) {
		var r = parseInt($('input[name=r]').val()), g = parseInt($('input[name=g]').val()), b = parseInt($('input[name=b]').val());
		setRGB([r, g, b], event.target);
	});
	$('input[name=c], input[name=m], input[name=y]').on('keyup', function(event) {
		var c = parseInt($('input[name=c]').val()), m = parseInt($('input[name=m]').val()), y = parseInt($('input[name=y]').val());
		setRGB(cmy2rgb([c, m, y]), event.target);
	});
	$('input[name=cc], input[name=mm], input[name=yy], input[name=k]').on('keyup', function(event) {
		var c = parseInt($('input[name=cc]').val()), m = parseInt($('input[name=mm]').val()), y = parseInt($('input[name=yy]').val()), k = parseInt($('input[name=k]').val());
		setRGB(cmyk2rgb([c, m, y, k]), event.target);
	});
	$('input[name=h], input[name=s], input[name=l]').on('keyup', function(event) {
		var h = parseInt($('input[name=h]').val()), s = parseInt($('input[name=s]').val()), l = parseInt($('input[name=l]').val());
		setRGB(hsl2rgb([h, s, l]), event.target);
	});
	$('input[name=hex]').on('keyup', function(event) {
		var hex = $('input[name=hex]').val();
		setRGB(hex2rgb(hex), event.target);
	});
	$('input[name=dec]').on('keyup', function(event) {
		var dec = $('input[name=dec]').val();
		setRGB(dec2rgb(dec), event.target);
	});

	setRGB([ init.red, init.green, init.blue ])
});

function setRGB(rgb, target) {
	$('input[name=r]').val(rgb[0]);
	$('input[name=g]').val(rgb[1]);
	$('input[name=b]').val(rgb[2]);

	if (!$(target).is('input[name=c], input[name=m], input[name=y]')) {
		var cmy = rgb2cmy(rgb);
		$('input[name=c]').val(cmy[0]);
		$('input[name=m]').val(cmy[1]);
		$('input[name=y]').val(cmy[2]);
	}

	if (!$(target).is('input[name=cc], input[name=mm], input[name=yy], input[name=k]')) {
		var cmyk = rgb2cmyk(rgb);
		$('input[name=cc]').val(cmyk[0]);
		$('input[name=mm]').val(cmyk[1]);
		$('input[name=yy]').val(cmyk[2]);
		$('input[name=k]' ).val(cmyk[3]);
	}

	if (!$(target).is('input[name=h], input[name=s], input[name=l]')) {
		var hsl = rgb2hsl(rgb);
		$('input[name=h]').val(hsl[0]);
		$('input[name=s]').val(hsl[1]);
		$('input[name=l]').val(hsl[2]);
	}

	var hex = rgb2hex(rgb); $('#preview').css('background-color', hex);
	if (!$(target).is('input[name=hex]')) {
		$('input[name=hex]').val(hex);
	}

	if (!$(target).is('input[name=dec]')) {
		var dec = rgb2dec(rgb);
		$('input[name=dec]').val(dec);
	}
}