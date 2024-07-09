const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
// Remova a importação direta de Despesa para evitar dependências circulares
// const Despesa = require('./Despesa');

const Viagem = sequelize.define('Viagem', {
    nomeViagem: {
        type: DataTypes.STRING,
        allowNull: false
    },
    origem: {
        type: DataTypes.STRING,
        allowNull: false
    },
    destino: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valorFrete: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

// Associação - mova para um arquivo separado de associações para evitar problemas de dependências circulares
// Viagem.hasMany(Despesa, { foreignKey: 'ViagemId' });

module.exports = Viagem;
