/*
----------------------------------------------------------------
Module: Chronos.js
Description: jQuery pour le projet Chronos
Auteur: Thundra
Version: 1.0.0
Dernière modification: 295 mai 2015
----------------------------------------------------------------
*/

$( document ).ready(function() {

	$('.navL2').click(
		function () {

			if( $( window ).width() > 496 ) { /* was 650 */
				if( $(this).next('.content-section-wrapper').css('display') !== 'none' && !$(this).hasClass("active") ) {
		
					$(this).removeClass('active');
					$('.content-section-wrapper').hide();
					
				} else {
				
					$('.navL2').removeClass('active');
					$(this).addClass('active');
				
					$('.content-section-wrapper').hide();
					$(this).next('.content-section-wrapper').show();	
				}

			} else {
				// we close open div only if there is more than 1 element at same level
				if( $(this).next('.content-section-wrapper').css('display') !== 'none') {
					// we close current open div
					$(this).removeClass('active');

					$('.content-section-wrapper').hide();
			
				} else {
				
					$('.navL2').removeClass('active');
					$(this).addClass('active');
				
					$('.content-section-wrapper').hide();
					$(this).next('.content-section-wrapper').show();	
				}

			}
			
								
			return false;
		}
	);
	
	$('.sub-content-link').click(
		function (e) {
			e.preventDefault();
	
			var target = '#' + $(this).attr('href');
			
			document.getElementsByClassName('content-wrapper').innerHTML = '';
	
			// breadcrumb making
			var bc_first_segment = $('.content-wrapper').attr('title');			
			var bc_second_segment = $(this).closest('.content-section-wrapper').prev('.navL2').html();
			var second_level_target = $(this).closest('.content-section-wrapper').attr('id');
			var bc_second_link = '<a href="#" data="' + second_level_target + '" class="sub-content-back-btn">' + bc_second_segment + '</a>';
			var bc_third_segment = $(this).html();
				
			var windowWidth = $(window).width();
			
			if(windowWidth > 767) {
				
				// render breadcrumb for big and medium screens, but don't show now !
				$('.breadcrumb').html( bc_first_segment + ' <span class="crumbspan"><<</span> ' + bc_second_link + ' <span class="crumbspan"><<</span> ' + bc_third_segment);
				
			
			} else {
				
				// render breadcrumb for small screens but don't show now
				$('.breadcrumb').html( ' << ' +bc_second_link);
			
			}
			

			// hide navL2 and contents
			$('.navL2').hide();
			$('.content-section-wrapper').hide();
			
			$(target).show();
			
			// show breadcrumb with slideDown FX
			setTimeout(
				function() {
					
					$('.breadcrumb').slideDown();				
						
				}, 100
			);	

			return false;
		}
	);
	
	$('.breadcrumb').click(
		function () {
			// .sub-content-back-btn is rendered when breadcrumb link is in previous function
			var targetToShow = '#' + $(this).find('.sub-content-back-btn').attr('data');
			
			$('.sub-content').hide();
			$('.breadcrumb').hide();
			$('.navL2').show();
			$(targetToShow).show();
			
			return false;
		}
	);
	
	$('.pagination-link').click(
		function (e) {
			e.preventDefault();

			var target = '#' + $(this).attr('href');
			
			document.getElementsByClassName('content-wrapper').innerHTML = '';
			
			// breadcrumb making
			var bc_first_segment = $('.content-wrapper').attr('title');			
			var bc_second_segment = $(this).parent().attr('title');
			var second_level_target = $(this).parent().attr('data');
			var bc_second_link = '<a href="#" data="' + second_level_target + '" class="sub-content-back-btn">' + bc_second_segment + '</a>';
			var bc_third_segment = $(this).attr('title');
			
			var windowWidth = $(window).width();
			
			if(windowWidth > 767) {
				
				// render breadcrumb for big and medium screens, but don't show now !
				$('.breadcrumb').html( bc_first_segment + ' << ' + bc_second_link + ' << ' + bc_third_segment);
			
			
			} else {
				
				// render breadcrumb for small screens but don't show now
				$('.breadcrumb').html( ' << ' + bc_second_link);
			
			}

			// hide navL2 and contents
			$('.sub-content').hide();
			
			$(target).show();
			
			// show breadcrumb with slideDown FX
			setTimeout(
				function() {
					
					$('.breadcrumb').slideDown();				
						
				}, 100
			);	
			
			return false;
		}
	);
	
	$('.fancybox').click(
		function (e) {
		
			var windowWidth = $( window ).width();
		
			if(windowWidth < 767) {
		
				e.preventDefault();

				return false;
			}	
	});
	
	$('.ext_link').hover(
		function () {
			$('.ext_link_icon').css({'background-position':'-25px 0', 'margin-left':'3px', 'margin-right':'3px'});
		}, 
		function () {
			$('.ext_link_icon').css({'background-position':'0 0', 'margin-left':'0px', 'margin-right':'6px'});
		}
	);
		
});