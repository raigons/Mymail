$(document).ready(function(){
    $(".email .from, .email .excerpt, .email .date").live('click', function(){				
		if(!$(this).hasClass("selectmail")){
			var label = $(this).parent().parent().parent().attr("id");
			/*alert(
				$(this).children(".from").text() + '\n' +
				$(this).children(".excerpt").text() + '\n' +
				this.id
				);*/
			//$(this).removeClass('naolido');		
			var array;
			switch(label){
				case 'inbox': array = inbox; break;
				case 'spam' : array = spam;  break;			
			}
			exibeEmail($(this).parent().attr("id").replace("mail", ""), array, label);
			reescreveMenu(array, label);
			
			$(".sec").hide();
			$("#email").show(); //deve exibir os valores do email selecionado
		}else
			return false;
    });	
	//ativar possibilidade de arrastar o email
	$(".email .grippy").live('mouseover', function(){
		$(this).draggable({
			cursor: 'move',
			cursorAt: {top: 0, left: -15},			
			helper: function(event){
				return $("'<div class='draggable'>idMensagem = " +$(this).parent().attr("id")+"</div>")
			},
			drag: function(event){
				$("#"+$(this).parent().attr("id")).find(":checkbox").attr("checked", true);	
			},
			stop: function(event, ui){
				$("#"+$(this).parent().attr("id")).find(":checkbox").attr("checked", false);
			},
			revert: 'invalid'
		});
	});
	//Onde o email arrastado foi solto
	$("#menu ul li a.spam, #menu ul li a.inbox").droppable({					
		over: function(ev, ui){			
			$(this).parent().addClass("sel");
		},
		out: function(ev, ui){
			label = $(".sec:visible").attr("id");
			if(!$(this).hasClass(label)){
				$(this).parent().removeClass("sel");
			}					
		},
		drop: function(ev, ui){			
			var label = $(".sec:visible").attr("id");			
			if(!$(this).hasClass(label)){
				var emailArrastado = new Array();				
				emailArrastado.push($("#"+label+" .emails").find(":checkbox:checked").parent().parent().attr("id"));			
				trocarEmailDeLabel(label, emailArrastado);			
				$(this).parent().removeClass("sel");
			}			
		}
	});
});