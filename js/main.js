$(document).ready(function(){
	$("textarea").change(function(){
		$("button").click(function(){
			var $textoMostrar = $("textarea").val();
			$("p").append($textoMostrar);
		});
	});
});