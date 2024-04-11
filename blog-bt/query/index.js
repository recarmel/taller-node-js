const express = require('express');
const bodyParser = require('body-parser');

const { randomBytes } = require('crypto');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 4002;
const posts = {};

const manejadorEventos = (type, data) => {
  if (type == 'PostCreado') {
    //obtener id y titulo
    const { id, titulo } = data;
    post[id] = { id, titulo, comentarios: [] };
    //const comentarios = posts[postId];
  }
  if (type == 'ComentarioCreado') {
    //id, contenido, postId, status
    //buscar el post con postId
    //crear el comentario en la lista de comentarios
    const { id, contenido, postId, status } = data;
    const post = posts[postId];
    post.comentarios.push(id, contenido, status);
  }
  if (type == 'ComentarioActualizado') {
    //buscar el comentario a actualizar
    const { id, status, contenido, postId } = data;
    const post = posts[postId];
    //crear variable comentarios
    const comentario = post.comentarios.find((comment) => {
      return comment.id === id;
    });

    comentario.status = status;
    comentario.contenido = contenido;
  }


 } ;

app.post('/posts', (req, res) => {
  const { type, data } = req.body;
  console.log('Post creados', req.body);

  if (type == 'PostCreado') {
    //obtener id y titulo
    const { id, titulo } = data;
    post[id] = { id, titulo, comentarios: [] };
    //const comentarios = posts[postId];
  }
  if (type == 'ComentarioCreado') {
    //id, contenido, postId, status
    //buscar el post con postId
    //crear el comentario en la lista de comentarios
    const { id, contenido, postId, status } = data;
    const post = posts[postId];
    post.comentarios.push(id, contenido, status);
  }
  if (type == 'ComentarioActualizado') {
    //buscar el comentario a actualizar
    const { id, status, contenido, postId } = data;
    const post = posts[postId];
    //crear variable comentarios
    const comentario = post.comentarios.find((comment) => {
      return comment.id === id;
    });

    comentario.status = status;
    comentario.contenido = contenido;
  }

  res.send();
});

app.post('/events', (req, res) => {
  console.log('evento recibido', req.body.type);
  res.send({});
});

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  try {
    const res = await axios.get('http://localhost:4005/events');
    for (let evento of res.data) {
      console.log('Procesando evento', evento.type);
      const { type, data } = evento;
      manejadorEventos(type, data);
    }
  } catch (error) {
    console.error(error.message);
  }
});
