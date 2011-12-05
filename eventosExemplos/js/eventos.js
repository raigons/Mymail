$(document).ready(function(){
	//mostrar que após a remoção no início, não irá executar
	$("ul li:first").click(function(){
		alert("Texto = "+$(this).text());
		alert("clase = "+$(this).attr("class"));
	});	
	
	//mostrar como funciona o bind e o unbind
	$("ul li:last").bind('click', function(){
		alert($(this).attr("class"));
		//mostrar o evento unbind
		//$(this).unbind('click');
	});
	
	//apenas para o primeiro input
	$("#1").focus(function(){
		alert($(this).val());
	});
	/*.mouseover(function(){
		alert($(this).val());
	});*/
	
	
	
		
});