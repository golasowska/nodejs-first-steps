const express = require('express');

// stworzenie aplikacji
const app = express();

const http = require('http').Server(app);


const io = require('socket.io')(http);

http.listen(3000, () => {
  console.log('Express działa!');
});

app.use(express.static('public'));

let answers = {
  yes: 0,
  no: 0
};

//poinformuj, ze uzytkownik(socket) sie podlaczyl, obsluga eventu z frontu
io.on('connection', socket => {

  socket.emit('votes', answers);

  socket.on('myVote', data => {

    console.log({
      data
    });

    if (['yes', 'no'].indexOf(data) === -1) return;

    answers[data]++;

    io.emit('votes', answers)
  });
});
