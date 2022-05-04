$(document).ready(function() {
	// esconde e mostra o btn
	$(window).scroll(function() {
	if ($(this).scrollTop() > 160) { // distancia que tem que rolar antes de aparecer
		$('.back-to-top').fadeIn(250);
	} else {
		$('.back-to-top').fadeOut(250);
	}
	});
	// manda pro topo
	$('.go-top').click(function(event) {
	event.preventDefault();
	$('html, body').animate({scrollTop: 0}, 1200);
	});

});

function departamento(){
	document.getElementById('departamento').style.display='block';
}
function fechardepartamento(){
	document.getElementById('departamento').style.display='none';
}

function darkMode() {
        var element = document.body;
        element.classList.toggle("fundo");
      }
