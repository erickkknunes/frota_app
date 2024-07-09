// models/User.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const User = sequelize.define('User', {
    // Definição dos campos do modelo User
    nomeCompleto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomeUsuario: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    comissao: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    placaCaminhao: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;
