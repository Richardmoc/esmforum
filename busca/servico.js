// Contrato: repositorio.buscar(termo) -> Array<Pergunta>.
// O serviço conhece o contrato, não SQLite ou Express.
class TermoInvalido extends Error {}
class BuscarPerguntas {
  constructor(repositorio) { this.repositorio = repositorio; }
  executar(entrada = '') {
    if (typeof entrada !== 'string' || entrada.length > 100) {
      throw new TermoInvalido('Use um texto de até 100 caracteres.');
    }
    return this.repositorio.buscar(entrada.trim());
  }
}
module.exports = { BuscarPerguntas, TermoInvalido };
