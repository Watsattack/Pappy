$(document).ready(function(){
	$('.btn-sideBar-SubMenu').on('click', function(){
		var SubMenu=$(this).next('ul');
		var iconBtn=$(this).children('.zmdi-caret-down');
		if(SubMenu.hasClass('show-sideBar-SubMenu')){
			iconBtn.removeClass('zmdi-hc-rotate-180');
			SubMenu.removeClass('show-sideBar-SubMenu');
		}else{
			iconBtn.addClass('zmdi-hc-rotate-180');
			SubMenu.addClass('show-sideBar-SubMenu');
		}
	});
	$('.btn-exit-system').on('click', function(){
		swal({
		  	title: '¿Esta seguro que desea salir?',
		  	text: "La sesión será cerrada",
		  	type: 'warning',
		  	showCancelButton: true,
		  	confirmButtonColor: '#03A9F4',
		  	cancelButtonColor: '#F44336',
		  	confirmButtonText: '<i class="zmdi zmdi-run"></i> Cerrar Sesión',
		  	cancelButtonText: '<i class="zmdi zmdi-close-circle"></i> Cancelar'
		}).then(function () {
			window.location.href="../login.html";
		});
	});

	$('.btn-exit-system1').on('click', function(){
		swal({
		  	title: '¿Desea aceptar este curso?',
		  	text: "Se le notificará al Docente",
		  	type: 'warning',
		  	showCancelButton: true,
		  	confirmButtonColor: '#03A9F4',
		  	cancelButtonColor: '#F44336',
		  	confirmButtonText: '</i> Aceptar Curso',
		  	cancelButtonText: '</i> Cancelar Curso'
		}).then(function () {
			window.location.href="section.html";
		});
	});

	$('.btn-exit-system2').on('click', function(){
		swal({
				title: '¿Desea denegar este curso?',
				text: "Se le notificará al Docente",
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#03A9F4',
				cancelButtonColor: '#F44336',
				confirmButtonText: '</i> Ddenega Curso',
				cancelButtonText: '</i> Cancelar Curso'
		}).then(function () {
			window.location.href="section.html";
		});
	});
	$('.btn-exit-system3').on('click', function(){
		swal({
				title: 'Este es tu test de personalidad',
				text: "INFP",

				showCancelButton: true,
				confirmButtonColor: '#03A9F4',
				cancelButtonColor: '#2BE582  ',
				confirmButtonText: '</i> Realizar otra vez test',
				cancelButtonText: '</i> Aceptar'
		}).then(function () {
			window.location.href="https://www.16personalities.com/es/test-de-personalidad";
		});
	});


})(jQuery);
