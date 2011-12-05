<?php

$inbox = array(
	array(
		'id' 		=> 1, 
		'from'      => 'me, Leandro Alonso',
		'titulo'    => utf8_encode('Este � o t�tulo do email'),
		'mensagem'  => utf8_encode('E essa � a parte que mostra um pouco da mensagem para que voc� possa ler'),
		'data'	    => '20 Abr',
		'lido'      => false
	),
	array(
		'id' 	    => 2,
		'from'      => 'Bill Gates',
		'titulo'    => utf8_encode('Informa��es sobre o iPad'),
		'mensagem'  => utf8_encode('Fiquei sabendo que o Steve lhe enviou um iPad, lhe pago muito bem pra me mandar informa��es do produto...'),
		'data'      => '20 Abr',
		'lido'      => true
	),	
	array(
		'id'        => 3,
		'from'      => 'Steve Jobs',
		'titulo'    => utf8_encode('Opini�o sobre o iPad'),
		'mensagem' 	=> utf8_encode('Ol�, Estou com bastante medo de lan�ar o iPad gostaria que voc� desse uma olhada nele...'),
		'data'      => '20 Abr',
		'lido'      => true
	),	
	array(
		'id'   		=> 4,
		'from'		=> utf8_encode('Leandro Alonso'),
		'titulo'	=> utf8_encode('Inbox'),
		'mensagem'	=> utf8_encode('Acho que voc� n�o entendeu muito bem o que � pra ser feito, n�o sabe de nada!'),
		'data'		=> '20 Abr',
		'lido'		=> true
	), 
	array(
		'id'   		=> 5,
		'from'		=> utf8_encode('Ramon Gon�alves'),
		'titulo'	=> utf8_encode('Conte�do do Mini-Curso'),
		'mensagem'	=> utf8_encode('No momento estou trabalhando na transfer�ncia da mensagem de uma label para outra. N�o est� t�o simples de ser feito, o entendimento talvez fique comprometido!'),
		'data'		=> '19 Abr',	
		'lido' 		=> true
	),	
	array(
		'id'   		=> 6,
		'from'		=> utf8_encode('Ramon Gon�alves'),
		'titulo'	=> utf8_encode('Conte�do do Mini-Curso'),
		'mensagem'	=> utf8_encode('Estou escrevendo a manipula��o das mensagens que do "Inbox", com requisi��o ass�ncrona para carreg�-las!'),
		'data'		=> '19 Abr',	
		'lido' 		=> false
	)
);										

	//$inbox = new ArrayObject($inbox);
	print (json_encode($inbox));			
?>

<?
	//exemplo de como uma fun��o monta um JSON. Seria uma implementa��o mais simples da fun��o json_encode()
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