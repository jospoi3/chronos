/*
----------------------------------------------------------------
Module: Chronos.js
Description: jQuery pour le projet Chronos
Auteur: Thundra
Version: 1.0.0
Dernière modification: 295 mai 2015
----------------------------------------------------------------
*/

function checkWidthAndResize() {
	var windowWidth = $( window ).width();
	if(windowWidth < 496) {location.reload();} /* was 650 */
}
	
$(window).resize(function(){
	checkWidthAndResize();
});

// navL1 navigation
$('.navL1 li').click(
	function () {
		
		$('ul.navL1 li').removeClass('active');
		$(this).addClass('active');
		
		document.getElementsByClassName('main-content').innerHTML = '';
		
		var target = $(this).find('a').attr('href');
		
		$('.L1-section').hide();

		if(target == 'literary-themes') {

			$('#' + target).show();
			$('.inner-btn').removeClass('active');
			$(".timeline-btn[rel='pre-colonial-africa'] .inner-btn").addClass('active');

			$.get( "content/pre-colonial-africa.html", function( data ) {
				$( ".main-content" ).html( data );
			});
					
			setTimeout(
				function() {
				
					$.getScript('js/chronos-content.js');
					
				}, 500
			);	
	
		} else {
			$('#' + target).show();
		}

		return false;
			
	}
);

// mobile navL1 navigation
$('.navL1-mobile select').on('change', function() {
	
	var target = $(this).find(":selected").val();
		
	$('.L1-section').hide();
	$('.mobile-content ').hide();
	$('#' + target).show();
	
	return false;
  	
});
	
$('.timeline-btn').click(
	function () {
				
		var target = $(this).attr('rel');
		var windowWidth = $( window ).width();
		
		$('.inner-btn').removeClass('active');
		$(this).find('.inner-btn').addClass('active');
		
		// Desktop view
		if(windowWidth > 496) { /* was 650 */
			
			document.getElementsByClassName('main-content').innerHTML = '';
			
			$.get( "content/" + target + ".html", function( data ) {
				$( ".main-content" ).html( data );
			});
			
			setTimeout(
				function() {
					$.getScript('js/chronos-content.js');
					$('.navL2:first-child').addClass('active');
				}, 500
			);	
			
					
		// Mobile view	
		} else {

			if( $('#' + target).css('display') !== 'none') {
				// we close current open div
				$('#' + target).hide();
				$(this).find('.inner-btn').removeClass('active');
			
			} else {
				// close all content divs
				$('.mobile-content').hide();
				
				$.get( "content/" + target + ".html", function( data ) {
					
					$('#' + target).html( data );
				});

				// open target div
				$('#' + target).show();
				
			}

			setTimeout(
				function() {
					$.getScript('js/chronos-content.js');
				}, 500
			);
		}		
	}
);

// follow mouse position to determine tooltip x position
$('.tooltip, .tooltip2').mousemove(
	function(e) {

		var divOffset = $(this).offset();
		var relX = e.pageX - divOffset.left - 60;
		
		$("#probe001").html(relX);
		
		$(this).find('span').css('left', relX + 'px');
	}
);

// draggable overlay window
$(".fancybox").fancybox({ afterShow: function() { $( ".fancybox-wrap" ).draggable();} });
	
$('.fancybox').click(
	function (e) {
		
		var windowWidth = $( window ).width();
		
		if(windowWidth < 767) {
		
			e.preventDefault();

			return false;
		}	
});




// links in site map section
$('.sitemap-link').click(
	function (e) {
			
		e.preventDefault();
		
		var target1 = $(this).attr('rel');
		var target2 = $(this).attr('href');
		
		$('#sitemap').hide();
		$('#literary-themes').show();
		
		$('.inner-btn').removeClass('active');
		$('[rel=' + target1 + ']').find('.inner-btn').addClass('active');

		$( '.main-content' ).empty();
		
		$( '.main-content' ).load( "content/" + target1 + ".html");
		$.get( "content/" + target1 + ".html", function( data ) {
			$( ".main-content" ).html( data );
		});
		
		setTimeout(
			function() {
				$.getScript('js/chronos-content.js');
				
				$('.navL2:first-child').addClass('active');
				
				$('.navL2').removeClass('active');
				$('#' + target2).addClass('active');
				
				$('.content-section-wrapper').hide();
				$('#' + target2).next('.content-section-wrapper').show();	
		
			}, 500
		 );

		// change navL1 active menu item
		$('.navL1 li').removeClass('active');
		$('.navL1 li:nth-child(2)').addClass('active');

		return false;		
	}
);