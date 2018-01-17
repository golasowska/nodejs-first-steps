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

let counter = 0;

//poinformuj, ze uzytkownik(socket) sie podlaczyl, obsluga eventu z frontu
io.on('connection', socket=>{
  //tutaj od razu wyswietli sie nowemu uzytkownikowi stan klikniec, a nie najpierw
  //napis hello World zamiast io jest socket-odswiezy tylko konkretnemu socketowi
  socket.emit('counter', counter);
  socket.on('add', ()=>{
    counter++;
    console.log(counter);
    //backend emituje do frontu event 'counter' , ktory zawiera dane w postaci counter
    io.emit('counter', counter);
  })
});
