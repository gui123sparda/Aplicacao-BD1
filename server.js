// Backend: server.js (Node.js + Express + PostgreSQL)

const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3000;

// Configuração do CORS para permitir requisições do Vue.js
app.use(cors());
app.use(express.json());

// Configurar conexão com o PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Finjob',
  password: 'Gui.smd*123',
  port: 5432,
});

// Rota simples para buscar dados
app.get('/api/dados', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuario');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    res.status(500).send('Erro ao buscar dados');
  }
});

// Nova rota para listar usuários
app.get('/api/usuarios', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuario');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    res.status(500).send('Erro ao buscar usuário');
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

/*
 * Frontend: Vue.js - App.vue
 * Assumindo que você já tenha criado o projeto com Vue CLI (vue create nome-do-projeto)
*/
