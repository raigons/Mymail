function carregaEmailInbox(objetoDOM){		
    //busca no arquivo php, no servidor, o json que corresponde às mensagens no inbox    
    $.get("php/inbox.php", function(json){        
        inbox = json;        				
        exibirMensagens(inbox); //como, por padrão,  a primeira 'pagina' a carregar é a INBOX, exibe a mensagen nesta função				
		reescreveMenu(inbox, objetoDOM.parent().attr("id"));
    }, 'json');
}

function exibirMensagens(json) {
    html = "";
    $.each(json, function(i, msg){
	    if(!msg.lido)
	        html += '<div class="email naolido" id="mail' + msg.id + '">';
	    else
	        html += '<div class="email" id="mail' + msg.id + '">\n';
	    html += 	'<div class="grippy"></div>\n';
	    html += 	'<div class="selectmail"><input type="checkbox" /></div>\n';
	    html += 	'<div class="from">' + msg.from + '	</div>\n';
	    html += 	'<div class="excerpt"><span>' + msg.titulo + ' - <em>' + msg.mensagem + '</em></span></div>\n';
	    html += 	'<div class="date">' + msg.data + '</div>\n';
	    html += '</div>';
    });      
    $('.sec:visible .emails').html(html);
}

function exibeEmail(idEmail, json, label){
	html = "";
	$.each(json, function(i, msg){
		if(msg.id == idEmail){
			html += "<span class='idEmail' style='display: none' id='"+msg.id+"' labelEmail='"+label+"'/>"
			html += "<h1>" + msg.titulo + "</h1>";
			html += "<div class='body'>";
			html += 	"<div>";
			html += 		"<div class='remetente'>De <strong>" + msg.from + "</strong>";			
			html +=  	"</div>";
			html += 	"<div class='message'>";
			html += 		"<p>" + msg.mensagem + "</p>";
			html += 	"</div>";
			html += "</div>";
			msg.lido = true;			
			return false; //para parar o loop quando a mensagem for encontrada
		}		
	});
	$('div#contentmail').html(html);
}

function carregaEmailSpam(objetoDOM){
	$.get("php/spam.php", function(json){				
		spam = json;		
		reescreveMenu(spam, objetoDOM.parent().attr("id"));	
	}, 'json');
}

//usada se or marcar email como não lido ou lido
function setStatus(msgSelecionadas, msgs, status){
	var id;
	var ld;
	
	if(status == "naolido")
		ld = false; 
	else if(status == "lido")
		ld = true;
	$.each(msgSelecionadas, function(i){
		id = $(this).attr("id").replace("mail", "");		
		$.each(msgs, function(j, msg){
			if(msg.id == id){				
				msg.lido = ld;
			}
		});
	});
}

//utilizada para modificar o Menu de acordo com o vetor de objetos
function reescreveMenu(json, label){
	var qtdNaoLido = 0;
	$.each(json, function(i, msg){
		if(!msg.lido){
			qtdNaoLido++;
		}
	});
	var text = "";
	if(qtdNaoLido > 0)
		text = "("+qtdNaoLido+")";	
	switch(label){
		case "inbox": text = "Inbox "+text; break;
		case "spam" : text = "Spam "+text;  break;
	}
	$("a."+label).text(text);
}
