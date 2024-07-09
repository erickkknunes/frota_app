// controllers/UserController.js
const User = require('../models/User');

// Cadastro de usuário
exports.cadastrarUsuario = async (req, res) => {
    try {
        const novoUsuario = await User.create(req.body);
        res.status(201).json(novoUsuario);
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        res.status(500).json({ error: 'Erro interno ao cadastrar usuário' });
    }
};

// Login de usuário
exports.loginUsuario = async (req, res) => {
    const { nomeUsuario, senha } = req.body;
    try {
        const usuario = await User.findOne({ where: { nomeUsuario, senha } });
        if (usuario) {
            res.status(200).json(usuario);
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' });
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        res.status(500).json({ error: 'Erro interno ao fazer login' });
    }
};
