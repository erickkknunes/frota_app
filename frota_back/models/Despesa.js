const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
// Remova a importação direta de Viagem para evitar dependências circulares
// const Viagem = require('./Viagem');

const Despesa = sequelize.define('Despesa', {
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

// Associação - mova para um arquivo separado de associações para evitar problemas de dependências circulares
// Despesa.belongsTo(Viagem, { foreignKey: 'ViagemId' });

module.exports = Despesa;
