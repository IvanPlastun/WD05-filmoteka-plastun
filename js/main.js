$(document).ready(function() {
	
    $(".left-panel").customScrollbar({preventDefaultScroll: true});
    
'use strict';
;( function ( document, window, index )
{
	var inputs = document.querySelectorAll( '.inputfile' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e )
		{
			var fileName = '',
				desctiprionFiles = '',
				numberOfFiles = this.files.length,
				remainSot = Math.floor(numberOfFiles / 100) % 10,
				remainDec = Math.floor(numberOfFiles / 10) % 10,
				remain = numberOfFiles % 10;

			if(this.files && numberOfFiles > 1) { 
				if(numberOfFiles < 10) {
					switch(remain) {
						case 2:
							desctiprionFiles = ' файла выбрано';
						break;
						case 3:
							desctiprionFiles = ' файла выбрано';
						break;
						case 4:
							desctiprionFiles = ' файла выбрано';
						break;
						case 5:
							desctiprionFiles = ' файлов выбрано';
						break;
						case 6:
							desctiprionFiles = ' файлов выбрано';
						break;
						case 7:
							desctiprionFiles = ' файлов выбрано';
						break;
						case 8:
							desctiprionFiles = ' файлов выбрано';
						break;
						case 9:
							desctiprionFiles = ' файлов выбрано';
						break;
					}
				} else if((numberOfFiles >= 10 && numberOfFiles < 20) || (remainSot >= 1 && remainDec == 1 && remain >= 0)) {
					switch(remain) {
						case 0 :
							desctiprionFiles = ' файлов выбрано';
						break;
						case 1:
							desctiprionFiles = ' файлов выбрано';
						break;
						case 2:
							desctiprionFiles = ' файлов выбрано';
						break;
						case 3:
							desctiprionFiles = ' файлов выбрано';
						break;
						case 4:
							desctiprionFiles = ' файлов выбрано';
						break;
						case 5:
							desctiprionFiles = ' файлов выбрано';
						break;
						case 6:
							desctiprionFiles = ' файлов выбрано';
						break;
						case 7:
							desctiprionFiles = ' файлов выбрано';
						break;
						case 8:
							desctiprionFiles = ' файлов выбрано';
						break;
						case 9:
							desctiprionFiles = ' файлов выбрано';
						break;
					}
				} else {
					switch(remain) {
						case 0:
							desctiprionFiles = ' файлов выбрано';
						break;
						case 1:
							desctiprionFiles = ' файл выбран';
						break;
						case 2:
							desctiprionFiles = ' файла выбрано';
						break;
						case 3:
							desctiprionFiles = ' файла выбрано';
						break;
						case 4:
							desctiprionFiles = ' файла выбрано';
						break;
						case 5:
							desctiprionFiles = ' файлов выбрано';
						break;
						case 6:
							desctiprionFiles = ' файлов выбрано';
						break;
						case 7:
							desctiprionFiles = ' файлов выбрано';
						break;
						case 8:
							desctiprionFiles = ' файлов выбрано';
						break;
						case 9:
							desctiprionFiles = ' файлов выбрано';
						break;
					}
				}
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', numberOfFiles + desctiprionFiles);
			}
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName ) {

				if ( label.firstChild.nodeType === Node.ELEMENT_NODE ) {
					label.querySelector( 'span' ).innerHTML = fileName;
				} else {
					label.nextElementSibling.innerHTML = fileName;
				}
			}
			else
				label.innerHTML = labelVal;
		});

		// Firefox bug fix
		input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
		input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
	});
}( document, window, 0 ));

});
