new cbpScroller(document.getElementById("cbp-so-scroller")),jQuery(document).ready(function(){function o(o){o.preventDefault?o.preventDefault():o.returnValue=!1}$(window).load(function(){jQuery("#header-photo").delay(100).animate({opacity:"1","margin-top":"0"},1e3,"easeInOutCubic",function(){jQuery("#header h1").delay(-200).animate({opacity:"1","padding-top":"0"},600,"easeInOutCubic",function(){jQuery("#header p").animate({opacity:"1"},400,"easeInOutCubic")})})}),$(".nav a").on("click",function(){$("#my-nav").removeClass("in").addClass("collapse")}),$(document).scroll(function(){var o=$(document).scrollTop(),t=$("#header").outerHeight();o>=t-100?$(".navbar").addClass("minified"):$(".navbar").removeClass("minified"),$(".jumbotron .container").css({opacity:1-o/500}),o>=t-100?$(".scrolltotop").addClass("show-to-top"):$(".scrolltotop").removeClass("show-to-top")}),$(".navbar-nav li a").click(function(t){var e=$(this).attr("href");$("html, body").animate({scrollTop:$(e).offset().top},1200,"easeInOutCubic"),o(t)}),$("#header p a").click(function(t){var e=$(this).attr("href");$("html, body").animate({scrollTop:$(e).offset().top},1200,"easeInOutCubic"),o(t)}),$(".scrolltotop, .navbar-brand").click(function(t){$("html, body").animate({scrollTop:"0"},1200,"easeInOutCubic"),o(t)}),jQuery(function(){jQuery("#da-slider").cslider({bgincrement:0})}),jQuery("#portfolio-grid").mixitup({targetSelector:".portfolio-mix"}),$("#about .round-outline a").prettyPhoto(),$(".portfolio-item a").prettyPhoto()});