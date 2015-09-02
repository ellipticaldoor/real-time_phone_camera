var camera_focus = 1;
var camera_mode = 3;
var actual_video = 1;

document.addEventListener('DOMContentLoaded', function() {

	// screens
	var screen_1 = document.getElementById('screen_1');
	var screen_2 = document.getElementById('screen_2');
	var screen_3 = document.getElementById('screen_3');
	var screen_4 = document.getElementById('screen_4');

	// remote
	var peer4 = new Peer('mando', {host: 'localhost', port: 9000, path: '/'});

	peer4.on('connection', function(conn) {
		conn.on('data', function(data){
			console.log(data);
			switch(data) {
				case 'mode_1':
					mode_1(screen_1, screen_2, screen_3, screen_4);
					break;
				case 'mode_2':
					mode_2(screen_1, screen_2, screen_3, screen_4);
					break;
				case 'mode_3':
					mode_3(screen_1, screen_2, screen_3, screen_4);
					break;
				case 'hide':
					hide(screen_1, screen_2, screen_3, screen_4);
					break;
				case 'screen_1_select':
					screen_select_1();
					break;
				case 'screen_2_select':
					screen_select_2();
					break;
				case 'screen_3_select':
					screen_select_3();
					break;
			}
		});
	});

	document.addEventListener('keydown', function(event) {
		// console.log(event.keyCode);
		// q
		if (event.keyCode == 81) { mode_1(screen_1, screen_2, screen_3, screen_4); }
		// w
		if (event.keyCode == 87) { mode_2(screen_1, screen_2, screen_3, screen_4); }
		// e
		if (event.keyCode == 69) { mode_3(screen_1, screen_2, screen_3, screen_4); }
		// p
		if (event.keyCode == 80) { hide(screen_1, screen_2, screen_3, screen_4); }

		// camera focus
		if (event.keyCode == '1'.charCodeAt(0)) { screen_select_1() }
		if (event.keyCode == '2'.charCodeAt(0)) { screen_select_2(); }
		if (event.keyCode == '3'.charCodeAt(0)) { screen_select_3(); }

		// r
		if (event.keyCode == 82) {
			hide(screen_1, screen_2, screen_3, screen_4);
			mode_video(screen_4);
		}

		//change video
		// a
		if (event.keyCode == 65) { 
			actual_video = 1;
			change_video();
		}
		// s
		if (event.keyCode == 83) { 
			actual_video = 2;
			change_video();
		}
		// d
		if (event.keyCode == 68) { 
			actual_video = 3;
			change_video();
		}
		// f
		if (event.keyCode == 70) { 
			actual_video = 4;
			change_video();
		}
		// g
		if (event.keyCode == 71) { 
			actual_video = 5;
			change_video();
		}
		// h
		if (event.keyCode == 72) { 
			actual_video = 6;
			change_video();
		}
		// z
		if (event.keyCode == 90) { 
			actual_video = 7;
			change_video();
		}
		// x
		if (event.keyCode == 88) { 
			actual_video = 8;
			change_video();
		}
		// 0
		if (event.keyCode == 79) { 
			actual_video = 10;
			change_video();
		}
	});
});

function change_video() {
	switch(actual_video) {
		case 1:
			// a
			$('#video_play').attr('src', '/video/1_introduccion.mp4');
			break;
		case 2:
			// s
			$('#video_play').attr('src', '/video/2_inicio_fiesta.mp4');
			break;
		case 3:
			// d
			$('#video_play').attr('src', '/video/3_carta_alba.mp4');
			break;
		case 4:
			// f
			$('#video_play').attr('src', '/video/4_despues_de_la_fiesta.mp4');
			break;
		case 5:
			// g
			$('#video_play').attr('src', '/video/5_carretera.mp4');
			break;
		case 6:
			// h
			$('#video_play').attr('src', '/video/6_plano_final_luisa.mp4');
			break;
		case 7:
			// z
			$('#video_play').attr('src', '/video/prima_donna.mp3');
			break;
		case 8:
			// x
			$('#video_play').attr('src', '/video/liza.mp3');
			break;
		case 10:
			// o
			$('#video_play').attr('src', '');
			break;
	}
}

function change_camera() {
	if (camera_focus == 1) {
		screen_1.style.display = 'block';
		screen_2.style.display = 'none';
		screen_3.style.display = 'none';
		screen_4.style.display = 'none';
	}
	if (camera_focus == 2) {
		screen_1.style.display = 'none';
		screen_2.style.display = 'block';
		screen_3.style.display = 'none';
		screen_4.style.display = 'none';
	}
	if (camera_focus == 3) {
		screen_1.style.display = 'none';
		screen_2.style.display = 'none';
		screen_3.style.display = 'block';
		screen_4.style.display = 'none';
	}
}

function remove_class(screen_1, screen_2, screen_3, screen_4) {
	screen_1.classList.remove('one');
	screen_2.classList.remove('one');
	screen_3.classList.remove('one');

	screen_1.classList.remove('two');
	screen_2.classList.remove('two');
	screen_3.classList.remove('two');

	screen_1.classList.remove('three');
	screen_2.classList.remove('three');
	screen_3.classList.remove('three');
}

function add_class(screen_1, screen_2, screen_3, screen_4) {
	if (camera_mode == 1) {
		screen_1.classList.add('one');
		screen_2.classList.add('one');
		screen_3.classList.add('one');
	}
	if (camera_mode == 2) {
		screen_1.classList.add('two');
		screen_2.classList.add('two');
		screen_3.classList.add('two');
	}
	if (camera_mode == 3) {
		screen_1.classList.add('three');
		screen_2.classList.add('three');
		screen_3.classList.add('three');
	}
}

// action functions
function mode_1(screen_1, screen_2, screen_3) {
	camera_mode = 1;
	remove_class(screen_1, screen_2, screen_3);
	add_class(screen_1, screen_2, screen_3);
	change_camera(camera_focus);
}

function mode_2(screen_1, screen_2, screen_3, screen_4) {
	camera_mode = 2;
	remove_class(screen_1, screen_2, screen_3);
	add_class(screen_1, screen_2, screen_3);
	screen_1.style.display = 'block';
	screen_2.style.display = 'block';
	screen_3.style.display = 'none';
	screen_4.style.display = 'none';
}

function mode_3(screen_1, screen_2, screen_3, screen_4) {
	camera_mode = 3;
	remove_class(screen_1, screen_2, screen_3);
	add_class(screen_1, screen_2, screen_3);
	screen_1.style.display = 'block';
	screen_2.style.display = 'block';
	screen_3.style.display = 'block';
	screen_4.style.display = 'none';
}

function hide(screen_1, screen_2, screen_3, screen_4) {
	camera_mode = 0;
	screen_1.style.display = 'none';
	screen_2.style.display = 'none';
	screen_3.style.display = 'none';
	screen_4.style.display = 'none';
}

function mode_video(screen_4) {
	screen_4.style.display = 'block';
}

// camera mode
function screen_select_1() {
	camera_focus = 1;
	if (camera_mode == 1) {change_camera();}
}

function screen_select_2() {
	camera_focus = 2;
	if (camera_mode == 1) { change_camera(); }
}

function screen_select_3() {
	camera_focus = 3;
	if (camera_mode == 1) { change_camera(); }
}