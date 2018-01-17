const express = require('express');

// stworzenie aplikacji
const app = express();

const http = require('http').Server(app);

//otwarcie polaczenia w czasie rzeczywistym

const io = require('socket.io') (http);

// aplikacja nasluchuje na porcie 3000, + info, ze dziala (asynchroniczny callback),
// ale zamiast app.listen - jest http.listen - bo warstwa nizsza app
http.listen(3000, () => {
  console.log('Express działa!');
});

app.use( express.static('public'));

let currText = '';

//poinformuj, ze uzytkownik(socket) sie podlaczyl, obsluga eventu z frontu
io.on('connection', socket=>{

  socket.emit('refreshText', currText);

  socket.on('newText', data=>{
    currText = data;
    io.emit('refreshText', currText)
  });
});
