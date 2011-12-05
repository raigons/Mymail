$(document).ready(function(){

	/******************************/
	/*MANIPULAÇÃO DE DOM dentro de eventos*/
	var value;
	//mostra o que acontece alterando o atributo classe, que antes não aparecia
	//criar esta linha depois de mostrar que o primeiro live não exibirá nenhuma classe
	
	/*$("ul li:first").live('click', function(){
		$(this).attr("class", "fruta");
		alert("Agora sim temos a classe: "+$(this).attr("class"));
	});*/
	
	//usar para mostrar que o click não funcionará depois de adicionar/remover um elemento, nos manipuladores 
	/*$("ul li:first").live('click', function(){
		alert($(this).attr("class"));
	});*/
	
	/***************************/
	//eventos nos inputs
	$(".inputs").focus(function(){				
		if($(this).attr("id") != '1'){
			if($(this).val() == 'Digite seu texto aqui'){
				$(this).css("color", "blue");
				value = $(this).val();
				$(this).val('');	
			}	
		}
	}).blur(function(){
		if($(this).val() == ""){
			$(this).css("color", "black");
			$(this).val(value);
		}
	})//após manipular os inputs, fazer evento de keys	
	.keyup(function(){
		//alert($(this).val());
		//retirar texto
		if($(this).val() == 'ramon')
			$(this).val('');
	//mostrar o uso do parâmetro event
	}).keydown(function(event){
		//usa-se o keyCode para impedir que determinada letra seja digitada	
		if(event.keyCode == '59')//não deixa usar 'Ç'
			return false;
		//$(this).val(event.keyCode);
	});
	
	$("button#adiconaItemLista").click(function(){
		var novoItem = prompt("Digite um novo item para a lista");
		$("ul").prepend("<li class>"+novoItem+"</li>");
	});
	
	$("button#removerItemInicioLista").click(function(){
		var qtd = prompt("Quantos itens deseja remover");
		var i;
		for(i = 0; i < qtd; i++)
			$("ul li").eq(i).remove();
	});
		
		//mostrar com event e sem event
	$("button#removerItemFimLista").click(function(event){		
		var qtd = prompt("Quantos itens deseja remover");		
		var qtdItens = $("ul li").length;
		for(; qtd > 0; qtd--){			
			$("ul li").eq(qtdItens-1).remove();			
			qtdItens--;
		}
		alert('Agora você não pode mais excluir do fim. Pode tentar se quiser...');
		//permitir remover itens do fim apenas uma vez, mostrar as duas maneiras
		//$(this).unbind('click');
		$(this).unbind(event);
	});;
	
	$("form").bind('submit', function(){		
		$.each($(this).find(".inputs"), function(){
			$("ul").append("<li>"+$(this).val()+"</li>");
		});				
		return false;
	});
	
	/**
	* configurar mais de um atributo para um elemento
	* passar mais de um atributo para o "attr" e para o "css"
	* evento HOVER, com duas funções de parâmetro
           */
	var tamanhoFonte;
	var texto;
	$("ul li:nth-child(3)").click(function(){		
		alert("no início do evento temos\n id= "
			+$(this).attr('id')
			+ " e classe = " + $(this).attr("class")
		);				
		
		$(this).attr({
			"id": $(this).text(),
			"class": "carne", 			
		});
		//$(this).removeClass("fruta").addClass("carne");
		//a atribuição do valor da classe poderia ter sido feita com o método addClass
		
		alert("No fim do evento temos\n id= "
			+ $(this).attr('id')
			+ " e classe = " + $(this).attr("class")
		);
		$(this).unbind('click');
	}).hover(
		function(){	
			tamanhoFonte = $(this).css("font-size");			
			texto = $(this).text();
			//manipulador html
			$(this).html("Clique na UVA!");
			$(this).css({
				"font-size":"20px",
				"color": "blue", 
				"font-weight": "bold", 
				"cursor": "pointer"
			});
		},
		function(){
			$(this).html(texto);
			$(this).css({
				"font-size": tamanhoFonte,
				"color": "black",
				"font-weight":"normal",
				"cursor":"default"
			});
		}
	);

});