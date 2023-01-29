//animacion de maquina de escribir
var i = 0;
var txt = 'Copyright © 2023 Mi Sitio Web';
var speed = 80;

function typeWrite(){
	if(i < txt.length){
		document.getElementById('texto').innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWrite, speed);
	}
}
typeWrite();