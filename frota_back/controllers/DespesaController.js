// controllers/DespesaController.js
const Despesa = require('../models/Despesa');
const Viagem = require('../models/Viagem');

// Cadastrar uma nova despesa para uma viagem específica
exports.cadastrarDespesa = async (req, res) => {
    try {
        const novaDespesa = await Despesa.create({
            descricao: req.body.descricao,
            valor: req.body.valor,
            ViagemId: req.body.viagemId // assumindo que viagemId é enviado no corpo da requisição
        });
        res.status(201).json(novaDespesa);
    } catch (error) {
        console.error('Erro ao cadastrar despesa:', error);
        res.status(500).json({ error: 'Erro interno ao cadastrar despesa' });
    }
};

// Listar todas as despesas de uma viagem específica
exports.listarDespesasViagem = async (req, res) => {
    const { viagemId } = req.params;
    try {
        const despesas = await Despesa.findAll({
            where: { ViagemId: viagemId },
            include: [Viagem] // Inclui a associação com Viagem
        });
        res.status(200).json(despesas);
    } catch (error) {
        console.error('Erro ao listar despesas da viagem:', error);
        res.status(500).json({ error: 'Erro interno ao listar despesas da viagem' });
    }
};