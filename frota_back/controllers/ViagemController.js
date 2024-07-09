const Viagem = require('../models/Viagem');
const Despesa = require('../models/Despesa');

// Função para cadastrar uma nova viagem
exports.cadastrarViagem = async (req, res) => {
    try {
        const { nomeViagem, origem, destino, valorFrete } = req.body;
        const novaViagem = await Viagem.create({
            nomeViagem,
            origem,
            destino,
            valorFrete
        });
        res.status(201).json(novaViagem);
    } catch (error) {
        console.error('Erro ao cadastrar viagem:', error);
        res.status(500).json({ message: 'Erro ao cadastrar viagem' });
    }
};

// Função para listar todas as viagens
exports.listarViagens = async (req, res) => {
    try {
        const viagens = await Viagem.findAll();
        res.status(200).json(viagens);
    } catch (error) {
        console.error('Erro ao listar viagens:', error);
        res.status(500).json({ message: 'Erro ao listar viagens' });
    }
};

// Função para lançar despesa para uma viagem específica
exports.lancarDespesa = async (req, res) => {
    try {
        const { viagemId } = req.params;
        const { descricao, valor } = req.body;
        const despesa = await Despesa.create({
            descricao,
            valor,
            ViagemId: viagemId
        });
        res.status(201).json(despesa);
    } catch (error) {
        console.error('Erro ao lançar despesa:', error);
        res.status(500).json({ message: 'Erro ao lançar despesa' });
    }
};

// Função para visualizar despesas de uma viagem específica
exports.visualizarDespesas = async (req, res) => {
    try {
        const viagemId = req.params.viagemId;
        const viagem = await Viagem.findOne({
            where: { id: viagemId },
            include: [{ model: Despesa }]
        });

        if (!viagem) {
            return res.status(404).json({ message: 'Viagem não encontrada' });
        }

        // Calcular a soma de todas as despesas
        const totalDespesas = viagem.Despesas.reduce((acc, despesa) => acc + parseFloat(despesa.valor), 0);

        res.json({
            viagem,
            totalDespesas,
            lucro: parseFloat(viagem.valorFrete) - totalDespesas
        });
    } catch (error) {
        console.error('Erro ao visualizar despesas:', error);
        res.status(500).json({ message: 'Erro ao visualizar despesas' });
    }
};
