var socket = io();

$('form').submit(function(event){
  socket.emit('chatMessage', $('#m').val());
  $('#m').val('');
  event.preventDefault();
});

socket.on('chatMessage', function(msg){
  $('#messages').append($('<h4>').text(msg));
});
