// ESTE SI FUNCIONA
$(document).ready(function(){
	$("textarea").keyup(function(){
		var maxCaracteres = 140;
		var $textoMostrar = $("textarea").val();
		var $caracteres = $textoMostrar.length;
		var $espacioLibre = maxCaracteres - $caracteres
		console.log($espacioLibre);
		console.log($caracteres);

		$("#contador").text($espacioLibre);


		//inicio
		if($espacioLibre > 0){
			$("button").removeAttr("disabled");
		}
		else{
			$("button").attr("disabled");
		}

		
		//cambio de contador
		if($caracteres >120 && $caracteres <=130){
			$("#contador").css("color", "red");
		}
		else if($caracteres >130 && $caracteres <=139){
			$("#contador").css("color", "blue");
		}
		else if($caracteres > 140){
			$("button").attr("disabled", "true");
			$("#contador").text($espacioLibre);	
			$("#contador").css("color", "black");
		}
		else{
			$("#contador").css("color", "black");
		}


		//agregar espacio al textarea
		if($caracteres%50===0){
			$("textarea").attr("row","3");
		}
		else{
			$("textarea").attr("row","2");
		}
		

		//imprimir tweet
		$("button").click(function(){
			$("#tweet").text($textoMostrar);
			var now = new Date();
			var outStr = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();
   			$("#tiempo").text(outStr);
		});
	});
});








