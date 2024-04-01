const express = require('express');
const bodyParser = require('body-parser');

const { randomBytes } = require('crypto');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 4000;
const posts = {};

app.post('/posts/create', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { titulo } = req.body;
  posts[id] = {
    id: id,
    titulo: titulo,
  };

  await axios
    .post('http://localhost:4005/events', {
      type: 'PostCreado',
      data: {
        id: id,
        titulo: titulo,
      },
    })
    .then((resultado) => {
      console.log('ok', resultado);
    })
    .catch((err) => {
      console.error(err);
    });

  res.send(posts[id]);
});

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (res, req) => {
  console.log('evento recibido', req.body.type);
  res.send({});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
