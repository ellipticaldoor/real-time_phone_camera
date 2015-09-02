document.addEventListener('DOMContentLoaded', function() {
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

	// screen 1
	var peer = new Peer('pantalla1', {debug: true, host: 'localhost', port: 9000, path: '/'});

	peer.on('open', function(){
		$('#screen_1_id').text(peer.id);
	});

	peer.on('call', function(call) {
		call.answer(window.localStream);

		call.on('stream', function(stream){
			$('#screen_1').prop('src', URL.createObjectURL(stream));
		});
	});

	// screen 2
	var peer2 = new Peer('pantalla2', {debug: true, host: 'localhost', port: 9000, path: '/'});

	peer2.on('open', function(){
		$('#screen_2_id').text(peer2.id);
	});

	peer2.on('call', function(call) {
		call.answer(window.localStream);

		call.on('stream', function(stream){
			$('#screen_2').prop('src', URL.createObjectURL(stream));
		});
	});

	// screen 3
	var peer3 = new Peer('pantalla3', {debug: true, host: 'localhost', port: 9000, path: '/'});

	peer3.on('open', function(){
		$('#screen_3_id').text(peer3.id);
	});

	peer3.on('call', function(call) {
		call.answer(window.localStream);

		call.on('stream', function(stream){
			$('#screen_3').prop('src', URL.createObjectURL(stream));
		});
	});
});
