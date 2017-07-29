const endpoint = 'ws://' + location.host;
console.log('connecting', endpoint);
const ws = new WebSocket(endpoint);

ws.addEventListener('open', function open() {
  ws.send('question');
});

ws.addEventListener('message', function incoming(data) {
  console.log(data);
});