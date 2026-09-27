class RepositorioPerguntasSqlite {
  constructor(bd) { this.bd = bd; }
  buscar(termo) {
    // instr trata %, _ e aspas como texto, sem interpolação SQL.
    // lower do SQLite padrão diferencia maiúsculas acentuadas; ver README.
    return this.bd.queryAll(`
      SELECT p.id_pergunta, p.texto, p.id_usuario,
             COUNT(r.id_resposta) AS num_respostas
      FROM perguntas p LEFT JOIN respostas r ON r.id_pergunta = p.id_pergunta
      WHERE instr(lower(p.texto), lower(?)) > 0
      GROUP BY p.id_pergunta, p.texto, p.id_usuario
      ORDER BY p.id_pergunta ASC`, [termo]);
  }
}
module.exports = RepositorioPerguntasSqlite;
