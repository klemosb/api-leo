import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import db from './src/config/dbConnect.js';
import router from './src/routes/routes.js';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

db.on('error', console.error.bind(console, 'Erro de conexão'));
db.once('open', () => {
  console.log('Conexão feita com sucesso');
});

const app = express();

// Configuração para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Rota para a página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'public', 'cadastro-vendas.html'));
});

// Rota para a página "adicionar-venda.html"
app.get('/adicionar-venda', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'public', 'adicionar-venda.html'));
});

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

app.use(express.json());
app.use(router);

export default app;
