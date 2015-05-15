function connect_to_camera() {
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

	var peer = new Peer({debug: true, host: 'localhost', port: 9000, path: '/'});

	peer.on('open', function(){ camera_id.textContent = peer.id; });

	navigator.getUserMedia(
			{audio: false, video: true},
			function(stream) {
				$('#my_video').prop('src', URL.createObjectURL(stream));
				window.localStream = stream;
			},
			function() {console.log('camera error');}
		);

	connect.addEventListener('click', function() {
		var call = peer.call($('#call_id').val(), window.localStream);

		connect.style.display = 'none';
		disconnect.style.display = 'block';
	});

	disconnect.addEventListener('click', function() {
		var call = peer.call($('#call_id').val(), window.localStream);

		connect.style.display = 'block';
		disconnect.style.display = 'none';
	});
}

// global
var actual_camera = 0;

document.addEventListener('DOMContentLoaded', function() {
	var menu = document.getElementById('menu');
	var camera = document.getElementById('camera');

	// select buttons
	var camera_1 = document.getElementById('camera_1');
	var camera_2 = document.getElementById('camera_2');
	var camera_3 = document.getElementById('camera_3');

	//UI
	var camera_number = document.getElementById('camera_number');
	var camera_id = document.getElementById('camera_id');
	var my_video = document.getElementById('my_video');

	// buttons
	var connect = document.getElementById('connect');
	var disconnect = document.getElementById('disconnect');

	camera_1.addEventListener('click', function() {
		actual_camera = 1;
		display_camera();
	});

	camera_2.addEventListener('click', function() {
		actual_camera = 2;
		display_camera();
	});

	camera_3.addEventListener('click', function() {
		actual_camera = 3;
		display_camera();
	});
});


function display_camera() {
	camera.style.display = 'block';
	menu.style.display = 'none';
	camera_number.textContent = actual_camera;
	connect_to_camera();
}