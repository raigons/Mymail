function carregaEmailInbox(objetoDOM){
    //busca no arquivo php, no servidor, o json que corresponde às mensagens no inbox
    $.get("php/inbox.php", function(json){
        var html = "";
        $(json).each(function(i){
            html += constroiHTML(json, i);
            inbox.push(constroiHTML(json, i));
        });
        objetoDOM.append(html); //adiciona no objeto DOM passado por parametro o conteudo de html.
        if(objetoDOM.parent().attr('id') == 'inbox')
            $("a.inbox").append('(' + objetoDOM.children('div.naolido').length + ')');
    }, 'json');
}	
function carregaEmailSpam(objetoDOM){
	$.get("php/spam.php", function(json){
		var html = "";
		$(json).each(function(i){
			html += constroiHTML(json, i);
			spam.push(constroiHTML(json,i));
		});
		objetoDOM.append(html);
		if(objetoDOM.parent().attr('id') == 'spam')
			$("a.spam").append("(" + objetoDOM.children("div.naolido").length + ")");
	}, 'json');
}
//apenas reescreve o menu lateral, adicionando uma indicação se existem mensagens não lidas
function reescreverMenu(label, emails){
    var text; 	
	if(emails.length > 0)
		text = "(" + emails.length + ")";
	else
		text = "";
	switch(label){
		case '#inbox': 			
			text = "Inbox "+text;
		break;
		case '#spam':
			text = "Spam "+text;
		break;
	}
	label = label.replace("#",".");
	$("a"+label).empty().append(text);	
}
//à partir do JSON retornado do servidor, monta um html da mensagem para inserir na tela
function constroiHTML(json, i){
    var html = '';
    if(!json[i].lido)
        html += '<div class="email naolido" id="mail' + json[i].id + '">';
    else
        html += '<div class="email" id="mail' + json[i].id + '">\n';
    html += 	'<div class="grippy"></div>\n';
    html += 	'<div class="selectmail"><input type="checkbox" /></div>\n';
    html += 	'<div class="from">' + json[i].from + '	</div>\n';
    html += 	'<div class="excerpt"><span>' + json[i].titulo + ' - <em>' + json[i].mensagem + '</em></span></div>\n';
    html += 	'<div class="date">' + json[i].data + '</div>\n';
    html += '</div>';
    return html;
}
//Recebe o array de mensagens e monta um HTML com as tags armazenadas neste vetor
function constroiHTMLDoArray(array){	
	var html = "";
	for(i in array){		
		html += array[i];
	}
	return html;
}