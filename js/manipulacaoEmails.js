//usada no "dragg"
function trocarEmailDeLabel(label, email){
	if(label == "inbox"){
		marcaComoSpam("#"+label, email);
	}else if(label == "spam"){
		marcaComoInbox("#"+label, email);
	}
}

function marcaComoSpam(label, emailsToSpam){		
	switch(label){
		case '#inbox': 
			removeEmailsSelecionados(inbox, emailsToSpam, spam); 			
			exibirMensagens(inbox);
			reescreveMenu(inbox, 'inbox');
		break;		
	}			
	naoLidos = $("#spam .emails").children("div.naolido");
	reescreveMenu(spam, "spam");
}
//utilizada para quando o usuário clicar em "não é spam" ou em "mover para inbox"
function marcaComoInbox(label, emails){
	var naoLidos = 0;
	switch(label){
		case '#spam': 
			removeEmailsSelecionados(spam, emails, inbox);
			exibirMensagens(spam);
			reescreveMenu(spam, "spam");
		break;
	}	
	reescreveMenu(inbox, "inbox");
}

function deletarEmail(label, emailsExcluidos){	
	switch(label){
		case '#inbox': 
			removeEmailsSelecionados(inbox, emailsExcluidos);
			exibirMensagens(inbox);
			reescreveMenu(inbox, "inbox");
		break;
		case '#spam':
			removeEmailsSelecionados(spam, emailsExcluidos);
			exibirMensagens(spam);
			reescreveMenu(spam, "spam");
		break;
	}
}

function arquivarEmail(label, emails){
	switch(label){
		case '#inbox': 
			removeEmailsSelecionados(inbox, emails, arquivados);
			exibirMensagens(inbox);
			reescreveMenu(inbox, 'inbox');
		break;
	}
}
/***************************************************************************/

//remove os emails selecionados, percorrendo o vetor correspondente a eles
function removeEmailsSelecionados(arrayManipulado, emails, arrayDestino){			  
	for(i in emails){
		removeDoArray(arrayManipulado, emails[i], arrayDestino);
	}				
}

//faz a comparacao, dentro do array que será manipulado (qualquer array de emails do sistema)
function removeDoArray(arrayEmails, emailRemovido, arrayDestino){
	var email = 0;  		
	for(email = 0; email < arrayEmails.length; email++){	     				
		if(arrayEmails[email].id == emailRemovido.replace("mail", "") ){						
			if(arrayDestino != undefined){
				arrayDestino.push(arrayEmails[email]);
			}
			efetuaRemocao(arrayEmails, email);
		}			
	}				
}

//efetua remocao de qualquer array
function efetuaRemocao(array, posicao){
	var k; 	
	for(k = posicao; k < array.length - 1; k++){
		array[k] = array[k+1];
	}
	array.pop();
}
