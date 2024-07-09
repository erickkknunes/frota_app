const Viagem = require('../models/Viagem');
const Despesa = require('../models/Despesa');

// Defina as associações aqui para evitar problemas de dependências circulares
Viagem.hasMany(Despesa, { foreignKey: 'ViagemId' });
Despesa.belongsTo(Viagem, { foreignKey: 'ViagemId' });

module.exports = { Viagem, Despesa };
