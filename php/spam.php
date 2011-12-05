<?php
$spam = array(
	array(
		'id'   		=> 7,
		'from'		=> ('WallMart'),
		'titulo'	=> ('Compre a camisa do seu time de futebol!'),
		'mensagem'	=> ('Não possui a camisa do seu clube?! Compre camisas de futebol pela metade do preço no WallMart! Só amanhã!'),
		'data'		=> '21 Abr',
		'lido'		=> true
	), 
	array(
		'id'   		=> 8,
		'from'		=> ('Abril'),
		'titulo'	=> ('Assine VEJA'),
		'mensagem'	=> ('Assine VEJA agora mesmo e ganhe grátis uma camisa personalizada para torcer pelo Brasil na Copa do Mundo 2010!! Não perca esta chance!'),
		'data'		=> '21 Abr',	
		'lido' 		=> true
	),	
	array(
		'id'   		=> 9,
		'from'		=> ('Tony Smiechel'),
		'titulo'	=> ('Beregning'),
		'mensagem'	=> ('Kun skøre folk, der har en computer science selvfølgelig!! Det er også utroligt mængden af mænd, der er samlet i en enkelt klasse. Ændre kurs nu!'),
		'data'		=> '21 Abr',	
		'lido' 		=> false
	)
);
print json_encode($spam);

?>