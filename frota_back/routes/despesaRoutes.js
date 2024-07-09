// routes/despesaRoutes.js
const express = require('express');
const router = express.Router();
const DespesaController = require('../controllers/DespesaController');

// Rota para cadastrar uma nova despesa para uma viagem específica
router.post('/', DespesaController.cadastrarDespesa);

// Rota para listar todas as despesas de uma viagem específica
router.get('/:viagemId', DespesaController.listarDespesasViagem);

module.exports = router;
