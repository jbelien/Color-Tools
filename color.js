/* ***********************************************
 *
 */
function rgb2cmy(rgb) {
	var r = ( rgb[0] / 255 ), g = ( rgb[1] / 255 ), b = ( rgb[2] / 255 );

	var c = 1 - r;
	var m = 1 - g;
	var y = 1 - b;

	return [Math.round(c * 100), Math.round(m * 100), Math.round(y * 100)];
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

	return [Math.round(c * 100), Math.round(m * 100), Math.round(y * 100), Math.round(k * 100)];
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

	return [h, Math.round(s * 100), Math.round(l * 100)];
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
function rgb2dec(rgb) {
	return rgb[0] + ( rgb[1] * 256 ) + ( rgb[2] * 256 * 256 );
}
