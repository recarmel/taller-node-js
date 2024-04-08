const express = require('express');
const bodyParser = require('body-parser');

const { randomBytes } = require('crypto');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 4001;
/*
{
 '0000': [comentario1, comentario2,..comentarion]
}
*/
const posts = {};
const comentariosPostId = {};

app.post('/posts/:id/comments', async (req, res) => {
  console.log('respuesta2');
  const Comentarioid = randomBytes(4).toString('hex');

  const { contenido } = req.body;

  const comentarios = comentariosPostId[req.params.id] || [];
  comentarios.push({
    id: Comentarioid,
    contenido,
    status: 'pendiente',
  });

  comentariosPostId[req.params.id] = comentarios;

  await axios
    .post('http://localhost:4005/events', {
      type: 'ComentarioCreado',
      data: {
        id: Comentarioid,
        contenido,
        postId: req.params.id,
        status: 'pendiente',
      },
    })
    .catch((err) => {
      console.error(err);
    });

  res.send(comentariosPostId);
});

app.get('/posts/:id/comments', (req, res) => {
  console.log('respuesta1');
  res.send(comentariosPostId[req.params.id] || []);
});

app.post('/events', async (req, res) => {
  console.log('evento recibido', req.body.type);

  const { type, data } = req.body;

  if (type == 'ComentarioModerado') {
    //actualizar el estado
    const { postId, id, contenido, status } = data;
    const comentarios = comentariosPostId[postId];

    const comentario = comentarios.find((com) => {
      return com.id == id;
    });
    comentario.status = status;

    await axios
      .post('http://localhost:4005/events', {
        type: 'ComentarioACtualizado',
        data: { id, status, contenido, postId },
      })
      .catch((err) => {
        console.error(err);
      });
  }

  res.send({});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
