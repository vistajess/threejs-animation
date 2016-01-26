/*
 * jQuery firefly plugin 0.1
 *
 * http://docs.jquery.com/Plugins/EnergySaver
 *
 * Copyright (c) 2010 Dharmveer Motyar
 * http://motyar.blogspot.com
 * http://motyar.com
 *
 * $Id$
 * 
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Creates a firefly effect.
 *
 * @example $.firefly();
 *
 * @name firefly
 * @type jQuery
 * @cat Plugins/firefly
 */

(function($) { 
/*------------------------------------------------------
	Plugin defaults
------------------------------------------------------*/
	var defaults = {
		images : [
			'img/spark.png',
			'img/spark2.png',
			'img/spark3.png', 
			'img/spark4.png', 
			'img/spark5.png'
		],
		total : 80
	};
	$.firefly = function(settings) {
		$.firefly.settings = $.extend({}, defaults, settings);
		if($.firefly.preloadImages()){
			for (i = 0; i < $.firefly.settings.total; i++){
				$.firefly.fly($.firefly.create($.firefly.settings.images[$.firefly.random(($.firefly.settings.images).length)]));
			}
		}
		return;
	};
	
/*------------------------------------------------------
	Public Functions
------------------------------------------------------*/
	$.firefly.create = function(img){
		spark = $('<img>').attr({'src' : img}).hide();
		$(document.body).append(spark);
		return spark.css({
			'position':'absolute',
			'z-index': $.firefly.random(20),
			top: $.firefly.random(($(window).height()-150)),	//offsets
			left:  $.firefly.random(($(window).width()-150)) //offsets
		}).show();		
	}

	// Changes location based on randome value
	$.firefly.fly = function(sp) {
	  $(sp).animate({
		  top: $.firefly.random(($(window).height()-150)),	//offsets
		  left: $.firefly.random(($(window).width()-150))
	  }, (($.firefly.random(10) + 5) * 1100),function(){  $.firefly.fly(sp) } );
	};

	// Preloads images
	$.firefly.preloadImages = function() {
		var preloads = new Object();
		for (i = 0; i < ($.firefly.settings.images).length; i++){  
				preloads[i] = new Image(); preloads[i].src =  $.firefly.settings.images[i];
			}
		return true;
	}

	// Random number for coord
	$.firefly.random = function(max) {
		return Math.ceil(Math.random() * max) - 1;
	}

})(jQuery);