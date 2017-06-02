// ESTE SI FUNCIONA
$(document).ready(function(){
	$("textarea").keyup(function(){
		var $textoMostrar = $("textarea").val();
		var caracteres = $textoMostrar.length;
		console.log(caracteres);
		if(caracteres != 0){
			$("button").removeAttr("disabled");
		}
		else {
			$("button").attr("disabled");
		}
		$("button").click(function(){
			$("p").text($textoMostrar);
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