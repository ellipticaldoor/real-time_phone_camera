document.addEventListener('DOMContentLoaded', function() {
	var camera_focus = 1;
	var camera_mode = 3;

	// screens
	var screen_1 = document.getElementById('screen_1');
	var screen_2 = document.getElementById('screen_2');
	var screen_3 = document.getElementById('screen_3');

	document.addEventListener('keydown', function(event) {
		// console.log(event.keyCode);

		// set camera number
		// q
		if (event.keyCode == 81) {
			camera_mode = 1;
			remove_class(screen_1, screen_2, screen_3);
			add_class(screen_1, screen_2, screen_3, camera_mode);
			change_camera(camera_focus);
		}
		// w
		if (event.keyCode == 87) {
			camera_mode = 2;
			remove_class(screen_1, screen_2, screen_3);
			add_class(screen_1, screen_2, screen_3, camera_mode);
			screen_1.style.display = 'block';
			screen_2.style.display = 'block';
			screen_3.style.display = 'none';
		}
		// e
		if (event.keyCode == 69) {
			camera_mode = 3;
			remove_class(screen_1, screen_2, screen_3);
			add_class(screen_1, screen_2, screen_3, camera_mode);
			screen_1.style.display = 'block';
			screen_2.style.display = 'block';
			screen_3.style.display = 'block';
		}
		// p
		if (event.keyCode == 80) {
			camera_mode = 0;
			screen_1.style.display = 'none';
			screen_2.style.display = 'none';
			screen_3.style.display = 'none';		
		}

		// camera focus
		if (event.keyCode == '1'.charCodeAt(0)) {
			camera_focus = 1;
			if (camera_mode == 1) {
				change_camera(camera_focus);
			}
		}
		if (event.keyCode == '2'.charCodeAt(0)) {
			camera_focus = 2;
			if (camera_mode == 1) {
				change_camera(camera_focus);
			}
		}
		if (event.keyCode == '3'.charCodeAt(0)) {
			camera_focus = 3;
			if (camera_mode == 1) {
				change_camera(camera_focus);
			}
		}
	});
});

function change_camera(camera_focus) {
	if (camera_focus == 1) {
		screen_1.style.display = 'block';
		screen_2.style.display = 'none';
		screen_3.style.display = 'none';
	}
	if (camera_focus == 2) {
		screen_1.style.display = 'none';
		screen_2.style.display = 'block';
		screen_3.style.display = 'none';
	}
	if (camera_focus == 3) {
		screen_1.style.display = 'none';
		screen_2.style.display = 'none';
		screen_3.style.display = 'block';
	}
}

function remove_class(screen_1, screen_2, screen_3) {
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

function add_class(screen_1, screen_2, screen_3, camera_mode) {
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
}	}