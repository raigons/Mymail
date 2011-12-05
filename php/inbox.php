<?php

$inbox = array(
	array(
		'id' 		=> 1, 
		'from'      => 'me, Leandro Alonso',
		'titulo'    => utf8_encode('Este é o título do email'),
		'mensagem'  => utf8_encode('E essa é a parte que mostra um pouco da mensagem para que você possa ler'),
		'data'	    => '20 Abr',
		'lido'      => false
	),
	array(
		'id' 	    => 2,
		'from'      => 'Bill Gates',
		'titulo'    => utf8_encode('Informações sobre o iPad'),
		'mensagem'  => utf8_encode('Fiquei sabendo que o Steve lhe enviou um iPad, lhe pago muito bem pra me mandar informações do produto...'),
		'data'      => '20 Abr',
		'lido'      => true
	),	
	array(
		'id'        => 3,
		'from'      => 'Steve Jobs',
		'titulo'    => utf8_encode('Opinião sobre o iPad'),
		'mensagem' 	=> utf8_encode('Olá, Estou com bastante medo de lançar o iPad gostaria que você desse uma olhada nele...'),
		'data'      => '20 Abr',
		'lido'      => true
	),	
	array(
		'id'   		=> 4,
		'from'		=> utf8_encode('Leandro Alonso'),
		'titulo'	=> utf8_encode('Inbox'),
		'mensagem'	=> utf8_encode('Acho que você não entendeu muito bem o que é pra ser feito, não sabe de nada!'),
		'data'		=> '20 Abr',
		'lido'		=> true
	), 
	array(
		'id'   		=> 5,
		'from'		=> utf8_encode('Ramon Gonçalves'),
		'titulo'	=> utf8_encode('Conteúdo do Mini-Curso'),
		'mensagem'	=> utf8_encode('No momento estou trabalhando na transferência da mensagem de uma label para outra. Não está tão simples de ser feito, o entendimento talvez fique comprometido!'),
		'data'		=> '19 Abr',	
		'lido' 		=> true
	),	
	array(
		'id'   		=> 6,
		'from'		=> utf8_encode('Ramon Gonçalves'),
		'titulo'	=> utf8_encode('Conteúdo do Mini-Curso'),
		'mensagem'	=> utf8_encode('Estou escrevendo a manipulação das mensagens que do "Inbox", com requisição assíncrona para carregá-las!'),
		'data'		=> '19 Abr',	
		'lido' 		=> false
	)
);										

	//$inbox = new ArrayObject($inbox);
	print (json_encode($inbox));			
?>

<?
	//exemplo de como uma função monta um JSON. Seria uma implementação mais simples da função json_encode()
	function constroiJSON($array){
		$it = 0;
		$json = '[';
		foreach($array as $atributo){
			if($it++ > 0) $json .= ', ';
			$json .= concatenaJSON($atributo);
		}
		$json .= ']';
		return $json;
	}
	function concatenaJSON($atributo){
		$json = '';
		$json .= '{';
		$json .= '"id": '	     . $atributo['id']		 . ',';
		$json .= '"from": "'     . $atributo['from']	 . '",';
		$json .= '"titulo": "'   . $atributo['titulo']	 . '",';
		$json .= '"mensagem": "' . $atributo['mensagem'] . '",';
		$json .= '"data": "'	 . $atributo['data']	 . '",';
		$json .= '"lido": '		 . (bool)$atributo['lido'];
		$json .= '}';
		return $json;
	}
?>