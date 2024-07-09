// routes/viagemRoutes.js
const express = require('express');
const router = express.Router();
const ViagemController = require('../controllers/ViagemController');

// Rota para cadastrar uma nova viagem
router.post('/', ViagemController.cadastrarViagem);

// Rota para listar todas as viagens
router.get('/', ViagemController.listarViagens);

// Rota para lançar despesa para uma viagem específica
router.post('/:viagemId/despesas', ViagemController.lancarDespesa);

// Rota para visualizar despesas de uma viagem específica
router.get('/:viagemId/despesas', ViagemController.visualizarDespesas);

module.exports = router;
