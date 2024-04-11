const express = require('express');
const bodyParser = require('body-parser');

const { default: axios } = require('axios');

const app = express();
app.use(bodyParser.json());

const port = 4005;
const event = [];

app.post('/events', (req, res) => {
  const evento = req.body;
  event.push(evento);
  console.log('Evnet bus', evento.type);

  //logica para enviar eventos a los consumers
  axios.post('http://localhost:4000/events', evento)
    .then((resultado) => {
      console.log('OK: ', resultado);
    })
    .catch((err) => {
      console.error(err.message);
    });
  axios.post('http://localhost:4001/events', evento).catch((err) => {
    console.error(err.message);
  });
  axios.post('http://localhost:4002/events', evento).catch((err) => {
    console.error(err.message);
  });


  axios.post('http://localhost:4003/events', evento).catch((err) => {
    console.error(err.message);
  });

  res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
  res.send(event);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
