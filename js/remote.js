document.addEventListener('DOMContentLoaded', function() {
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

	var peer = new Peer({host: 'localhost', port: 9000, path: '/'});
	//var peer = new Peer({host: '192.168.1.35', port: 9000, path: '/'});

	// UI initialization
	var camera_focus = 1;
	var camera_mode = 3;

	var mode_1 = document.getElementById('mode_1');
	var mode_2 = document.getElementById('mode_2');
	var mode_3 = document.getElementById('mode_3');
	var hide = document.getElementById('hide');
	var screen_1_select = document.getElementById('screen_1_select');
	var screen_2_select = document.getElementById('screen_2_select');
	var screen_3_select = document.getElementById('screen_3_select');

	// UI buttons

	mode_1.addEventListener('click', function() {
		var conn = peer.connect('mando');
		conn.on('open', function(){ conn.send('mode_1');});
	});
	mode_2.addEventListener('click', function() {
		var conn = peer.connect('mando');
		conn.on('open', function(){ conn.send('mode_2');});
	});
	mode_3.addEventListener('click', function() {
		var conn = peer.connect('mando');
		conn.on('open', function(){ conn.send('mode_3');});
	});
	hide.addEventListener('click', function() {
		var conn = peer.connect('mando');
		conn.on('open', function(){ conn.send('hide');});
	});
	screen_1_select.addEventListener('click', function() {
		var conn = peer.connect('mando');
		conn.on('open', function(){ conn.send('screen_1_select');});
	});
	screen_2_select.addEventListener('click', function() {
		var conn = peer.connect('mando');
		conn.on('open', function(){ conn.send('screen_2_select');});
	});
	screen_3_select.addEventListener('click', function() {
		var conn = peer.connect('mando');
		conn.on('open', function(){ conn.send('screen_3_select');});
	});
});
