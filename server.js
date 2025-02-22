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
  user: 'seu_usuario',
  host: 'localhost',
  database: 'seu_banco',
  password: 'sua_senha',
  port: 5432,
});

// Rota simples para buscar dados
app.get('/api/dados', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM sua_tabela');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    res.status(500).send('Erro ao buscar dados');
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
