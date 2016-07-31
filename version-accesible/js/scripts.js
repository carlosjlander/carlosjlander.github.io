// JavaScript Document
document.addEventListener("DOMContentLoaded", Init);

function Init(){
	var sect,offsetUp;
	
	//Slow Scroll
	$('#menu ul li a').click(function(e){
		e.preventDefault();
		wordLink = $(this).text();
		sect 	 = $(this).attr('href');//section to view
		IdOpc	 = $(this).attr('id');		
		var top  = ($(sect).offset().top);
		
		$('html,body').animate(
			{scrollTop:top},
			'slow',function(){
				$('#menu ul li a').removeClass();
				$('#'+IdOpc).attr('class','linkActive');
				
				if($(window).width() < 620)
					$("#menu ul li").hide("fast");
					
				if(IdOpc != 'menu_opc')
					$('#menu_title').text(wordLink);
			});
		//return;
	});
	
	var IniPoint = new Waypoint({
		element: document.getElementById('header'),
		handler:function(){
			var wordTitle = $("#ini_link").text(); 
			
			$('#menu ul li a').removeClass();
			$("#ini_link").attr('class','linkActive');
			$('#menu_title').text(wordTitle);
		
		}
	});
	
	var ResPoint = new Waypoint({
		element: document.getElementById('resumen'),
		handler:function(){
			var wordTitle = $("#res_link").text(); 
			
			$('#menu ul li a').removeClass();
			$("#res_link").attr('class','linkActive');
			$('#menu_title').text(wordTitle);
		}
	});
	
	var ExpPoint = new Waypoint({
		element: document.getElementById('profesional'),
		handler:function(){
			var wordTitle = $("#exp_link").text(); 
			
			$('#menu ul li a').removeClass();
			$("#exp_link").attr('class','linkActive');
			$('#menu_title').text(wordTitle);
		}
	});
	
	var EstPoint = new Waypoint({
		element: document.getElementById('estudios'),
		handler:function(direction){
			var wordTitle = $("#est_link").text(); 
			
			$('#menu ul li a').removeClass();
			$("#est_link").attr('class','linkActive');
			$('#menu_title').text(wordTitle);
		},
	});
	
	var Socpoint = new Waypoint({
		element: document.getElementById('social'),
		handler:function(direction){
			var wordTitle = $("#per_link").text(); 
			
			$('#menu ul li a').removeClass();
			$("#per_link").attr('class','linkActive');
			$('#menu_title').text(wordTitle);
		},
	});
	
	var Recpoint = new Waypoint({
		element: document.getElementById('util'),
		handler:function(direction){
			var wordTitle = $("#rec_link").text(); 
			
			$('#menu ul li a').removeClass();
			$("#rec_link").attr('class','linkActive');
			$('#menu_title').text(wordTitle);
		},
	});
	
	//Menu Fixed
	$(window).scroll(function(){
		if(window.pageYOffset >= 310)
		{
			document.getElementById('menu').className = 'navOpc';
			//$("#menu").css({"position":"fixed","top":"0"});
		}
		else
		{
			document.getElementById('menu').className = 'navOrig';
		}
	});
	
	$("#menu_link").click(function(){
		$("#menu ul li").toggle("fast");
		
		var propiedad = 	$("#ulMenu").attr('aria-expanded');
		if(propiedad == 'false')
			$("#ulMenu").attr('aria-expanded','true');
		else if(propiedad == 'true')
			$("#ulMenu").attr('aria-expanded','false');
	})
	
	$("#menu_link").keypress(function(){
		$("#menu ul li").toggle("fast");
		
		var propiedad = 	$("#ulMenu").attr('aria-expanded');
		if(propiedad == 'false')
			$("#ulMenu").attr('aria-expanded','true');
		else if(propiedad == 'true')
			$("#ulMenu").attr('aria-expanded','false');
	})
	
}