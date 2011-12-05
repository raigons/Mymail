/* Quando o documento estiver pronto (carregado) executar os códigos abaixo */
var inbox = new Array();
var spam  = new Array();
var enviados = new Array();
var rascunhos = new Array();
var arquivados = new Array();

$(document).ready(function(){
	    
	$('.sec').hide();
    $('#inbox').show();    
    carregaEmailInbox($('#inbox .emails'));    
	carregaEmailSpam($("#spam .emails"));
	
	//quando marcar email como spam
	$("div.spam").click(function(){
	    //define qual painel de mensagens está sendo manuseado
		var label = "#"+$(this).parent().parent().parent().attr("id");						
		var emailsToSpam = new Array();		
		var i = 0;	
		var emailsMarcados = $(label + " div.emails").find(":checkbox:checked");
		$.each(emailsMarcados, function(){			
			emailsToSpam.push($(this).parent().parent().attr("id"));
		});
		marcaComoSpam(label, emailsToSpam);		
	});
	
	//No painel de Spams, quando o usuário clicar no botão "Não é spam" ou "mover para inbox"
	$("div.nospam, div.moveinbox").click(function(){
		var label = "#"+$(this).parent().parent().parent().attr("id");		
		var emailsToInbox = new Array();
		var i = 0; 			
		var emailsMarcados = $(label+" div.emails").find(":checkbox:checked");
		$.each(emailsMarcados, function(){
			emailsToInbox.push($(this).parent().parent().attr("id"));
		});
		marcaComoInbox(label, emailsToInbox);
	});
	
	$("div.deletar").click(function(){
		var label = "#"+$(this).parent().parent().parent().attr("id");
		var emailsParaExclusao = new Array();
		var emailsSelecionados = $(label+" div.emails").find(":checkbox:checked");		
		$.each(emailsSelecionados, function(){
			emailsParaExclusao.push($(this).parent().parent().attr("id"));
		});						
		deletarEmail(label, emailsParaExclusao);
	});	
	
	$("div.arquivar").click(function(){
		var label = "#"+$(this).parent().parent().parent().attr("id");
		var emailsParaArquivar = new Array();
		var emailsSelecionados = $(label + " div.emails").find(":checkbox:checked");
		$.each(emailsSelecionados, function(){
			emailsParaArquivar.push($(this).parent().parent().attr("id"));
		});
		arquivarEmail(label, emailsParaArquivar);
	});
	
	//exclui uma mensagem que está sendo visualizada
	$("#email div.deletar").click(function(){
		var emailExclusao = new Array();
		//alert($("#contentmail").children("span.idEmail").attr("id"));
		label = "#"+$("#contentmail").children("span.idEmail").attr("labelEmail");
		emailExclusao.push($("#contentmail").children("span.idEmail").attr("id"));
		deletarEmail(label, emailExclusao);
		$("#email").hide();
		$(label).show();
		if(label == "#spam")
			exibirMensagens(spam);
		else if(label == "#inbox")
			exibirMensagens(inbox);
	});
	//move uma mensagem lida para o inbox
	$("#email div.moveinbox").click(function(){
		var emailInbox = new Array();		
		label = "#"+$("#contentmail").children("span.idEmail").attr("labelEmail");
		emailInbox.push($("#contentmail").children("span.idEmail").attr("id"));		
		marcaComoInbox(label, emailInbox);				
		$("#email").hide();
		$(label).show();
		if(label == "#spam")
			exibirMensagens(spam);
	});
/***************************************************************************************************/		

    /* Quando o usuário clicar em um link que contenha a classe escrever (class="escrever") */
    $('a.escrever').click(function(){
        $('#menu ul li.sel').removeClass('sel');  // Remove a classe sel do menu que está selecionado
        $(this).parents('li').addClass('sel'); // Adiciona a classe sel ao ítem do menu que foi clicado
        $('.sec').hide(); // Esconde todos os elementos contidos dentro do container
        $('#escrever').show(); // Exibe o conteúdo referente ao ítem que foi clicado
        return false; // Retorna falso para que o browser não carregue o link
    });
	
    /* Quando o usuário clicar em um link que contenha a classe inbox (class="inbox") */
    $('a.inbox').click(function(){
        var i = 0;
        $('#menu ul li.sel').removeClass('sel');
        $(this).parents('li').addClass('sel');
        $('.sec').hide();
        $('#inbox').show();
		exibirMensagens(inbox);
        return false;
    });
	
    /* Quando o usuário clicar em um link que contenha a classe enviados (class="enviados") */
    $('a.enviados').click(function(){
        $('#menu ul li.sel').removeClass('sel');
        $(this).parents('li').addClass('sel');
        $('.sec').hide();
        $('#enviados').show();
        return false;
    });
	
    /* Quando o usuário clicar em um link que contenha a classe rascunhos (class="rascunhos") */
    $('a.rascunhos').click(function(){
        $('#menu ul li.sel').removeClass('sel');
        $(this).parents('li').addClass('sel');
        $('.sec').hide();
        $('#rascunhos').show();
        return false;
    });
	
    /* Quando o usuário clicar em um link que contenha a classe todos (class="todos") */
    $('a.todos').click(function(){
        $('#menu ul li.sel').removeClass('sel');
        $(this).parents('li').addClass('sel');
        $('.sec').hide();
        $('#todos').show();
		exibirMensagens(inbox.concat(spam, arquivados));
        return false;
    });
	
    /* Quando o usuário clicar em um link que contenha a classe spam (class="spam") */
    $('a.spam').click(function(){		
        $('#menu ul li.sel').removeClass('sel');
        $(this).parents('li').addClass('sel');
        $('.sec').hide();
        $('#spam').show();
		exibirMensagens(spam);
        return false;
    });
/*****************************************************************************/	
	$('a.todosemails').click(function(){
		var label = "#"+$(this).parent().parent().parent().attr("id");
		$(label + " .emails").find(":checkbox").attr("checked", true);		
	});
	
	$('a.nenhum').click(function(){
		var label = "#"+$(this).parent().parent().parent().attr("id");
		$(label + " .emails").find(":checkbox").attr("checked", false);
	});
	
	$("a.naolidos").click(function(){		
		var label = "#"+$(this).parent().parent().parent().attr("id");		
		$(label + " .emails").find(":checkbox").attr("checked", false);//para desmarcar todos caso algum esteja marcado
		$(label + " .emails .naolido").find(":checkbox").attr("checked", true);		
	});
	
	$("a.lidos").click(function(){
		var label = "#"+$(this).parent().parent().parent().attr("id");	
		$(label + " .emails").find(":checkbox").attr("checked", false);		
		var emails = $(label + " .emails").find(":checkbox").parent().parent();		
		$.each(emails, function(i){								
			if(!$(this).hasClass("naolido")){
				$(this).find(":checkbox").attr("checked", true);
			}			
		});
	});
});