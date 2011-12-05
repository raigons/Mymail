$(document).ready(function(){
	var $novoItem;
	function adicionaItem(){		
		$("ul").append("<li style='color: red; font-weight: bold'>ramon</li>");
		$novoItem = $("ul li:last");
	}
	function removerEstilo(){
		$novoItem.removeAttr('style');
	}
	//depois de 2 segundos, adicionar o ramon
	window.setTimeout(adicionaItem, 2000);	
	
	//depois de 4 segundos, remover o estilo do novo elemento
	window.setTimeout(removerEstilo, 4000);
});