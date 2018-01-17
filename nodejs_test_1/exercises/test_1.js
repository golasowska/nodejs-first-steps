// setInterval(() => {
//     console.log('Hello World!');
// }, 1000);
//
// console.log('Cześć!');

const express = require('express');

// stworzenie aplikacji
const app = express();

// aplikacja nasluchuje na porcie 3000, + info, ze dziala (asynchroniczny callback)
app.listen(3000, () => {
  console.log('Express działa!');
});

// po wejsciu na nasza aplikacje(klikajac np odnosnik) na strone glowna, uruchom funkcje
app.get('/',(req, res) => {
  res.send('<h1>Hello, World!</h1>');
});

app.get('/pl', (req, res)=>{
  res.send('<h1>Siemanko, Świecie!</h1>');
});
