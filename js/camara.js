function connect_to_camera() {
	// select camera
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

	var videoSelect = document.querySelector('select#videoSource');

	function gotSources(sourceInfos) {
		for (var i = 0; i !== sourceInfos.length; ++i) {
			var sourceInfo = sourceInfos[i];
			var option = document.createElement('option');
			console.log(sourceInfo);

			if (sourceInfo.kind === 'video') {
				option.text = sourceInfo.label || 'camera ' + (videoSelect.length + 1);
				videoSelect.appendChild(option);
			}
		}
	}

	MediaStreamTrack.getSources(gotSources);

	// peer connection
	var peer = new Peer({host: 'localhost', port: 9000, path: '/'});
	// var peer = new Peer({host: '172.18.172.250', port: 9000, path: '/'});

	peer.on('open', function(){ console.log(peer.id); });

	function start() {
		var videoSource = videoSelect.value;
		console.log(videoSelect.value)

		navigator.getUserMedia(
			{audio: false, video: true},
			function(stream) {
				$('#my_video').prop('src', URL.createObjectURL(stream));
				window.localStream = stream;
			},
			function() {console.log('camera error');}
		);
	}

	videoSelect.onchange = start;

	start();

	connect.addEventListener('click', function() {
		//var call = peer.call($('#call_id').val(), window.localStream);

		if (actual_camera == 1) {
			var call = peer.call($('#call_id_1').val(), window.localStream);
		}
		else if (actual_camera == 2) {
			var call = peer.call($('#call_id_2').val(), window.localStream);
		}
		else if (actual_camera == 3) {
			var call = peer.call($('#call_id_3').val(), window.localStream);
		}

		// connect.style.display = 'none';
	});
}

// global
var actual_camera = 0;

document.addEventListener('DOMContentLoaded', function() {
	// full screen
	var requestFullscreen = function (ele) {
		if (ele.requestFullscreen) {ele.requestFullscreen();}
		else if (ele.webkitRequestFullscreen) { ele.webkitRequestFullscreen(); }
		else if (ele.mozRequestFullScreen) { ele.mozRequestFullScreen(); }
		else if (ele.msRequestFullscreen) { ele.msRequestFullscreen(); }
		else { console.log('Fullscreen API is not supported.'); }
	};

	var full_screen = document.getElementById('full_screen');

	full_screen.addEventListener('click', function() {
		requestFullscreen(document.documentElement);
	});

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
