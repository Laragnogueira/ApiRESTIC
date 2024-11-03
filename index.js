const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let alunos = [];
let currentId = 1;

app.get('/', (req, res) => {
  res.send('Bem-vindo à API de Alunos!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

app.post('/alunos', (req, res) => {
    const { nome, email, nome_curso } = req.body;
    const novoAluno = { id: currentId++, nome, email, nome_curso };
    alunos.push(novoAluno);
    res.status(201).json(novoAluno);
});

app.get('/alunos', (req, res) => {
    res.json(alunos);
});
  

app.get('/alunos/:id', (req, res) => {
    const aluno = alunos.find(a => a.id === parseInt(req.params.id));
    if (aluno) {
      res.json(aluno);
    } else {
      res.status(404).json({ message: 'Aluno não encontrado' });
    }
  });