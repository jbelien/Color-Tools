/* ***********************************************
 *
 */
function rgb2cmy(rgb) {
	var r = ( rgb[0] / 255 ), g = ( rgb[1] / 255 ), b = ( rgb[2] / 255 );

	var c = 1 - r;
	var m = 1 - g;
	var y = 1 - b;

	return [Math.floor(c * 100), Math.floor(m * 100), Math.floor(y * 100)];
}
/* ***********************************************
 *
 */
function cmy2rgb(cmy) {
	var c = ( cmy[0] / 100 ), m = ( cmy[1] / 100 ), y = ( cmy[2] / 100 );

	var r = 1 - c;
	var g = 1 - m;
	var b = 1 - y;

	return [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)];
}

/* ***********************************************
 * http://www.rapidtables.com/convert/color/rgb-to-cmyk.htm
 */
function rgb2cmyk(rgb) {
	var r = ( rgb[0] / 255 ), g = ( rgb[1] / 255 ), b = ( rgb[2] / 255 );

	var k = ( 1 - Math.max( r, g, b ) );
	var c = ( 1 - r - k ) / ( 1 - k );
	var m = ( 1 - g - k ) / ( 1 - k );
	var y = ( 1 - b - k ) / ( 1 - k );

	return [Math.floor(c * 100), Math.floor(m * 100), Math.floor(y * 100), Math.floor(k * 100)];
}
/* ***********************************************
 * http://www.rapidtables.com/convert/color/cmyk-to-rgb.htm
 */
function cmyk2rgb(cmyk) {
	var c = ( cmyk[0] / 100 ), m = ( cmyk[1] / 100 ), y = ( cmyk[2] / 100 ), k = ( cmyk[3] / 100 );

	var r = ( 1 - c ) * ( 1 - k );
	var g = ( 1 - m ) * ( 1 - k );
	var b = ( 1 - y ) * ( 1 - k );

	return [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)];
}

/* ***********************************************
 * http://www.rapidtables.com/convert/color/rgb-to-hsl.htm
 */
function rgb2hsl(rgb) {
	var r = ( rgb[0] / 255 ), g = ( rgb[1] / 255 ), b = ( rgb[2] / 255 );

	var cmin = Math.min( r, g, b );
	var cmax = Math.max( r, g, b );
	var d = cmax - cmin;

	if ( d == 0 ) {
		var h = 0;
	} else if ( cmax == r ) {
		var h = 60 * ( ( ( g - b ) / d ) % 6 )
	} else if ( cmax == g ) {
		var h = 60 * ( ( ( b - r ) / d ) + 2 );
	} else if ( cmax == b ) {
		var h = 60 * ( ( ( r - g ) / d ) + 4 );
	}

	var l = ( cmin + cmax ) / 2;

	if ( d == 0 ) {
		var s = 0;
	} else {
		var s = d / ( 1 - Math.abs( ( 2 * l ) - 1 ) );
	}

	return [Math.floor(h), Math.floor(s * 100), Math.floor(l * 100)];
}
/* ***********************************************
 * http://www.rapidtables.com/convert/color/cmyk-to-rgb.htm
 */
function hsl2rgb(hsl) {
	var h = hsl[0]; while (h < 0) h += 360; while (h > 360) h-= 360;
	var s = ( hsl[1] / 100 ), l = ( hsl[2] / 100 );

	var c = ( 1 - Math.abs( ( 2 * l ) - 1 ) ) * s;
	var x = c * ( 1 - Math.abs( ( ( h / 60 ) % 2 ) - 1 ) );
	var m = l - ( c / 2 );

	if (h >=   0 && h <  60) {
		var r = ( c + m ), g = ( x + m ), b = ( 0 + m )
	} else if (h >=  60 && h < 120) {
		var r = ( x + m ), g = ( c + m ), b = ( 0 + m )
	} else if (h >= 120 && h < 180) {
		var r = ( 0 + m ), g = ( c + m ), b = ( x + m )
	} else if (h >= 180 && h < 240) {
		var r = ( 0 + m ), g = ( x + m ), b = ( c + m )
	} else if (h >= 240 && h < 300) {
		var r = ( x + m ), g = ( 0 + m ), b = ( c + m )
	} else if (h >= 300 && h < 360) {
		var r = ( c + m ), g = ( 0 + m ), b = ( x + m )
	}

	return [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)];
}

/* ***********************************************
 *
 */
function rgb2hex(rgb) {
	var hex = [
		rgb[0].toString(16),
		rgb[1].toString(16),
		rgb[2].toString(16)
	];

	if (hex[0].length < 2) hex[0] = '0'+hex[0];
	if (hex[1].length < 2) hex[1] = '0'+hex[1];
	if (hex[2].length < 2) hex[2] = '0'+hex[2];

	return '#'+hex.join('');
}
/* ***********************************************
 *
 */
function hex2rgb(hex) {
	var regex_short = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(regex_short, function(m, r, g, b) { return r + r + g + g + b + b; });

	var regex_long = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
	var result = regex_long.exec(hex);
	return result ? [ parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16) ] : [0, 0, 0];
}

/* ***********************************************
 *
 */
function rgb2dec(rgb) {
	return rgb[0] + ( rgb[1] * 256 ) + ( rgb[2] * 256 * 256 );
}
/* ***********************************************
 *
 */
function dec2rgb(dec) {
	var r = Math.floor( dec ) % 256;
	var g = Math.floor( dec / 256 ) % 256;
	var b = Math.floor( dec / 256 / 256 ) % 256;

	return [r, g, b];
}
