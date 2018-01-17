const express = require('express');

// stworzenie aplikacji
const app = express();

// aplikacja nasluchuje na porcie 3000, + info, ze dziala (asynchroniczny callback)
app.listen(3000, () => {
  console.log('Express działa!');
});

//serwowanie statycznych plikow przez Express zamiast wypisywanie HTMLa w string
//index.html jest z efaultu glowna sciezka
app.use( express.static('public') );

// gdy wejdziemy na '/count' to pojawi sie info

let counter = 0;
app.get('/count', (req, res) =>{
  res.send('Odwiedasz te stronę po raz: ' + ++counter );
});
