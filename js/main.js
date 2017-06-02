

// ESTE SI FUNCIONA
$(document).ready(function(){
	$("textarea").keyup(function(){
		var maxCaracteres = 140;
		var $textoMostrar = $("textarea").val();
		var $caracteres = $textoMostrar.length;
		var $espacioLibre = maxCaracteres - $caracteres
		console.log($espacioLibre);
		console.log($caracteres);

		$("#contador").text($caracteres);


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
		

		//imprimir tweet
		$("button").click(function(){
			$("#tweet").text($textoMostrar);
		});
	});
});















	




// $(document).ready(function(){
// 	$("textarea").change(function(){
// 		var $caracteres = $("textarea").val();
// 		console.log($caracteres);
// 		var $numeroCaracteres = Number($caracteres.length);
// 		console.log($numeroCaracteres);

// 		if($numeroCaracteres < 140){
// 			$("button").attr("disable");
// 		}
// 		else if($numeroCaracteres>=120){
// 			$("button").addClass("btn120");
// 		}
// 		else if($numeroCaracteres>=130 && $numeroCaracteres<140){
// 			$("button").addClass("btn130");
// 		}
// 	});
// });