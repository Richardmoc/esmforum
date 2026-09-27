const { TermoInvalido } = require('./servico');
module.exports = function criarController(servico) {
  return (req, res) => {
    try { return res.json(servico.executar(req.query.q)); }
    catch (erro) {
      if (erro instanceof TermoInvalido) return res.status(400).json({ erro: erro.message });
      return res.status(500).json({ erro: 'Não foi possível buscar perguntas.' });
    }
  };
};
