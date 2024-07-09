const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const viagemRoutes = require('./routes/viagemRoutes');
const despesaRoutes = require('./routes/despesaRoutes');

// Importar as associações
require('./associations/associations');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
app.use('/usuarios', userRoutes);
app.use('/viagens', viagemRoutes);
app.use('/despesas', despesaRoutes);

const PORT = process.env.PORT || 3000;

// Sincroniza os modelos com o banco de dados
sequelize.sync({ force: false }) // use 'force: true' para recriar as tabelas (cuidado, isso apaga dados existentes)
    .then(() => {
        console.log('Modelos sincronizados com o banco de dados');
        // Inicia a conexão com o banco de dados e então inicia o servidor
        return sequelize.authenticate();
    })
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso');
        app.listen(PORT, () => {
            console.log(`Servidor backend rodando na porta ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });
