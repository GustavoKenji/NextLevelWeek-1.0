import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  console.log('Listagem de Usuários');

  res.json([
    'Diego',
    'Kenji',
    'WebMaster'
  ]);
});

app.listen(3333);